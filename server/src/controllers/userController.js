import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createUser = asyncHandler(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({
    success: true,
    response: user,
  });
});

const findUser = asyncHandler(async (req, res) => {
  const user = await User.find({ email: req.query.email });
  if (!user[0]) {
    res.status(404).json({
      success: false,
      response: "User not found",
    });
    return;
  }
  if (user[0].password === req.query.password) {
    res.status(200).json({
      success: true,
      response: {
        id: user[0]._id,
        username: user[0].username,
        email: user[0].email,
      },
    });
  } else {
    res.status(404).json({
      success: false,
      response: "Wrong Password",
    });
  }
});

export { createUser, findUser };
