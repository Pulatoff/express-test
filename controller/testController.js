async function testGETController(req, res) {
  try {
    res.type("text/type");
    // REQUEST METHODS

    const ip = req.ip; // USER IPsi
    const params = req.params; // URL parametrlari
    const query = req.query; // URL querysi
    const body = req.body; // User tomondan surovni body qismi
    const route = req.route; // Routemiz haqida malumotlar
    const cookies = req.cookies; // Cookies malumotlari
    const headers = req.headers; // User tomondan surovni headers qismi
    const path = req.path; //URL ni path qismi
    const hostname = req.hostname; // URLni hostname qismi
    const xhr = req.xhr; // bu faqat true yoki false qaytaradi AJAX surov amalga oshirilgan busa
    const protocol = req.protocol; // URLni protocoli
    const secure = req.secure; // Agar protocol httpsga teng busa true qaytaradi
    const url = req.originalUrl;
    const session = req.session;
    console.log(session);

    res.status(200).json({
      name: "Niyozbek",
    });
  } catch (e) {
    res.status(404).json({
      status: "error",
      message: e.message,
    });
  }
}

async function testPost(req, res) {
  try {
    // REQUEST METHODS
    const body = req.body;

    res.status(200).json({
      name: "Niyozbek",
      age: 18,
    });
  } catch (e) {
    res.status(404).json({
      status: "error",
      message: e.message,
    });
  }
}

module.exports = { testGETController, testPost };
