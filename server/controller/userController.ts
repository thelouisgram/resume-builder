import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


interface RegisterUserBody {
  name: string;
  password: string;
  email: string;
}

const generateToken =  (userId: string)=> {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '7d'})
    return token
}

// Controller for user registration
// POST: //api/users/register
export const registerUser = async (
  req: Request<{}, {}, RegisterUserBody>,
  res: Response
) => {
  try {
    const { name, password, email } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // check if user already exists
    const user = await User.findOne({email})
    if(user){
        return res.status(400).json({message: "User already exists"})
    }

    // Create new user
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
        name, email, password: hashedPassword
    })
    const token = generateToken(newUser._id.toString())
    return res.status(201).json({message: "User created successfully", token: token, user: newUser})
  } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      return res.status(400).json({message: errorMessage})
  }
};


// Controller for user login
// POST: //api/users/login 
export const loginUser = async (
  req: Request<{}, {}, RegisterUserBody>,
  res: Response
) => {
  try {
    const { password, email } = req.body;

    if ( !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // check if user exists
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({message: "Invalid email or password"})
    }

    // compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(400).json({message: "Invalid email or password"})
    }

    // success message
    const token = generateToken(user._id.toString())
    return res.status(201).json({message: "Login successful", token: token, user: user})
  } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      return res.status(400).json({message: errorMessage})
  }
};