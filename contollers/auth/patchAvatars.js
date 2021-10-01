const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

const { User } = require("../../schemas");

const avatarsDir = path.join(__dirname, "../../", "public/avatars");

const patchAvatars = async (req, res) => {
  const { path: tempStorage, originalname } = req.file;
  const { _id } = req.user;
  try {
    const [extention] = originalname.split(".").reverse();
    const newFileName = `avatar_main_${_id}.${extention}`;
    const resultStorage = path.join(avatarsDir, newFileName);
    Jimp.read(tempStorage, (err, avatar) => {
      console.log(tempStorage);
      if (err) throw err;
      return avatar
        .resize(256, 256) // resize
        .quality(60) // set JPEG quality
        .greyscale() // set greyscale
        .write(resultStorage); // save
    });
    await fs.rename(tempStorage, resultStorage);
    const avatarsURL = path.join("/avatars", newFileName);
    const avatar = await User.findByIdAndUpdate(
      _id,
      { avatarsURL },
      { new: true }
    );
    res.status(201).json(avatar);
  } catch (error) {
    await fs.unlink(tempStorage);
    throw error;
  }
};

module.exports = patchAvatars;
