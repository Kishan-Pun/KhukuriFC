const uuid = require("uuid");

const { validationResult } = require("express-validator");

const uuid4 = uuid.v4();

const HttpError = require("../models/http-error");

const Contactquery = require("../models/contactquery");

const Shortabout = require("../models/shortabout");
const Longfcabout = require("../models/longfcabout");
const Longteamabout = require("../models/longteamabout");
const Contact = require("../models/contact");
const News = require("../models/news");
const Player = require("../models/player");
const CandM = require("../models/candm.js");

// let dummynews = [
//   {
//     nid: "n1",
//     img: "sujankickingball",
//     title: "Khukuri fc Champions",
//     newsdetail: "Sujan Scored 3 goals and won the game",
//     publisher: "Kishan1",
//     date: "01 Jan, 2046",
//   },
//   {
//     nid: "n2",
//     img: "sujankickingball",
//     title: "Khukuri fc Champions",
//     newsdetail: "Sujan kicked a volley",
//     publisher: "Kishan2",
//     date: "01 Jan, 2046",
//   },
//   {
//     nid: "n3",
//     img: "sujankickingball",
//     title: "Khukuri fc Champions",
//     newsdetail:
//       "Khukuri FC Won the champions league in the finals and now moving towards laliga",
//     publisher: "Kishan3",
//     date: "01 Jan, 2046",
//   },
// ];
// let dummyshortabout = [
//   {
//     shorttitle: "One Of The Best Team Representing Nepal",
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

//landing page

const getfclanding = async (req, res, next) => {
  //   console.log("get request in fc");
  // const news = dummynews;
  // const shortabout = dummyshortabout;

  // if (news.length == 0) {
  //   throw new HttpError("Could not find any news.", 404);
  // }

  // if (shortabout.length == 0) {
  //   throw new HttpError("Could not find the 'about' data.", 404);
  // }

  // res.json({ news: news, about: shortabout });
  try {
    const shortabout = await Shortabout.find();
    const news = await News.find();

    if (shortabout.length === 0) {
      const error = new HttpError(
        "Could not find the 'short about' data.",
        404
      );
      return next(error);
    }
    if (news.length === 0) {
      const error = new HttpError("Could not find the 'news' data.", 404);
      return next(error);
    }

    // Convert each Mongoose document to plain JavaScript objects
    const shortaboutObjects = shortabout.map((doc) =>
      doc.toObject({ getters: true })
    );
    const newsaboutObjects = news.map((doc) => doc.toObject({ getters: true }));

    res.json({ shortabout: shortaboutObjects, news: newsaboutObjects });
    // console.log(shortabout);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not fetch data",
      500
    );
    return next(error);
  }
};

exports.getfclanding = getfclanding;

//about page

const getabout = async (req, res, next) => {
  //   console.log("get request in fc");
  // const fc = dummylongfcabout;
  // const team = dummylongteamabout;

  // if (fc.length == 0) {
  //   throw new HttpError("Could not find any fc about.", 404);
  // }

  // if (team.length == 0) {
  //   throw new HttpError("Could not find the 'team' data.", 404);
  // }

  // res.json({ fc: fc, team: team });
  try {
    const longfcabout = await Longfcabout.find();
    const longteamabout = await Longteamabout.find();

    if (longfcabout.length === 0) {
      const error = new HttpError(
        "Could not find the 'long fc about' data.",
        404
      );
      return next(error);
    }
    if (longteamabout.length === 0) {
      const error = new HttpError(
        "Could not find the 'long team about' data.",
        404
      );
      return next(error);
    }

    // Convert each Mongoose document to plain JavaScript objects
    const longfcaboutObjects = longfcabout.map((doc) =>
      doc.toObject({ getters: true })
    );
    const longteamaboutObjects = longteamabout.map((doc) =>
      doc.toObject({ getters: true })
    );

    res.json({
      longfcabout: longfcaboutObjects,
      longteamabout: longteamaboutObjects,
    });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not fetch data",
      500
    );
    return next(error);
  }
};

exports.getabout = getabout;

// player and coach page

const getplayerandcm = async (req, res, next) => {
  try {
    const player = await Player.find();
    const candm = await CandM.find();

    if (player.length === 0) {
      const error = new HttpError("Could not find the 'Player' data.", 404);
      return next(error);
    }
    if (candm.length === 0) {
      const error = new HttpError("Could not find the 'CandM' data.", 404);
      return next(error);
    }

    // Convert each Mongoose document to plain JavaScript objects
    const playerObjects = player.map((doc) => doc.toObject({ getters: true }));
    const candmaboutObjects = candm.map((doc) =>
      doc.toObject({ getters: true })
    );

    res.json({ player: playerObjects, candm: candmaboutObjects });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not fetch data",
      500
    );
    return next(error);
  }
};

exports.getplayerandcm = getplayerandcm;

//contact

const getcontact = async (req, res, next) => {
  //   console.log("get request in fc");
  // const contact = dummycontact;

  // if (contact.length == 0) {
  //   throw new HttpError("Could not find any contact data.", 404);
  // }

  // res.json({ contact: contact });
  try {
    const contact = await Contact.find();

    if (contact.length === 0) {
      const error = new HttpError("Could not find the 'contact' data.", 404);
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

const contactqueryform = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError("Invalid Inputs passed, Please the check your data.", 422)
    );
  }

  const { name, email, phone, subject, message } = req.body;

  const createdContactqueryForm = new Contactquery({
    // cqid: uuid4,
    name,
    email,
    phone,
    subject,
    message,
  });

  try {
    await createdContactqueryForm.save();
  } catch (err) {
    const error = new HttpError("Creating Contact query failed please try again", 500);
    console.log(error);
    return next(error);
  }

  res.status(201).json({ contactquery: createdContactqueryForm });
};

exports.getcontact = getcontact;
exports.contactqueryform = contactqueryform;
