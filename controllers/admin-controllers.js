const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");

const Shortabout = require("../models/shortabout");
const Longfcabout = require("../models/longfcabout");
const Longteamabout = require("../models/longteamabout");
const Contact = require("../models/contact");
const News = require("../models/news");
const Player = require("../models/player");
const CandM = require("../models/candm");
const Contactquery = require("../models/contactquery");
const User = require("../models/user");

// //short about dummy
// let dummyshortabout = [
//   {
//     shorttitle: "One Of The Best Team Representing Nepal 1",
//     shortabout:
//       "One Of The Best Team Representing Nepal and Most of the players are nepali so we are proud to represent our club as KHUKURI FC club. Our Club have amazing young players as well as some veteran players too.",
//     aboutimg: "sujankickingball",
//   },
// ];
// //long fc dummy
// let dummylongfcabout = [
//   {
//     aboutfclongtitle: "One Of The Best Team Representing Nepal long fc 1",
//     aboutfclong:
//       "One Of The Best Team Representing Nepal and Most of the players are nepali so we are proud to represent our club as KHUKURI FC club. Our Club have amazing young players as well as some veteran players too. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit doloribus rem iure! Dicta, voluptates, tenetur rem error ullam iure in est perspiciatis molestias quo provident voluptatibus, facilis magnam? Praesentium? ",
//     aboutfclongimg: "aboutfclong",
//   },
// ];
// // long team dummy
// let dummylongteamabout = [
//   {
//     aboutteamlongtitle: "Our Khukuri FC Team 1 ",
//     aboutteamlong:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit doloribus rem iure! Dicta, voluptates, tenetur rem error ullam iure in est perspiciatis molestias quo provident voluptatibus, facilis magnam? Praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit doloribus rem iure! Dicta, voluptates, tenetur rem error ullam iure in est perspiciatis molestias quo provident voluptatibus, facilis magnam? Praesentium?",
//     aboutteamlongimg: "aboutteamlong",
//   },
// ];
// //contact dummy
// let dummycontact = [
//   {
//     phnum: "+356 2163 6734",
//     email: "xyz@gmail.com",
//     address: "123 Street, NY, USA",
//     srcformap:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7245161762394!2d83.46194687375075!3d27.694908126043067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996868a00b9414f%3A0x2b3bcc802b959afe!2sButwal%20Bus%20Park!5e0!3m2!1sen!2snp!4v1696098075264!5m2!1sen!2snp",
//   },
// ];
// //contact query dummy
// let dummycontactquery = [
//   {
//     cqid: "cq",
//     name: "Kishan Pun",
//     email: "xyz@gmail.com",
//     phone: "+977 980746897",
//     subject: "to join fc club",
//     message:
//       "I like to join the fc club i'm good at attacking mid also center forward",
//   },
// ];
// //news dummy
// let dummynews = [
//   {
//     nid: "n1",
//     img: "kishan img",
//     title: "Khukuri fc Champions",
//     newsdetail: "Sujan Scored 3 goals and won the game",
//     publisher: "Kishan1",
//     date: "01 Jan, 2046",
//   },
//   {
//     nid: "n2",
//     img: "sujanimg",
//     title: "Khukuri fc Champions",
//     newsdetail: "Sujan kicked a volley",
//     publisher: "Kishan2",
//     date: "01 Jan, 2046",
//   },
//   {
//     nid: "n3",
//     img: "kishanimg",
//     title: "Khukuri fc Champions",
//     newsdetail:
//       "Khukuri FC Won the champions league in the finals and now moving towards laliga",
//     publisher: "Kishan3",
//     date: "01 Jan, 2046",
//   },
// ];
// //player dummy
// let dummyplayer = [
//   {
//     playerid: "p1",
//     playername: "Kishan Pun",
//     playerposition: "Forward",
//     playerfblink: "https://www.facebook.com/magardipesh.baral",
//     playerinstalink: "https://www.instagram.com/dipeshb.magar/",
//     playerimg: "playerimg1",
//   },
//   {
//     playerid: "p2",
//     playername: "Dipesh Baral",
//     playerposition: "Forward",
//     playerfblink: "https://www.facebook.com/magardipesh.baral",
//     playerinstalink: "https://www.instagram.com/dipeshb.magar/",
//     playerimg: "playerimg2",
//   },
//   {
//     playerid: "p3",
//     playername: "Sujan Budhathoki",
//     playerposition: "Forward",
//     playerfblink: "https://www.facebook.com/magardipesh.baral",
//     playerinstalink: "https://www.instagram.com/dipeshb.magar/",
//     playerimg: "playerimg3",
//   },
//   {
//     playerid: "p4",
//     playername: "Shishir Thapa",
//     playerposition: "Forward",
//     playerfblink: "https://www.facebook.com/magardipesh.baral",
//     playerinstalink: "https://www.instagram.com/dipeshb.magar/",
//     playerimg: "playerimg1",
//   },
//   {
//     playerid: "p5",
//     playername: "Dipesh Baral 2",
//     playerposition: "Forward",
//     playerfblink: "https://www.facebook.com/magardipesh.baral",
//     playerinstalink: "https://www.instagram.com/dipeshb.magar/",
//     playerimg: "playerimg2",
//   },
// ];
// //candm dummy
// let dummycandm = [
//   {
//     CandMid: "cm1",
//     CandMname: "Kishan Pun",
//     CandMposition: "Coach",
//     CandMfblink: "https://www.facebook.com/magardipesh.baral",
//     CandMinstalink: "https://www.instagram.com/dipeshb.magar/",
//     CandMimg: "playerimg1",
//   },
//   {
//     CandMid: "cm2",
//     CandMname: "Sujan Budhathoki",
//     CandMposition: "Manager",
//     CandMfblink: "https://www.facebook.com/magardipesh.baral",
//     CandMinstalink: "https://www.instagram.com/dipeshb.magar/",
//     CandMimg: "playerimg3",
//   },
//   {
//     CandMid: "cm3",
//     CandMname: "Dipesh Baral",
//     CandMposition: "Manager",
//     CandMfblink: "https://www.facebook.com/magardipesh.baral",
//     CandMinstalink: "https://www.instagram.com/dipeshb.magar/",
//     CandMimg: "playerimg1",
//   },
// ];
//dummy user
// let dummyuser = [
//   {
//     uid: "u1",
//     name: "Kishan Pun",
//     email: "xyz@gmail.com",
//     password: "123456789",
//   },
//   {
//     uid: "u2",
//     name: "Kishann Pun",
//     email: "abc@gmail.com",
//     password: "123456789",
//   },
// ];

//   main body code start here /////

//short about code!!!///

// const getshortabouttable = async (req, res, next) => {
//   //   console.log("get request in fc");
//   let shortabout;
//   try{
//    shortabout = await Shortabout.find();
//   }catch(err){
//     const error = new HttpError("Something went wrong, could not fetch data",500 );
//     return next(error)
//   };

//   if (shortabout.length == 0) {
//     const error = new HttpError("Could not find the ' short about' data.", 404);
//     return next(error);
//   }

//   res.json({ about: shortabout.toObject( {getters: true} ) });
//   // res.json({shortabout: shortabout.toObject })
// };

const getshortabouttable = async (req, res, next) => {
  try {
    const shortabout = await Shortabout.find();

    if (shortabout.length === 0) {
      const error = new HttpError(
        "Could not find the 'short about' data.",
        404
      );
      return next(error);
    }

    // Convert each Mongoose document to plain JavaScript objects
    const shortaboutObjects = shortabout.map((doc) =>
      doc.toObject({ getters: true })
    );

    res.json({ shortabout: shortaboutObjects });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not fetch data",
      500
    );
    return next(error);
  }
};

const shortaboutform = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError("Invalid Inputs passed, Please the check your data.", 422)
    );
  }

  const { shorttitle, shortabout } = req.body;

  const createdShortAbout = new Shortabout({
    shorttitle,
    shortabout,
    aboutimg:
      "https://i.pinimg.com/originals/a9/4a/b2/a94ab28928497c5836e5ed54d7a8ff3a.jpg",
  });

  try {
    await createdShortAbout.save();
  } catch (err) {
    const error = new HttpError(
      "Creating Short About failed please try again",
      500
    );
    console.log(error);
    return next(error);
  }

  res.status(201).json({ shortabout: createdShortAbout });
};

const deleteShortabout = async (req, res, next) => {

  const said = req.body._id;
  try {
    // Use Mongoose's deleteOne to remove a document by a specific criteria
    const result = await Shortabout.deleteOne({ _id: said });

    if (result.deletedCount === 0) {
      const error = new HttpError("Data not found in the database", 404);
      return next(error);
    }
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete data",
      500
    );
    return next(error);
  }
};

exports.getshortabouttable = getshortabouttable;
exports.shortaboutform = shortaboutform;
exports.deleteShortabout = deleteShortabout;

//long fc about code!!!! ////

const getlongfcabouttable = async (req, res, next) => {
  //   console.log("get request in fc");
  // const longfcabout = dummylongfcabout;

  // if (longfcabout.length == 0) {
  //   throw new HttpError("Could not find the 'long fc about' data.", 404);
  // }

  // res.json({ longfcabout: longfcabout });
  try {
    const longfcabout = await Longfcabout.find();

    if (longfcabout.length === 0) {
      const error = new HttpError("Could not find the 'Long FC' data.", 404);
      return next(error);
    }

    // Convert each Mongoose document to plain JavaScript objects
    const longfcaboutObjects = longfcabout.map((doc) =>
      doc.toObject({ getters: true })
    );

    res.json({ longfcabout: longfcaboutObjects });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not fetch data",
      500
    );
    return next(error);
  }
};

const longfcaboutform = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError("Invalid Inputs passed, Please the check your data.", 422)
    );
  }

  const { aboutfclongtitle, aboutfclong } = req.body;

  const createdLongfcAbout = new Longfcabout({
    aboutfclongtitle,
    aboutfclong,
    aboutfclongimg:
      "https://i.pinimg.com/originals/a9/4a/b2/a94ab28928497c5836e5ed54d7a8ff3a.jpg",
  });

  try {
    await createdLongfcAbout.save();
  } catch (err) {
    const error = new HttpError(
      "Creating Long fc About failed please try again",
      500
    );
    console.log(error);
    return next(error);
  }

  res.status(201).json({ longfcabout: createdLongfcAbout });
};

const deleteLongfcabout = async (req, res, next) => {
  const lfcid = req.body._id;
  // dummylongfcabout = dummylongfcabout.filter(
  //   (lfca) => lfca.aboutfclongtitle !== aboutfclongtitle
  // );
  // res.status(200).json({ message: "Deleted" });
  try {
    // Use Mongoose's deleteOne to remove a document by a specific criteria
    const result = await Longfcabout.deleteOne({
      _id: lfcid,
    });

    if (result.deletedCount === 0) {
      const error = new HttpError("Data not found in the database", 404);
      return next(error);
    }
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete data",
      500
    );
    return next(error);
  }
};

exports.getlongfcabouttable = getlongfcabouttable;
exports.longfcaboutform = longfcaboutform;
exports.deleteLongfcabout = deleteLongfcabout;

/// long team about code

const getlongteamabouttable = async (req, res, next) => {
  //   console.log("get request in fc");
  // const longteamabout = dummylongteamabout;

  // if (longteamabout.length == 0) {
  //   throw new HttpError("Could not find the 'long team about' data.", 404);
  // }

  // res.json({ longteamabout: longteamabout });
  try {
    const longteamabout = await Longteamabout.find();

    if (longteamabout.length === 0) {
      const error = new HttpError("Could not find the 'Long Team' data.", 404);
      return next(error);
    }

    // Convert each Mongoose document to plain JavaScript objects
    const longteamaboutObjects = longteamabout.map((doc) =>
      doc.toObject({ getters: true })
    );

    res.json({ longteamabout: longteamaboutObjects });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not fetch data",
      500
    );
    return next(error);
  }
};

const longteamaboutform = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError("Invalid Inputs passed, Please the check your data.", 422)
    );
  }

  const { aboutteamlongtitle, aboutteamlong } = req.body;

  const createdLongteamAbout = new Longteamabout({
    aboutteamlongtitle,
    aboutteamlong,
    aboutteamlongimg:
      "https://i.pinimg.com/originals/a9/4a/b2/a94ab28928497c5836e5ed54d7a8ff3a.jpg",
  });

  try {
    await createdLongteamAbout.save();
  } catch (err) {
    const error = new HttpError(
      "Creating Long team About failed please try again",
      500
    );
    console.log(error);
    return next(error);
  }

  res.status(201).json({ longteamabout: createdLongteamAbout });
};

const deleteLongteamabout = async (req, res, next) => {
  const ltmid = req.body._id;
  // dummylongteamabout = dummylongteamabout.filter(
  //   (lta) => lta.aboutteamlongtitle !== aboutteamlongtitle
  // );
  // res.status(200).json({ message: "Deleted" });
  try {
    // Use Mongoose's deleteOne to remove a document by a specific criteria
    const result = await Longteamabout.deleteOne({
      _id: ltmid,
    });

    if (result.deletedCount === 0) {
      const error = new HttpError("Data not found in the database", 404);
      return next(error);
    }
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete data",
      500
    );
    return next(error);
  }
};

exports.getlongteamabouttable = getlongteamabouttable;
exports.longteamaboutform = longteamaboutform;
exports.deleteLongteamabout = deleteLongteamabout;

//contact info code here

const getcontacttable = async (req, res, next) => {
  //   console.log("get request in fc");
  // const contact = dummycontact;

  // if (contact.length == 0) {
  //   throw new HttpError("Could not find the 'contact' data.", 404);
  // }

  // res.json({ contact: contact });
  try {
    const contact = await Contact.find();

    if (contact.length === 0) {
      const error = new HttpError("Could not find the 'Contact' data.", 404);
      return next(error);
    }

    // Convert each Mongoose document to plain JavaScript objects
    const contactObjects = contact.map((doc) =>
      doc.toObject({ getters: true })
    );

    res.json({ contact: contactObjects });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not fetch data",
      500
    );
    return next(error);
  }
};

const contactform = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError("Invalid Inputs passed, Please the check your data.", 422)
    );
  }

  const { phnum, email, address, srcformap } = req.body;

  const createdContact = new Contact({
    // id: uuid4,
    phnum,
    email,
    address,
    srcformap,
  });

  try {
    await createdContact.save();
  } catch (err) {
    const error = new HttpError(
      "Creating Contact failed please try again",
      500
    );
    console.log(error);
    return next(error);
  }

  // dummycontact.push(createdContact);

  res.status(201).json({ contact: createdContact });
};

const deleteContact = async (req, res, next) => {
  const cid = req.body._id;
  // dummycontact = dummycontact.filter((cph) => cph.phnum !== phnum);
  // res.status(200).json({ message: "Deleted" });
  try {
    // Use Mongoose's deleteOne to remove a document by a specific criteria
    const result = await Contact.deleteOne({ _id: cid });

    if (result.deletedCount === 0) {
      const error = new HttpError("Data not found in the database", 404);
      return next(error);
    }
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete data",
      500
    );
    return next(error);
  }
};

exports.getcontacttable = getcontacttable;
exports.contactform = contactform;
exports.deleteContact = deleteContact;

//contact question or from contact form

const getcontactquery = async (req, res, next) => {
  //   console.log("get request in fc");
  // const contactquery = dummycontactquery;
  // if (contactquery.length == 0) {
  //   throw new HttpError("Could not find any contact queries data.", 404);
  // }

  // res.json({ contactquery: contactquery });
  try {
    const contactquery = await Contactquery.find();

    if (contactquery.length === 0) {
      const error = new HttpError(
        "Could not find the 'contactquery' data.",
        404
      );
      return next(error);
    }

    // Convert each Mongoose document to plain JavaScript objects
    const contactqueryObjects = contactquery.map((doc) =>
      doc.toObject({ getters: true })
    );

    res.json({ contactquery: contactqueryObjects });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not fetch data",
      500
    );
    return next(error);
  }
};

const deleteContactQuery = async (req, res, next) => {
  const cqid = req.body._id; // Extract the _id from the request body

  try {
    const { deletedCount } = await Contactquery.deleteOne({ _id: cqid });

    if (deletedCount === 0) {
      // No document was deleted, so it might not exist
      const error = new HttpError("Data not found in the database", 404);
      return next(error);
    }

    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete data",
      500
    );
    return next(error);
  }
};

exports.getcontactquery = getcontactquery;
exports.deleteContactQuery = deleteContactQuery;

//news code

const getnewstable = async (req, res, next) => {
  //   console.log("get request in fc");
  // const news = dummynews;
  // if (news.length == 0) {
  //   throw new HttpError("Could not find the 'news' data.", 404);
  // }
  // res.json({ news: news });
  try {
    const news = await News.find();

    if (news.length === 0) {
      const error = new HttpError("Could not find the 'News' data.", 404);
      return next(error);
    }

    // Convert each Mongoose document to plain JavaScript objects
    const newsObjects = news.map((doc) => doc.toObject({ getters: true }));

    res.json({ news: newsObjects });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not fetch data",
      500
    );
    return next(error);
  }
};

const newsform = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError("Invalid Inputs passed, Please the check your data.", 422)
    );
  }

  const { title, newsdetail, publisher, date } = req.body;

  const createdNews = new News({
    // nid: uuid4,
    title,
    newsdetail,
    publisher,
    date,
    img: "https://i.pinimg.com/originals/a9/4a/b2/a94ab28928497c5836e5ed54d7a8ff3a.jpg",
  });

  try {
    await createdNews.save();
  } catch (err) {
    const error = new HttpError("Creating News failed please try again", 500);
    console.log(error);
    return next(error);
  }

  // dummynews.push(createdNews);

  res.status(201).json({ news: createdNews });
};

const deleteNews = async (req, res, next) => {
  // const nid = req.body.nid;
  // dummynews = dummynews.filter((n) => n.nid !== nid);
  // res.status(200).json({ message: "Deleted" });
  const nid = req.body._id; // Extract the _id from the request body

  try {
    const { deletedCount } = await News.deleteOne({ _id: nid });

    if (deletedCount === 0) {
      // No document was deleted, so it might not exist
      const error = new HttpError("Data not found in the database", 404);
      return next(error);
    }

    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete data",
      500
    );
    return next(error);
  }
};

exports.newsform = newsform;
exports.getnewstable = getnewstable;
exports.deleteNews = deleteNews;

//player code

const getplayertable = async (req, res, next) => {
  //   console.log("get request in fc");
  // const player = dummyplayer;
  // if (player.length == 0) {
  //   throw new HttpError("Could not find the 'news' data.", 404);
  // }
  // res.json({ player: player });
  try {
    const player = await Player.find();

    if (player.length === 0) {
      const error = new HttpError("Could not find the 'Player' data.", 404);
      return next(error);
    }

    // Convert each Mongoose document to plain JavaScript objects
    const playerObjects = player.map((doc) => doc.toObject({ getters: true }));

    res.json({ player: playerObjects });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not fetch data",
      500
    );
    return next(error);
  }
};

const playerform = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError("Invalid Inputs passed, Please the check your data.", 422)
    );
  }
  const { playername, playerposition, playerfblink, playerinstalink } =
    req.body;

  const createdPlayer = new Player({
    // playerid: uuid4,
    playername,
    playerposition,
    playerfblink,
    playerinstalink,
    playerimg:
      "https://i.pinimg.com/originals/a9/4a/b2/a94ab28928497c5836e5ed54d7a8ff3a.jpg",
  });

  try {
    await createdPlayer.save();
  } catch (err) {
    const error = new HttpError("Creating Player failed please try again", 500);
    console.log(error);
    return next(error);
  }

  // dummyplayer.push(createdPlayer);

  res.status(201).json({ player: createdPlayer });
};

const deletePlayer = async (req, res, next) => {
  // const playerid = req.body.playerid;
  // dummyplayer = dummyplayer.filter((p) => p.playerid !== playerid);
  // res.status(200).json({ message: "Deleted" });
  const playerid = req.body._id; // Extract the _id from the request body

  try {
    const { deletedCount } = await Player.deleteOne({ _id: playerid });

    if (deletedCount === 0) {
      // No document was deleted, so it might not exist
      const error = new HttpError("Data not found in the database", 404);
      return next(error);
    }

    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete data",
      500
    );
    return next(error);
  }
};

exports.playerform = playerform;
exports.getplayertable = getplayertable;
exports.deletePlayer = deletePlayer;

//candm code

const getcandmtable = async (req, res, next) => {
  //   console.log("get request in fc");
  // const candm = dummycandm;
  // if (candm.length == 0) {
  //   throw new HttpError("Could not find the 'news' data.", 404);
  // }
  // res.json({ candm: candm });
  try {
    const candm = await CandM.find();

    if (candm.length === 0) {
      const error = new HttpError("Could not find the 'CandM' data.", 404);
      return next(error);
    }

    // Convert each Mongoose document to plain JavaScript objects
    const candmObjects = candm.map((doc) => doc.toObject({ getters: true }));

    res.json({ candm: candmObjects });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not fetch data",
      500
    );
    return next(error);
  }
};

const candmform = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError("Invalid Inputs passed, Please the check your data.", 422)
    );
  }
  const { CandMname, CandMposition, CandMfblink, CandMinstalink } = req.body;

  const createdCandM = new CandM({
    // CandMid: uuid4,
    CandMname,
    CandMposition,
    CandMfblink,
    CandMinstalink,
    CandMimg:
      "https://i.pinimg.com/originals/a9/4a/b2/a94ab28928497c5836e5ed54d7a8ff3a.jpg",
  });

  try {
    await createdCandM.save();
  } catch (err) {
    const error = new HttpError("Creating CandM failed please try again", 500);
    console.log(error);
    return next(error);
  }

  // dummycandm.push(createdCandM);

  res.status(201).json({ candm: createdCandM });
};

const deleteCandM = async (req, res, next) => {
  // const CandMid = req.body.CandMid;
  // dummycandm = dummycandm.filter((c) => c.CandMid !== CandMid);
  // res.status(200).json({ message: "Deleted" });

  const CandMid = req.body._id; // Extract the _id from the request body

  try {
    const { deletedCount } = await CandM.deleteOne({ _id: CandMid });

    if (deletedCount === 0) {
      // No document was deleted, so it might not exist
      const error = new HttpError("Data not found in the database", 404);
      return next(error);
    }

    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete data",
      500
    );
    return next(error);
  }
};

exports.candmform = candmform;
exports.getcandmtable = getcandmtable;
exports.deleteCandM = deleteCandM;

//login signin

const usertable = async (req, res, next) => {
  //   console.log("get request in fc");
  // const user = dummyuser;

  // if (user.length == 0) {
  //   throw new HttpError("Could not find the 'news' data.", 404);
  // }
  let user;
  try {
    user = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError("Fetching user failed", 500);
    return next(error);
  }

  res.json({ user: user.map((user) => user.toObject({ getters: true })) });
};

const signin = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError("Invalid Inputs passed, Please the check your data.", 422)
    );
  }

  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "User exists already please login instead",
      422
    );
    return next(error);
  }

  const createdUser = new User({
    // uid: uuid4,
    name,
    email,
    password,
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(
      "Creating Signing up failed please try again",
      500
    );
    console.log(error);
    return next(error);
  }

  res.status(200).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later",
      500
    );
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(" Invalid credentials, Could not log in", 401);
    return next(error);
  }

  res.json({ message: "Loggedin" });
};

exports.login = login;
exports.signin = signin;
exports.usertable = usertable;
