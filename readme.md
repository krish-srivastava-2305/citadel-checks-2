# Citadel - Group Formation System

## Introduction

Citadel is an intelligent restaurant recommendation system that goes beyond simple suggestions. It's designed to help people find dining companions by creating groups of users with similar preferences, dietary requirements, and budget constraints.

Think of it as a "dating app for foodies" - but instead of romantic matches, we're matching people who want to dine together based on their food preferences, location, budget, and dietary needs.

### What makes Algo special?
- **Smart Filtering**: Applies hard filters like city, dietary restrictions, and budget to narrow down potential matches
- **Similarity Matching**: Uses advanced algorithms to find users with similar tastes and preferences
- **Intelligent Grouping**: Creates optimal dining groups when multiple compatible users are found
- **Fallback Strategy**: Has a relaxed matching system when strict criteria don't yield enough results

The caching strategy and algorithmic efficiency make it suitable for real-time applications while the fallback mechanisms ensure reliability and user satisfaction.

## Testing Strategy

### 1. Unit Testing

**Core Algorithm Tests**
```javascript
// Test similarity calculation accuracy
describe('Similarity Calculation', () => {
  test('should calculate correct cosine similarity', () => {
    const user1 = { preferences: [1, 0, 1, 0, 1] };
    const user2 = { preferences: [1, 1, 0, 0, 1] };
    expect(calculateSimilarity(user1, user2)).toBe(0.6667);
  });
});

// Test group formation logic
describe('Group Formation', () => {
  test('should create optimal group sizes', () => {
    const users = generateTestUsers(20);
    const groups = buildHighConfidenceGroups(users);
    groups.forEach(group => {
      expect(group.length).toBeGreaterThanOrEqual(4);
      expect(group.length).toBeLessThanOrEqual(6);
    });
  });
});
```

**Filter Testing**
```javascript
describe('User Filters', () => {
  test('should filter by city correctly', () => {
    const users = [
      { city: 'NYC', diet: 'vegetarian' },
      { city: 'LA', diet: 'vegetarian' },
      { city: 'NYC', diet: 'omnivore' }
    ];
    const filtered = applyLocationFilter(users, 'NYC');
    expect(filtered).toHaveLength(2);
  });

  test('should handle dietary restrictions', () => {
    const users = generateUsersWithDiets(['vegan', 'vegetarian', 'gluten-free']);
    const compatible = checkDietaryCompatibility(users);
    expect(compatible).toBe(true);
  });
});
```

### 2. Integration Testing

**End-to-End Group Building**
```javascript
describe('Complete Group Building Flow', () => {
  test('should handle full matching pipeline', async () => {
    // Setup test data
    const users = await createTestUsers(50);
    const targetUser = users[0];
    
    // Run complete algorithm
    const result = await findDiningCompanions(targetUser.id);
    
    // Verify results
    expect(result.groups).toBeDefined();
    expect(result.groups.length).toBeGreaterThan(0);
    expect(result.fallbackUsed).toBeDefined();
  });
});
```

**Redis Cache Testing**
```javascript
describe('Similarity Matrix Cache', () => {
  test('should cache and retrieve similarity data', async () => {
    const matrix = generateSimilarityMatrix(testUsers);
    await cacheSimilarityMatrix(matrix);
    
    const cached = await getSimilarityMatrix();
    expect(cached).toEqual(matrix);
  });
});
```

### 3. Performance Testing

**Load Testing**
```javascript
describe('Performance Tests', () => {
  test('should handle 1000 users within 5 seconds', async () => {
    const users = generateTestUsers(1000);
    const startTime = Date.now();
    
    const groups = await buildGroups(users);
    const endTime = Date.now();
    
    expect(endTime - startTime).toBeLessThan(5000);
    expect(groups.length).toBeGreaterThan(0);
  });
});
```

**Memory Usage Testing**
```javascript
test('should maintain reasonable memory usage', () => {
  const initialMemory = process.memoryUsage().heapUsed;
  const users = generateTestUsers(10000);
  buildSimilarityMatrix(users);
  
  const finalMemory = process.memoryUsage().heapUsed;
  const memoryIncrease = (finalMemory - initialMemory) / 1024 / 1024; // MB
  
  expect(memoryIncrease).toBeLessThan(100); // Less than 100MB increase
});
```

### 4. Data Quality Testing

**Similarity Matrix Validation**
```javascript
describe('Data Quality', () => {
  test('similarity matrix should be symmetric', () => {
    const matrix = generateSimilarityMatrix(testUsers);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        expect(matrix[i][j]).toBe(matrix[j][i]);
      }
    }
  });

  test('should handle edge cases', () => {
    expect(() => buildGroups([])).not.toThrow();
    expect(() => buildGroups([singleUser])).not.toThrow();
  });
});
```

### 5. Mock Data Generation

```javascript
// Test data factory
const TestDataFactory = {
  createUser: (overrides = {}) => ({
    id: generateId(),
    city: 'NYC',
    dietary_restrictions: ['vegetarian'],
    budget_range: [20, 50],
    preferences: {
      cuisines: ['italian', 'mexican'],
      spice_level: 3,
      dining_frequency: 'weekly'
    },
    ...overrides
  }),

  createUserBatch: (count, template = {}) => {
    return Array.from({ length: count }, () => 
      TestDataFactory.createUser(template)
    );
  },

  createCompatibleUsers: (count = 5) => {
    const basePreferences = {
      cuisines: ['italian', 'japanese'],
      budget_range: [25, 45],
      dietary_restrictions: ['vegetarian']
    };
    
    return TestDataFactory.createUserBatch(count, basePreferences);
  }
};
```

## How to Run Locally

### Prerequisites

- **Node.js** (v18 or higher)

### Quick Setup

1. **Clone the Repository**
```bash
git clone https://github.com/krish-srivastava/citadel-checks.git
cd citadel-checks
```

2. **Install Dependencies**
```bash
npm install
```
3. **Set Up Environment Variables**
   - Create a `.env` file in the root directory
   - Add your ENVIRONMENT VARIABLES:
      PINECONE_API_KEY=""
      PINECONE_INDEX_HOST=""
      PINECONE_INDEX_NAME=""

3. **Run Algorithm**
```bash
node app/index.js
```
4. **Run Data Enrichment**
```bash
node app/dataEnricher.js
```


## Core Logic

The system follows a systematic approach to match users and form dining groups:

1. **Initial Filtering**: When a user starts looking for dining companions, the system first applies hard filters:
   - **Location**: Only matches users in the same city
   - **Dietary Restrictions**: Ensures compatibility (vegetarian with vegetarian, etc.)
   - **Budget Range**: Matches users with similar spending preferences

2. **Similarity Calculation**: For users who pass the initial filters, the system:
   - Retrieves cached similarity data or calculates it fresh
   - Uses cosine similarity to compare user preferences
   - Creates a similarity matrix showing how compatible each user is with others

3. **Group Formation Decision**: The system checks if there are enough compatible users (>6 remaining):
   - **Yes**: Proceeds to build high-confidence groups with strict similarity thresholds
   - **No**: Groups any remaining users with relaxed criteria to ensure everyone gets matched

4. **Fallback Mechanism**: If the high-confidence grouping fails, the system automatically switches to relaxed group building to ensure users aren't left out.

## Why It Works?

### 1. **Multi-Layer Filtering Approach**
Instead of trying to match everyone with everyone, Citadel uses a smart filtering system:
- **Hard filters** eliminate obvious incompatibilities early
- **Soft similarity matching** fine-tunes the matches
- This reduces computational complexity while improving match quality

### 2. **Cached Similarity Matrix**
The system maintains a pre-computed similarity matrix:
- Speeds up the matching process significantly
- Allows for real-time group formation
- Updates incrementally as new users join

### 3. **Adaptive Group Size**
The algorithm adapts based on available users:
- **High demand periods**: Creates multiple smaller groups with high compatibility
- **Low demand periods**: Uses relaxed criteria to ensure everyone gets matched
- This ensures the system works effectively regardless of user volume

### 4. **Fallback Strategy**
The two-tier approach (high confidence → relaxed) ensures:
- No user is left without a match
- Quality is prioritized but availability is guaranteed
- System reliability even with limited user base

## Core Group Building Algorithm

### High Confidence Group Building

```
1. Sort users by similarity scores (highest first)
2. For each user:
   - Find their most similar unmatched users
   - Create groups of optimal size (typically 4-6 people)
   - Ensure minimum similarity threshold is met
3. Validate group compatibility:
   - Check dietary restrictions don't conflict
   - Verify budget ranges overlap
   - Confirm location compatibility
```

### Relaxed Group Building (Fallback)

```
1. Take all remaining unmatched users
2. Apply only essential filters:
   - Same city requirement
   - Major dietary conflicts (allergies, etc.)
3. Create groups based on:
   - Geographic proximity
   - Similar budget ranges
   - Basic preference alignment
4. Fill groups to minimum viable size
```

![Citadel Logo](/flows/GroupBuilderAlgo.png)

### Similarity Matrix Generation

The system uses cosine similarity to compare user vectors containing:
- **Food preferences** (cuisine types, spice levels, etc.)
- **Dining habits** (frequency, preferred times, group size preferences)
- **Budget patterns** (average spending, price sensitivity)
- **Dietary requirements** (vegetarian, vegan, gluten-free, etc.)
![Citadel Logo](/flows/similarityMap.png)

The algorithm runs for all users periodically:
```
For each user pair (i, j):
  similarity_score = cosine_similarity(user_i_vector, user_j_vector)
  similarity_matrix[i][j] = similarity_score
```

This matrix is cached in Redis for quick lookup during group formation.

## Conclusion

Citadel solves a real-world problem: finding compatible dining companions in a systematic, efficient way. By combining hard filtering with intelligent similarity matching, the system ensures that users are grouped with people they're likely to enjoy dining with.

The dual-tier approach (high confidence + relaxed fallback) makes the system robust and reliable, working effectively whether there are 10 users or 10,000 users in the system.

Key benefits:
- **For Users**: Better dining experiences with compatible companions
- **For Restaurants**: More consistent group bookings and customer satisfaction
- **For the Platform**: Scalable, efficient matching that works at any scale

The caching strategy and algorithmic efficiency make it suitable for real-time applications while the fallback mechanisms ensure reliability and user satisfaction.
