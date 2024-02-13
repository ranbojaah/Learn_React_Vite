import InputForm from '../Elements/Input/index.input'
import Button from '../Elements/Button/index.button'

const FormLogin = () => {
  return (
    <form action=''>
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

      <Button classname='bg-blue-600'>Login</Button>
    </form>
  )
}

export default FormLogin
