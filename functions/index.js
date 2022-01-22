const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51K53CqSDPghL5DIMotuZn0TJbZRGlac60bNngr1T03KDceg3FN55tQE8JEqcsbEqNBLZkYEOC2GGySIelxVLxikb00bJzbnqeq"
);

// API

// -  App config

const app = express();

// -  Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//  - API routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("payment Request Received for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "inr",
    // payment_method_types: ["card"],
    //description: "Software development services",
  });

  // OK Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//  - LIsten command
exports.api = functions.https.onRequest(app);

// Example End points
// http://localhost:5001/challenge-cd494/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
