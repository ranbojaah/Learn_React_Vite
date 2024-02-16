import InputForm from '../Elements/Input/index.input'
import Button from '../Elements/Button/index.button'
import { useEffect, useRef } from 'react'

const FormRegister = () => {
  const fullName = useRef(null)

  useEffect(() => {
    fullName.current.focus()
  }, [])
  return (
    <form action=''>
      <InputForm
        label='Fullname'
        type='text'
        placeholder='insert yout name here'
        name='fullname'
        ref={fullName}
      ></InputForm>
      <InputForm
        label='Email'
        type='email'
        placeholder='example@gmail.com'
        name='email'
      ></InputForm>
      <InputForm
        label='Password'
        type='password'
        placeholder='********'
        name='password'
      ></InputForm>
      <InputForm
        label='Confirm Password'
        type='password'
        placeholder='********'
        name='confirmPassword'
      ></InputForm>

      <Button classname='bg-blue-600 w-full'>Register</Button>
    </form>
  )
}

export default FormRegister
