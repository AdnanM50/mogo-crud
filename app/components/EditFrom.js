import React from 'react'

const EditFrom = () => {
  return (
    <>
    <div className='mt-3'>
        
    <form className='flex flex-col gap-3'>
      <input 
        className='border px-8 py-2 border-gray-400 '
      placeholder='Add Title'
      type="text" />

<input 
        className='border px-8 py-2 border-gray-400 '
      placeholder='Add Description'
      type="text" />
        <button className='bg-blue-400 p-2 m-2 rounded-lg'>Update topic</button>
    </form>
    </div> 
    </>
  )
}

export default EditFrom
