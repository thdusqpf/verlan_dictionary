export default async function handler(request, response) {
  if (request.method == "POST") {
    if (request.body.keyword == "") {
      return response.status(302).redirect("/search");
    }

    const remove_keyword = removeAccents(request.body.keyword);
    console.log("POST requested");
    response.status(302).redirect(`/search?keyword=${remove_keyword}`);
  }
}

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
