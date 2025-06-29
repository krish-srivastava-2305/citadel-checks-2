import dotenv from 'dotenv';
import fs from 'fs';
import { Pinecone } from '@pinecone-database/pinecone';
import { sampleUsers } from './sample/sample2.js';

dotenv.config();

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

async function generateEmbeddings(users) {
  const model = 'llama-text-embed-v2';

  const enrichedUsers = [];

  for (const user of users) {
    const input = `${JSON.stringify(user.demographics)} ${JSON.stringify(user.preferences)}  ${JSON.stringify(user.interests)} ${JSON.stringify(user.behavioral_data)}`;

    try {
      const embeddings = await pc.inference.embed(
        model,
        [input],
        { inputType: 'passage', truncate: 'END' }
      );

      enrichedUsers.push({
        ...user,
        embedding: embeddings.data[0].values,
      });

      console.log(`Embedded user: ${user.id}`);
    } catch (err) {
      console.error(`Failed to embed user: ${user.id}`, err);
    }

    // Optional throttling to avoid rate limits
    await new Promise(res => setTimeout(res, 500));
  }

  return enrichedUsers;
}

function writeToSampleFile(data, filePath = 'app/sample/similarityMatrix.js') {
  const content = `export const similarityMatrix = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`similarityMatrix.js file generated with ${data.length} enriched users.`);
}
// const userEmbeddings = await generateEmbeddings(userData);
// writeToSampleFile(userEmbeddings);


function cosineSimilarity(vecA, vecB) {
  const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));

  if (magnitudeA === 0 || magnitudeB === 0) {
    return 0;
  }

  return dotProduct / (magnitudeA * magnitudeB);
}

const similarityMatrix = {};
for (let i = 0; i < sampleUsers.length; i++) {
  const key = sampleUsers[i].id;
  const val = [];
  for (let j = 0; j < sampleUsers.length; j++) {
    if (i === j) {
      val.push({
        user: sampleUsers[j].id,
        similarity: 1,
      });
      continue;
    }
    const similarity = cosineSimilarity(sampleUsers[i].embedding, sampleUsers[j].embedding);
    val.push({
      user: sampleUsers[j].id,
      similarity,
    });
  }
  similarityMatrix[key] = val;
}

writeToSampleFile(similarityMatrix);

console.log(similarityMatrix);