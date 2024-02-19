import { Fragment, useEffect, useState } from 'react'
import CardProduct from '../components/Fragments/CardProduct'
import { getProdcuts } from '../service/product.service'
import { useLogin } from '../hooks/useLogin'
import TableCart from '../components/Fragments/TableCart'
import Navbar from '../components/Layouts/Navbar'

const ProductPage = () => {
  const [products, setProducts] = useState([])
  useLogin()

  useEffect(() => {
    getProdcuts((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <Fragment>
      <Navbar />
      <div className='flex justify-center py-5 '>
        <div className='w-4/6 flex flex-wrap'>
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className='w-2/6'>
          <h1 className='text-3xl font-bold text-blue-600 ml-5 mb-2'>Cart</h1>
          <TableCart products={products}></TableCart>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductPage
