export default function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
    } else {
      // Handle any other HTTP method
      res.send({"status": 200,
      "msg":  "hello there!"});
    }
  }