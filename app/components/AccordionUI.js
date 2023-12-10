
'use client'
import  { useState } from 'react';
import { Accordion , AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { AllUsers } from './AllUsers';

import { SpecificUser } from'./SpecificUser';
import { CreateUser } from './CreateUser';
import { UpdateUser } from './UpdateUser';

export const AccordionUi =()=>{
    const [open, setOpen] =  useState(1);

    const handleOpen = (value)=>{
        setOpen(open === value ? 0: value);
    }
    return <section className='w-[40rem]'>
        <Accordion open={open === 1}> {/* by default it is open */}
            <AccordionHeader onClick={()=>handleOpen(1)}>
                All Users
            </AccordionHeader>
            <AccordionBody>
               <AllUsers />
            </AccordionBody>
        </Accordion>

        <Accordion open={open === 2}> {/* by default it is open */}
        <AccordionHeader onClick={() => handleOpen(2)}>
          Search For Specific User
        </AccordionHeader>
        <AccordionBody>
          <SpecificUser />
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3}> {/* by default it is open */}
        <AccordionHeader onClick={() => handleOpen(3)}>
          Create User
        </AccordionHeader>
        <AccordionBody>
          <CreateUser />
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4}> {/* by default it is open */}
        <AccordionHeader onClick={() => handleOpen(4)}>
          Updated User
        </AccordionHeader>
        <AccordionBody>
                    <UpdateUser />
        </AccordionBody>
      </Accordion>
          
    </section>
}