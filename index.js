const fs = require("fs");
const path = require("path");
const {minify} = require("terser");

const PRE = "javascript:";
const POST = "void(0);";

const SRC_DIR = "./src/";
const BUILD_DIR = "./build/";

fs.readdir(SRC_DIR, (err, files) => {
  files.forEach(file => {
    const sourceCode = fs.readFileSync(path.resolve(SRC_DIR, file), "utf-8");

    minify(sourceCode, { mangle: false })
      .then(data => {
        const minifiedCode = data.code;
        const result = PRE + minifiedCode + POST;

        console.log(path.resolve(BUILD_DIR, file));
        fs.writeFileSync(path.resolve(BUILD_DIR, file), result, "utf-8");
      });
  });
});
