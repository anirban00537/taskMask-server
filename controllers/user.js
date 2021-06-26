const UserModel = require("../model/User.js");

exports.searchUser = searchUser = async (req, res) => {
  const { keyword } = req.params;
  try {
    const users = await UserModel.find({ email: keyword });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};
