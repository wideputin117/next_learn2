 // to declare dynamic route

 import { NextResponse } from 'next/server';
 import { users } from "@/app/utils/db";
import fs from 'fs';
 // to get specific data
  export async function GET(_,res){
    const { id } = await res.params; // params is the url here we are just destructuring id from it
    const user = users.filter((u)=> u.id === id);
    return NextResponse.json({user});
 }

 
 
 // 3. login route for user
    export async function POST(req,res){
        const {name, email, password} = await req.json();
        const {id} = await res.params;
        const {
            name: uName,
            email: uEmail,
            password: uPassword,
        } = users.find((u)=> u.id === id);

        if(uName === name && uEmail === email && uPassword === password){
            return NextResponse.json({result: "Successfully logged in"},{status: 202});

        }else if(!name || !email || !password){
            return NextResponse.json({result: "Please fill all the details"})
        }
        else{
            return NextResponse.json({result: "Invalid Credentials"})
        }

    }

    // 6. delete the user from the database

    export async function DELETE(req, res){
        const {id} = await res.params;
        const userIndex = users.findIndex(user => user.id === id);
        users.splice(userIndex,1);

        const updateDataArr = users;
        const updateData =  JSON.stringify(updateDataArr,null,2);

        // write the data to the file
        fs.writeFileSync("./app/utils/db.js",`export const users= ${updateData};`,'utf-8')
        return NextResponse.json({success:"User Successfully Deleted"});
    

    }