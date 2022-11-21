import { MongoClient, ServerApiVersion } from "mongodb";
const uri =
  "mongodb+srv://tuanhai2712:tuanhai2712@cluster0.bv1mbpq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

export const dbConnect = async () => {
  client.connect((err) => {
    if (err) {
      console.log("err", err);
      client.close();
    }
  });
  const collection = client.db("nodejs-traning").collection("users");
  let personDocument = {
    name: { first: "Alan", last: "Turing" },
    gender: "male",
    birth: new Date(1990, 5, 23), // May 23, 1912
    death: new Date(2150, 5, 7), // May 7, 1954
    contribs: ["Turing machine", "Turing test", "Turingery"],
    views: 1250000,
  };
  const p = await collection.insertOne(personDocument);
  // Find one document
  const myDoc = await collection.findOne();
  // Print to the console
  console.log(myDoc);
};
