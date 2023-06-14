import dbConnect from "@/utils/dbConn";
import users from "@/models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { name, email, password } = body;
  
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Missing Fields" }, { status: 400 });
    }
  
    await dbConnect();
  
    const user = await users.findOne({ email: email });
  
    if (user) {
      return NextResponse.json({ message: "User already exists!" }, { status: 404 });
    }
  
    const hashPass = await bcrypt.hash(password, 10);
    const data = { name: name, email: email, password: hashPass };
  
    await users.create(data);
    return NextResponse.json({ message: "User Created successfully !" }, { status: 200 }, {user : data});
  }
  
  catch (error) {
    console.log(error);
  }
} 
 