const fs = require("fs");

// const __dirname = "C:\\Projects\\IconMaker\\";
let imagesPrename = "kalm";
const directory = __dirname + "\\icons\\icons\\png\\";

// List all the filenames before renaming
getCurrentFilenames();
function getCurrentFilenames() {
  console.log("Current filenames:");
  fs.readdirSync(directory).forEach((oldFileName) => {
    let newFileName;
    if (oldFileName.includes("kalm")) {
      newFileName = oldFileName;
    } else {
      newFileName =
        imagesPrename +
        oldFileName.substring(0, oldFileName.indexOf("x")) +
        ".png";
    }

    fs.renameSync(directory + oldFileName, directory + newFileName, (err) => {
      if (err) throw err;
      else {
        console.log(
          `File Renamed: ------------ ${oldFileName} ------------> ${newFileName}`
        );
      }
    });
  });
}
