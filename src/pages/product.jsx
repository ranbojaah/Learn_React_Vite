import CardProduct from '../components/Fragments/CardProduct'

const products = [
  {
    id: 1,
    name: 'Sepatu Baru',
    price: 'Rp1.000.000',
    image: '/src/assets/image/shoe-1.jpg',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
          provident repellendus nam obcaecati facere culpa maxime, illo repellat
          quasi debitis, ipsa accusamus! Beatae est quos quidem neque id vitae
          qui!`,
  },
  {
    id: 2,
    name: 'Sepatu Baru',
    price: 'Rp500.000',
    image: '/src/assets/image/shoe-1.jpg',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    name: 'Sepatu Ambatu',
    price: 'Rp100.000',
    image: '/src/assets/image/shoe-1.jpg',
    description: `Ambatu Ahmaduns salamana`,
  },
]

const ProductPage = () => {
  return (
    <div className='flex justify-center py-5 '>
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  )
}

export default ProductPage