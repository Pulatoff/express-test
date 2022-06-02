function getUsers(req, res) {
  res.status(200).json({
    name: "Niyozbek Pulatov",
    age: 18,
  });
  console.log("nma gap");
}

function addUsers(req, res) {
  const data = req.body;
  res.status(200).json({
    status: "success",
  });
}

function updateUser(req, res) {
  const data = req.body;
  res.type("text/plain");
}

function deleteUser(req, res) {}

function getUser(req, res) {}

module.exports = { addUsers, updateUser, getUsers, getUser, deleteUser };
