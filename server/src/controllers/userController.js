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
  const user = await User.find({ email: req.body.email });
  if (user[0].password === req.body.password) {
    res.status(200).json({
      success: true,
      response: user[0],
    });
  } else {
    res.status(404).json({
      success: false,
      response: "Wrong Password",
    });
  }
});

export { createUser, findUser };
