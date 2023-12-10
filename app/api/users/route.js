// 
import { users } from "@/app/utils/db";
import { NextResponse } from "next/server";
import fs from "fs";
// these are not dynamic routes

//. Create new user
export async function POST(req, res, next) {
    let { name, id, email, age, password} = await req.json();
    
    // checking if anything is  missing
    if(!name || !id || !email || !age || !password) {
        return NextResponse.json({ error:"required field not found",ok: false},{status:400});
    }else{
        users.push({ id, email, age, password, name});

        const updateDataArr = users;
        // using node module fs we arite the data to the file
        const updateData =  JSON.stringify(updateDataArr,null,2);

        // write the data to the file
        fs.writeFileSync("./app/utils/db.js",`export const users= ${updateData};`,'utf-8')
        return NextResponse.json({success:"User Successfully Created"});
    }
 }
 
 // to update the 

export async function PUT(req,res){
    let { name, id, email, age,password} = await req.json();

    // find the user in arr
    const userIndex = users.findIndex(user => user.id === id); // find the id of the user in the database by checking the id from request body
    if(userIndex === -1){
        return NextResponse.json({result: "User Not Found"},{status:400});
    }
    if(name){
        users[userIndex].name = name;   
    }
    if(email){
        users[userIndex].email = email;
    }
    if(age){
        users[userIndex].age = age;
    }
    if(password){
        users[userIndex].password= password;
    }
    
    // this is node.js work here fs module writes the data to the specified path file.
    const updateDataArr = users;
    // using node module fs we arite the data to the file
    const updateData =  JSON.stringify(updateDataArr,null,2);

    // write the data to the file
    fs.writeFileSync("./app/utils/db.js",`export const users= ${updateData};`,'utf-8')
    return NextResponse.json({success:"User Successfully Updated"});

}


// get methods to fetch the data from the server
export async function GET(req,res){
 const data =  users;
 return NextResponse.json({ data },{status: 200});
  
}

// login route
