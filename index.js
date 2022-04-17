const fs = require("fs");

let imagesPrename = "iconName";
const directory = __dirname + "\\icons\\icons\\png\\";

getCurrentFilenames();
function getCurrentFilenames() {
  console.log("Current filenames:");
  fs.readdirSync(directory).forEach((oldFileName) => {
    let newFileName;
    if (oldFileName.includes(imagesPrename)) {
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
