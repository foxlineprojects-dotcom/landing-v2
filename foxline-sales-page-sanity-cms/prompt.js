const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "app/components");
const outputFile = path.join(__dirname, "output.txt");

const files = fs
  .readdirSync(componentsDir)
  .filter((file) => file.endsWith(".jsx"));

let outputContent = "";

files.forEach((file) => {
  const filePath = path.join(componentsDir, file);
  const fileData = fs.readFileSync(filePath, "utf-8");

  outputContent += `\n\n==================== ${file} ====================\n\n`;
  outputContent += fileData;
});

// Write to output.txt
fs.writeFileSync(outputFile, outputContent, "utf-8");

console.log(`✅ Done! ${files.length} components merged into output.txt`);
