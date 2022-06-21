import dbconnect from "../../../lib/mongo";

export default async function handler(req, res) {
  await dbconnect();
  if (req.method !== "POST") {
    res.status(400).json({ message: "Invalid Request Type" });
  }

  const { name } = req.body;
  res.status(200).json({ name });
  // res.status(200).json({ id: 1, name: "Sachin", email: "sachin@gmail.com" });
}
