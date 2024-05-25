import { connectDB } from "@/util/database";

export default async function handler(request, response) {
  if (request.method == "POST") {
    if (request.body.keyword == "") {
      return response.status(302).redirect("/search");
    }
    console.log(request.body.keyword);
    console.log("POST requested");
    response.status(302).redirect(`/search?keyword=${request.body.keyword}`);
  }
}
