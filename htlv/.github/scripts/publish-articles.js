import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INDEX_PATH = path.join(process.cwd(), "content/blog/index.json");

function getTodayString() {
  const today = new Date();
  const year = today.getUTCFullYear();
  const month = String(today.getUTCMonth() + 1).padStart(2, "0");
  const day = String(today.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const raw = fs.readFileSync(INDEX_PATH, "utf-8");
const index = JSON.parse(raw);
const today = getTodayString();
let publishedCount = 0;

const updated = index.map((entry) => {
  if (entry.status === "scheduled" && entry.publishDate === today) {
    publishedCount++;
    return { ...entry, status: "published" };
  }
  return entry;
});

if (publishedCount > 0) {
  fs.writeFileSync(INDEX_PATH, JSON.stringify(updated, null, 2) + "\n");
  console.log(`Published ${publishedCount} article(s).`);
} else {
  console.log("No articles to publish today.");
}
