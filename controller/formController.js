async function formController(req, res) {
  try {
    const body = req.body;
    const params = req.params;
    console.log(body, params);
    res.type("text/html");
    res.status(200).send("<h1>a ti harosh </h1> ");
  } catch (e) {}
}

async function getFormController(req, res) {
  try {
  } catch (e) {}
}

module.exports = { formController, getFormController };
