const OTP = require("../models/otp");
const User = require("../models/user");
const otpGenerator = require("otp-generator");

exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    // User should not already be registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered",
      });
    }

    // Generate OTP
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    // Ensure OTP is unique
    let existingOTP = await OTP.findOne({ otp });
    while (existingOTP) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      existingOTP = await OTP.findOne({ otp });
    }

    // Save to DB
    const otpEntry = await OTP.create({ email, otp });
    console.log("OTP saved:", otpEntry);

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otp, // You may remove this in production
    });
  } catch (error) {
    console.error("Error in sendOTP:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
