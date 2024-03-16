
"use client";
import Link from 'next/link';
import React from 'react';

const Worklist = () => {
    return (
        <div className='border my-4 p-3'>
            <div>
                <div className='flex justify-between'>
                    <h1 className='text-xl font-bold mt-2'>
                        Worklist
                    </h1>

                    <div>
                        <Link href='/edit-topic/1' 
                        type='button'
                        className='bg-blue-400 p-2 m-2 rounded-lg'>Add New</Link>
                        {/* <Link href='/edit-topic/1' 
                        type='button'
                        className='bg-green-400 p-2 m-2 rounded-lg'>Add New</Link> */}
                        <button className='bg-red-400 p-2 m-2 rounded-lg'>Delete</button>
                    </div>
                </div>
                <p className='text-base font-medium'>
                    Worklist is a simple to-do list app that allows you to add, edit, and delete tasks.
                </p>
            </div>
        </div>
    );
};

export default Worklist;
