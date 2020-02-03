const Client = require("./model");
const { validator } = require("../../utils/validator");

const getUser = (req, res) => {
  Client.find({}, (err, users) => {
    if (err) return res.status(404).send(err);
    res.send(users);
  });
};

const addUser = (req, res) => {
  const { name, email, sex, avatar, city, street, houseNumber } = req.body;

  const validResponse = validator(req.body, [
    "name",
    "email",
    "sex",
    "avatar",
    "city",
    "street",
    "houseNumber"
  ]);
  if (!validResponse.ok) return res.status(400).send(validResponse);

  const newClient = new Client({
    name,
    email,
    sex,
    avatar,
    address: {
      city,
      street,
      houseNumber
    }
  });
  Client.create(newClient, (err, client) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.send(client);
  });
};

module.exports = {
  addUser,
  getUser
};
