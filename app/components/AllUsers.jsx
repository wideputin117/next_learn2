'use client'

import {List, ListItem, Card} from '@material-tailwind/react';
import { useState ,useEffect } from 'react';

export const AllUsers=()=>{
    const [users, setUsers] =  useState('');

    useEffect(()=>{
        const fetchUsers = async ()=>{
            const response = await fetch('api/users');
            const data = await response.json();
            setUsers(data.data);
        }
      fetchUsers(); // calling the function
    },[]);

    return (
        <div>
            {users && users.map((user)=>(
                <Card key={user.id} className='mb-4'>
                    <List>
                        <ListItem>{user.name}</ListItem>
                    </List>
                </Card>
            ))}
        </div>
    )
}