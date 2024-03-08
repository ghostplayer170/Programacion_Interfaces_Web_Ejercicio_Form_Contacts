import mongoose from "npm:mongoose";
import { Contact } from "../types.ts";

if (mongoose.connection.readyState === 0) {
  await mongoose.connect("mongodb+srv://rmontenegrop:Lllubo6BT2sVncJg@clusteruni.pagju8q.mongodb.net/DataBaseContact?retryWrites=true&w=majority");
}

const schema = new mongoose.Schema<Contact>({
  name: String,
  age: Number,
  email: String,
});

export default mongoose.model<Contact>("Contact", schema);