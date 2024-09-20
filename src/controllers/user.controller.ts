import { User } from "../models/userModel";
import bcrypt from "bcryptjs";

export const register = async (req: any, res: any) => {
  try {
    const { fullname, email, phone, password, role } = req.body;
    //checking if all fields are provided
    if (!fullname || !email || !phone || !password || !role) {
      return res.status(400).json({
        status: "failed",
        message: "All fields are required",
      });
    }
    //check if email already exists or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "failed",
        message: "Email already exists",
      });
    }
    // //check if confirmpassword and password match

    // if (confirmpassword !== password) {
    //   return res.status(400).json({
    //     status: "failed",
    //     message: "Password and ConfirmPassword doesn't match",
    //   });
    // }

    //password hashed
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(password, salt);
    // create new User

    const newUser = await new User({
      fullname,
      email,
      phone,
      password: hashedPassword,
      role,
    }).save();
    res.status(201).json({
      status: "success",
      message: "Registration success",
      user: {
        id: newUser._id,
        fullname,
        email,
        role,
      },
    });
    //error handle
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "cannot registered user please try again",
    });
  }
};
