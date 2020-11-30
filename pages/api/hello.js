// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const baseUrl = "https://api.github.com";

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

export function getIssues() {
  baseUrl = baseUrl + "/repos/marcodecarlo/reactgit/issues";
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}