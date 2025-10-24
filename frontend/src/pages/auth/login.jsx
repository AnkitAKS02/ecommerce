import CommonForm from '@/components/common/form'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginFormControls } from '@/config';


const initialState = {
  email: "",
  password: "",
};
function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  
  function onSubmit() {
    
  }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold ml-2 tracking-tight text-foreground'>
          Sign In to your account
        </h1>
        <p>Don't have an account
          <Link to='/auth/register' className='font-medium text-primary hover:underline'>Register</Link>
        </p>
      </div>

      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default AuthLogin
