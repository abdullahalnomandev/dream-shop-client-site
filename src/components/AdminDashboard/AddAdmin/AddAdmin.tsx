import React, { useState } from 'react';
import AdminServices from 'services/Admin/AdminServices';

const AddAdmin = () => {

    const [admin,setAdmin]=useState('')
    const handleAddAdmin = ()=>{
        const email={admin}
        AdminServices.postAdmin(email)
        .then((res)=>{
            console.log(res);
        })
    }
    return (
        <div className='text-center mt-5'>
            <input className='form control' type="email" name="email" id="" placeholder='Add new Admin'
             onChange={(e)=>setAdmin(e.target.value)} required value={admin}/>
            <button onClick={handleAddAdmin} className='btn-success'>Add Admin</button>
        </div>
    );
};

export default AddAdmin;