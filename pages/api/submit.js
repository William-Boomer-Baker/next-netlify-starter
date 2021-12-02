export default async function handler(req, res) {
  res.writeHead(301, { // or 301
      Location: "/appointment",
    });
    res.end();
}
