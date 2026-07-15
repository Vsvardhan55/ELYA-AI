const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const User = require("../models/User");


// REGISTER USER
exports.register = async (req, res) => {
  try {

    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required."
      });
    }


    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address."
      });
    }


    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters."
      });
    }


    const existingUser = await User.findOne({ email });


    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered."
      });
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    const user = await User.create({
      fullName,
      email,
      password: hashedPassword
    });


    res.status(201).json({
      success: true,
      message: "User registered successfully.",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email
      }
    });


  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error."
    });

  }
};



// LOGIN USER
exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;


    if (!email || !password) {

      return res.status(400).json({
        success: false,
        message: "Email and password are required."
      });

    }


    const user = await User.findOne({ email });


    if (!user) {

      return res.status(401).json({
        success: false,
        message: "Invalid email or password."
      });

    }


    const isMatch = await bcrypt.compare(
      password,
      user.password
    );


    if (!isMatch) {

      return res.status(401).json({
        success: false,
        message: "Invalid email or password."
      });

    }


    const token = jwt.sign(

      {
        id: user._id,
        email: user.email,
        role: user.role
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d"
      }

    );


    user.lastLogin = new Date();

    await user.save();



    res.status(200).json({

      success: true,

      message: "Login successful.",

      token,

      user: {

        id: user._id,

        fullName: user.fullName,

        email: user.email,

        role: user.role

      }

    });



  } catch (error) {


    console.error(error);


    res.status(500).json({

      success: false,

      message: "Internal Server Error."

    });


  }

};

exports.getProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found."
      });
    }

    res.status(200).json({
      success: true,
      user
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error."
    });
  }
};