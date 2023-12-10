'use client'
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
 

export const CreateUser = () => {
    // set state
    const [id,setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit= async (e)=>{
      e.preventDefault();  // to prevent from default behavior

      if(!id || !name || !email || !age || !password){
        alert('Please enter all the details'); 
        return
      }
      // to post data to server lets try a try catch
      try{
            const res = await fetch('api/users',{method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({id,name, age, email, password})});

                if(res.ok){
                alert('Successfully created the user');

                }else{
                    alert("Something went wrong");
                    return;
                }
        
            }catch(e){
                return NextResponse.json({message:"Couldn't create  user"},{status: 404})
      }

    }

  return (
    <div>
        <div>
            <form className="mt-2 grid gap-1" onSubmit={handleSubmit}>
                <Input label="Enter id"
                type="text"
                value={id}
                onChange={(e)=>setId(e.target.value)} />
             
               <Input label="Enter Name"
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)} />
                
                <Input label="Enter Age"
                type="number"
                value={age}
                onChange={(e)=>setAge(e.target.value)} />

                <Input label="Enter Email"
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} />

                <Input label="Enter password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)} />

                <Button className="mt-2" type="submit">Create</Button>
            </form>
        </div>
    </div>
  )
}
