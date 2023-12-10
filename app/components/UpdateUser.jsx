import React from 'react'
import { useState } from 'react';
import { Button,Input } from '@material-tailwind/react';

export const UpdateUser = () => {
    const [id,setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit= async(e)=>{
        e.preventDefault();
        if(!id){
            alert("Enter id");
        }
        
        const requestedData = { id };

        if(name){
            requestedData.name = name;
        }
        if(email){
            requestedData.email = email;
        }
        if(age){
            requestedData.age = age;
        }
        if(password){
            requestedData.password = password;
        }

        try{
            const response = await fetch('/api/users',{
                method:'PUT',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(requestedData),

            });
            if(response.ok){
                alert("Successfully Updated");
                clearForm();

            }else{
                const data = await response.json();
             alert(data || "Error while updating the user")
            }

        }catch(error){
            alert(error);
        }
    }
    const clearForm=()=>{
        setId('');
        setEmail('');
        setName('');
        setPassword('')
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

                <Button className="mt-2" type="submit">Update</Button>
            </form>    
        </div>
    </div>
  )
}
