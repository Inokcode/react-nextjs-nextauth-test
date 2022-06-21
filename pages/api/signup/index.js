import {
  errorHandler,
  responseHandler,
  validateAllOnce,
} from "../../../utils/common";
import dbconnect from "../../../lib/mongo";
import User from "../../../models/user";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    errorHandler("Invalid Request Type", res);
    return;
  }
  //
  try {
    const { name, email, password } = req.body;
    validateAllOnce(req.body);
    await dbconnect();
    //
    const hashPassword = await bcrypt.hash(password, 8);
    //
    const user = new User({ ...req.body, password: hashPassword });
    const saveUser = await user.save();
    if (saveUser) {
      const userDoc = saveUser._doc;
      delete userDoc.password;
      // responseHandler(saveUser, res, 201);
      responseHandler(userDoc, res, 201);
    } else {
      errorHandler("Something went wrong", res);
    }
  } catch (error) {
    errorHandler(error, res);
  }
  // res.status(200).json({ name: "John Doe" });
}
