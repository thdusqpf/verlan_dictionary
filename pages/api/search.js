import { connectDB } from "@/util/database";

export default async function handler(request, response) {
  if (request.method == "POST") {
    if (request.body.keyword == "") {
      return response.status(500).json("단어를 입력해주세요");
    }
    console.log(request.body.keyword);
    console.log("POST requested");
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("dictionary")
      .findOne({ Verlan: request.body.keyword });

    await db
      .collection("dictionary")
      .updateOne(
        { Verlan: result.Verlan },
        { $set: { Count: result.Count + 1 } }
      );
    response.status(302).redirect(`/search?keyword=${request.body.keyword}`);
  }
}
