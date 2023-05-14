// const db = require("./config/db");
const user = require("./models/User");
exports.create = async (req, res, next) => {
  let { name } = req.body;
  user.create({ name }).then((result) => {
    return res.status(201).json({
      message: "collection created successfully",
      success: true,
      data: result,
    });
  }).catch((error) => {
    return res.status(500).json({
        message: "Error",
        success: false,
        data: error,
      });
  })
};
//  const user = await User.findOne({walletAddress});