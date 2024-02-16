import InputForm from '../Elements/Input/index.input'
import Button from '../Elements/Button/index.button'
import { useEffect, useRef } from 'react'

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault()
    localStorage.setItem('email', event.target.email.value)
    localStorage.setItem('password', event.target.password.value)
    window.location.href = '/product'
  }

  const emailRef = useRef(null)

  useEffect(() => {
    emailRef.current.focus()
  }, [])
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label='Email'
        type='email'
        placeholder='example@gmail.com'
        name='email'
        ref={emailRef}
      ></InputForm>
      <InputForm
        label='Password'
        type='password'
        placeholder='********'
        name='password'
      ></InputForm>

      <Button classname='bg-blue-600 w-full' type='submit'>
        Login
      </Button>
    </form>
  )
}

export default FormLogin
