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

// ---------- GROUP BUILDER ----------
function buildGroups(similarityMap, threshold = 0.94) {
  const allUsers = Object.keys(similarityMap);
  const groupedUsers = new Set();
  const finalGroups = [];

  while (groupedUsers.size <= allUsers.length - 6) {
    const ungrouped = shuffle(allUsers.filter(u => !groupedUsers.has(u)));
    const base = ungrouped[0];

    const candidates = similarityMap[base]
      .filter(entry =>
        entry.user !== base &&
        !groupedUsers.has(entry.user) &&
        entry.similarity >= threshold
      )
      .map(entry => entry.user);

    let bestGroup = null;
    let bestScore = -Infinity;

    const combos = getCombinations(candidates, 5);

    for (const combo of combos) {
      const group = [base, ...combo];

      if (new Set(group).size < group.length) continue;

      const metrics = getPairwiseScore(group, similarityMap);
      if (metrics && metrics.score > bestScore) {
        bestScore = metrics.score;
        bestGroup = group;
      }
    }

    if (bestGroup) {
      bestGroup.forEach(u => groupedUsers.add(u));
      finalGroups.push(bestGroup);
    } else {
      groupedUsers.add(base); // Mark base as exhausted
    }
  }

  return finalGroups;
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

// ---------- RUN ----------
const groups = buildGroups(filteredMap, 0.94);
groups.forEach((group, i) => {
  console.log(`Group ${i + 1}:`, group);
});
