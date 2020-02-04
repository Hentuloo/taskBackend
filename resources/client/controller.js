const Client = require("./model");

const getAllUsers = async (req, res) => {
  try {
    const allClients = await Client.find({}).exec();
    res.send({ data: allClients });
  } catch (err) {
    res.status(404).send(err);
  }
};

const addUser = async (req, res) => {
  const { name, email, sex, avatar, city, street, houseNumber } = req.body;
  try {
    const client = await Client.create({
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
    res.send({ data: client });
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  addUser,
  getAllUsers
};
