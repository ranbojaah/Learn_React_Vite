import { Fragment, useEffect, useRef, useState } from 'react'
import CardProduct from '../components/Fragments/CardProduct'
import Button from '../components/Elements/Button/index.button'
import { getProdcuts } from '../service/product.service'
import { useLogin } from '../hooks/useLogin'

const ProductPage = () => {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [products, setProducts] = useState([])
  const username = useLogin()

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || [])
  }, [])

  useEffect(() => {
    getProdcuts((data) => {
      setProducts(data)
    })
  }, [])

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id)
        return acc + product.price * item.qty
      }, 0)
      setTotalPrice(sum)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart, products])

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      )
    } else {
      setCart([...cart, { id, qty: 1 }])
    }
  }

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)

    if (updatedCart.length === 0) {
      localStorage.removeItem('cart') // Hapus item 'cart' dari localStorage jika keranjang belanja kosong
      setTotalPrice(0)
    }
  }

  // useReff
  const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || [])

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }]
    localStorage.setItem('cart', JSON.stringify(cartRef.current))
  }

  const totalPriceRef = useRef(null)

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = 'table-row'
    } else {
      totalPriceRef.current.style.display = 'none'
    }
  })

  return (
    <Fragment>
      <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
        {username}
        <Button classname='ml-5 bg-black' onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className='flex justify-center py-5 '>
        <div className='w-4/6 flex flex-wrap'>
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
        </div>
        <div className='w-2/6'>
          <h1 className='text-3xl font-bold text-blue-600 ml-5 mb-2'>Cart</h1>
          <table className='text-left table-auto border-separate border-spacing-x-5'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  )
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 10)}...</td>
                      <td>
                        ${' '}
                        {product.price.toLocaleString('id-ID', {
                          styles: 'currency',
                          currency: 'USD',
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        ${' '}
                        {(item.qty * product.price).toLocaleString('id-ID', {
                          styles: 'currency',
                          currency: 'USD',
                        })}
                      </td>
                      <td>
                        <Button
                          onClick={() => handleRemoveFromCart(item.id)}
                          classname='bg-red-600'
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  )
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    ${' '}
                    {totalPrice.toLocaleString('id-ID', {
                      styles: 'currency',
                      currency: 'USD',
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductPage
