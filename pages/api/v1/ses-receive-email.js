import clientPromise from "../../../lib/mongodb";

const saveEmail = async (msg) => {
  try {
    const client = await clientPromise;
    const db = client.db("kaiser");

    await db.collection("emails").insertOne({ emailData: msg });
  } catch (e) {
    console.error(e);
  }
};

export default function handler(req, res) {
  if (req.body) {
    let body = JSON.parse(req.body);
    const message = body.Message;
    // Process the message here

    console.log(body);

    console.log(body);
    saveEmail(body);
    console.log("Received SNS Message:", message);
  } else {
    console.log("Null Request");
    saveEmail({ emailData: { test: true } });
  }

  // res.status(200).send('OK');

  res.status(200).json({ text: "OK2" });
}
