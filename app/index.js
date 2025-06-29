import { sampleUsers } from "./sample/sample2.js";
import { similarityMap } from "./sample/similarityMap.js";

// ---------- HARD FILTERING ----------
const applyHardFilters = (userData, dietary, city, budget) => {
  return userData.filter(user => {
    const matchesDietary = user.preferences.dietary === "no restrictions" || user.preferences.dietary === dietary;
    const matchesCity = user.demographics.city === city;
    const matchesBudget = user.preferences.budget === budget;

    return matchesDietary && matchesCity && matchesBudget;
  });
};

const filteredUsers = applyHardFilters(sampleUsers, "vegetarian", "Delhi", "₹1200+");
console.log("Filtered Users:", filteredUsers.length);

// ---------- FILTER SIMILARITY MAP ----------
const filteredMap = {};
filteredUsers.forEach(user => {
  filteredMap[user.id] = similarityMap[user.id].filter(u =>
    filteredUsers.some(fu => fu.id === u.user)
  );
});
console.log("Filtered Similarity Map prepared");


function buildGreedyGroup(baseUser, availableUsers, similarityMap, groupSize = 6, minSimilarity = 0.9) {
    let group = [baseUser];
    const usedInGroup = new Set([baseUser]);

    for (let i = 1; i < groupSize; i++) {
        let bestCandidate = null;
        let maxSimilarity = -Infinity;

        availableUsers.forEach(candidateId => {
            if (!usedInGroup.has(candidateId)) {
                const simEntry = similarityMap[baseUser].find(e => e.user === candidateId);
                
                if (simEntry && simEntry.similarity > maxSimilarity && simEntry.similarity >= minSimilarity) {
                    bestCandidate = candidateId;
                    maxSimilarity = simEntry.similarity;
                }
            }
        });

        if (bestCandidate) {
            group.push(bestCandidate);
            usedInGroup.add(bestCandidate);
        } else {
            return null;
        }
    }
    const metrics = getPairwiseScore(group, similarityMap);
    if (metrics && metrics.score >= minSimilarity) {
        return group;
    }

    return null;
}

// ---------- GROUP BUILDER ----------
function buildGroups(similarityMap, threshold = 0.94) {
    const allUsers = shuffle(Object.keys(similarityMap));
    const groupedUsers = new Set();
    const finalGroups = [];

    const ungrouped = allUsers.filter(u => !groupedUsers.has(u));

    for (const base of ungrouped) {
        if (groupedUsers.has(base)) {
            continue;
        }

        const newGroup = buildGreedyGroup(base, ungrouped, similarityMap, 6, threshold);

        if (newGroup) {
            const isGroupValid = newGroup.every(user => !groupedUsers.has(user));

            if (isGroupValid) {
                newGroup.forEach(u => groupedUsers.add(u));
                finalGroups.push(newGroup);
                console.log(`Group formed with base user ${base}`);
            }
        }
    }

    const remainingUsers = allUsers.filter(u => !groupedUsers.has(u));
    return { groups: finalGroups, remaining: remainingUsers };
}

// ---------- UTILITIES ----------
function getCombinations(arr, k) {
  const res = [];
  const helper = (start, combo) => {
    if (combo.length === k) {
      res.push([...combo]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      helper(i + 1, combo);
      combo.pop();
    }
  };
  helper(0, []);
  return res;
}

function getPairwiseScore(group, simMap) {
  const scores = [];

  for (let i = 0; i < group.length; i++) {
    for (let j = i + 1; j < group.length; j++) {
      const userA = group[i];
      const userB = group[j];

      const simEntry = simMap[userA].find(e => e.user === userB);
      if (!simEntry) return null;
      scores.push(simEntry.similarity);
    }
  }

  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  const std = Math.sqrt(
    scores.reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) / scores.length
  );

  return { avg, std, score: avg - std };
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

let allGroups = [];

console.log("\n--- Stage 1: Building High-Confidence Groups ---");
const { groups: stage1Groups, remaining: remainingAfterStage1 } = buildGroups(filteredMap, 0.94);
allGroups = allGroups.concat(stage1Groups);
console.log(`Found ${stage1Groups.length} groups in Stage 1.`);
console.log(`Remaining users: ${remainingAfterStage1.length}`);

if (remainingAfterStage1.length >= 6) {
    console.log("\n--- Stage 2: Building Relaxed Groups ---");
    const relaxedMap = {};
    remainingAfterStage1.forEach(id => {
        relaxedMap[id] = filteredMap[id].filter(entry => remainingAfterStage1.includes(entry.user));
    });

    const { groups: stage2Groups, remaining: remainingAfterStage2 } = buildGroups(relaxedMap, 0.9);
    allGroups = allGroups.concat(stage2Groups);
    console.log(`Found ${stage2Groups.length} groups in Stage 2.`);
    console.log(`Remaining users: ${remainingAfterStage2.length}`);

    if (remainingAfterStage2.length > 0) {
        console.log("\n--- Stage 3: Handling Leftover Users ---");
        if (remainingAfterStage2.length >= 3) {
            allGroups.push(remainingAfterStage2);
            console.log("Formed group from leftovers.");
        }
    }
}

console.log("\n--- Final Groups ---");
allGroups.forEach((group, i) => {
    console.log(`Group ${i + 1} (Size: ${group.length}):`, group);
});
