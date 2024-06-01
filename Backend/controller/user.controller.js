import User from "../model/user.modal.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);

    const { fullname, email, password } = req.body;
    let secPassword = await bcrypt.hash(password, salt);

    // Check if the user already exists
    const user = await User.findOne({ email }); // Corrected usage
    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    // Create a new user
    const createdUser = new User({
      fullname,
      email,
      password: secPassword,
    });
    await createdUser.save();

    res.status(201).json({
      message: "User created",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error from user controller", error);
    res.status(500).json({ message: "Error from user controller" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res
        .status(400)
        .json({ message: "invalide user email or password" });
    } else {
      res.status(200).json({
        message: "login sucessfull",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("error from login ", error);
    res.status(500).json({ message: "Error from user controller" });
  }
};

export const user = async (req, res) => {
  try {
    const user = await User.find();
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.log("error from user controoler user function ", error);
  }
};
