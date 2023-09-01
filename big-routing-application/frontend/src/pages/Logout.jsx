import { redirect } from "react-router-dom";
import { getAuthToken } from "../utils/auth";

export function action() {
  localStorage.removeItem("token");
  return redirect("/");
}

export function tokenLoader() {
  return getAuthToken();
}
