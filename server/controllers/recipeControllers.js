const Filter = require("bad-words");
const Insta = require("../models/Quiz");
require("../models/database");

// recipeControllers.js
exports.homepage = async (req, res) => {
  try {
    res.render("index", { title: "Homepage" });
  } catch (error) {
    console.log(error);
  }
};
/**
 * Form to Share Views
 */
exports.share = async (req, res) => {
  try {
    res.render("share", { title: "iStand" });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Share Photos
 */
exports.photos = async (req, res) => {
  try {
    const insta = await Insta.find();
    res.render("photos", { title: "iStand",insta});
  } catch (error) {
    console.log(error);
  }
};

/**
 * Share Thoughts
 */
exports.thoughts = async (req, res) => {
  try {
    const insta = await Insta.find();
    res.render("thoughts", { title: "iStand" ,insta});
  } catch (error) {
    console.log(error);
  }
};

/**
 * Share Videos
 */
exports.videos = async (req, res) => {
  try {
    const insta = await Insta.find();
    res.render("videos", { title: "iStand",insta });
  } catch (error) {
    console.log(error);
  }
};



/**
 * Share Audios
 */
exports.audio = async (req, res) => {
  try {
    const insta = await Insta.find();
    res.render("audio", { title: "iStand",insta });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Share Submit
 */
exports.shareSubmit = async (req, res) => {
  try {
    const { name, thoughts } = req.body;
    let photopath = null;
    let videopath = null;
    let audiopath = null;

    if (req.files) {
      const photofile = req.files.photo;
      const videofile = req.files.video;
      const audiofile = req.files.audio;

      if (photofile) {
        const photoname = `${Date.now()}_photo.jpg`;
        photopath = `./photo/${photoname}`;
        photofile.mv(photopath);
      }

      if (videofile) {
        const videoFilename = `${Date.now()}_video.mp4`;
        videopath = `./video/${videoFilename}`;
        videofile.mv(videopath);
      }

      if (audiofile) {
        const audioname = `${Date.now()}_audio.mp3`;
        audiopath = `./audio/${audioname}`;
        a = `/audio/${audioname}`;
        audiofile.mv(audiopath);
      }
    }

    const filter = new Filter();
    filter.addWords("stupid", "otherOffensiveWord");
    
    // Check if thoughts is not null or undefined before filtering
    const filteredThoughts = thoughts ? filter.clean(thoughts) : '';

    const newData = new Insta({
      name,
      thoughts: filteredThoughts,
      photo: photopath,
      video: videopath,
      audio: a
    });

    newData.save();
    res.redirect("/share");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};


