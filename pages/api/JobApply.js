import { MongoClient } from "mongodb";

async function JobApply(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    
    const client = await MongoClient.connect(
      "mongodb+srv://priyanshg615:B80oBjOUGV2D30vn@careersportal.dlu5ln9.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const JobApplications = db.collection(data.email);

    const result = await JobApplications.insertOne(data);
    console.log(result);
    res.status(201).json({ message: "Applied" });
    client.close();
  }
}

export default JobApply;
