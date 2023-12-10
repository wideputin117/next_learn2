 'use client'
import React, { useState } from 'react'
import { Button, Card, Input, List, ListItem } from '@material-tailwind/react';

export const SpecificUser = () => {
    const [userId,setUserId] = useState('');
    const [userData, setUserData] = useState(null);

   const fetcUserData = async()=>{
    const response = await fetch(`/api/users/${userId}`); // this is dynamic route declared in api/users/[id]
   
    if(response.ok){
        const res = await response.json();
        setUserData(res.user);
    }
    else{
        console.log('error fetching');
        setUserData(null);
    }
   }


  return (
    <div>
     <div className='flex'>
      <div className='w-72'>
       <Input 
       label="Enter User ID"
       type='text'
       value={userId}
       onChange={(e)=>setUserId(e.target.value)} /> 
        
      </div>
      <Button className='ml-5' onClick={fetcUserData}>Search</Button>
    </div>
    {userData ? (userData.map((d)=>(
        <>
        <Card className='mt-5 w-96'>
          <List>
            <ListItem>{d.id}</ListItem>
            <ListItem>{d.name}</ListItem>
            <ListItem>{d.age}</ListItem>
            <ListItem>{d.email}</ListItem>
            <ListItem>{d.password}</ListItem>
          </List>
        </Card>
        </>
         ))
        )
      : (<p>Search for a specific user</p>)}
  </div>
     
  )
}

 