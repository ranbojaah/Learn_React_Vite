import { useEffect, useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import Button from '../Elements/Button/index.button'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const username = useLogin()
  const [totalCart, setTotalCart] = useState(0)
  const Cart = useSelector((state) => state.cart.data)

  useEffect(() => {
    const sum = Cart.reduce((acc, item) => {
      return acc + item.qty
    }, 0)
    setTotalCart(sum)
  }, [Cart])

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
      {username}
      <Button classname='ml-5 bg-black' onClick={handleLogout}>
        Logout
      </Button>
      <div className='flex items-center bg-gray-800 p-2 rounded-md ml-5'>
        {totalCart}
      </div>
    </div>
  )
}

export default Navbar
