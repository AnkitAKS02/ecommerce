import CommonForm from '@/components/common/form'
import React, { useState } from 'react'
import { registerFormControls } from '@/config';
import { Link } from 'react-router-dom'


const initialState = {
  userName: "",
  email: "",
  password: "",
};
function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  
  function onSubmit() {
    
  }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold ml-2 tracking-tight text-foreground'>
          Create new Account
        </h1>
        <p>Already have an account
          <Link to='/auth/login' className='font-medium text-primary hover:underline'>Login</Link>
        </p>
      </div>

      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default AuthRegister
