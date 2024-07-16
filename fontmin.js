const Fontmin = require('fontmin');
const fs = require('fs');
const path = require('path');

// Define the input and output directories
const fontDir = path.join(__dirname, 'themes', 'simple', 'fonts');
const outputDir = path.join(__dirname, 'static', 'fonts');

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read all files from the content directory to gather the text used in the site
const contentDir = path.join(__dirname, 'content');
let text = '';

const readTextFromDir = (dir) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      readTextFromDir(fullPath);
    } else {
      text += fs.readFileSync(fullPath, 'utf8');
    }
  });
};

readTextFromDir(contentDir);

// Define the input font files
const fontFiles = fs
  .readdirSync(fontDir)
  .filter((file) => /\.(ttf|otf)$/.test(file));

fontFiles.forEach((fontFile) => {
  const inputPath = path.join(fontDir, fontFile);
  const outputPath = path.join(
    outputDir,
    path.basename(fontFile, path.extname(fontFile))
  );

  // Create a new Fontmin instance
  const fontmin = new Fontmin()
    .src(inputPath)
    .use(Fontmin.glyph({ text })) // Pass the text used in the website
    .use(Fontmin.ttf2woff2());

  // Run Fontmin and write the output files
  fontmin.run((err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach((file) => {
      const ext = path.extname(file.path);
      fs.writeFileSync(`${outputPath}${ext}`, file.contents);
      console.log(
        `Font ${fontFile} optimized and saved as ${outputPath}${ext}`
      );
    });
  });
});

console.log('Font optimization complete.');
