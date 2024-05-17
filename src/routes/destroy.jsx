import { redirect } from "react-router-dom";
import { deleteContact } from "../contact";

export async function action({ params }) {
  try {
    await deleteContact(params.contactId);
    return redirect("/");
  } catch (error) {
    throw new Error("oh dang!");
    
  }
}
