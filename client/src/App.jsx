import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { ProductCard } from './components/ProductCard'

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'lorem lkfjdsalkfjlkdasıjflkıasdjflk flkds jflkdasjflk jsdlkf jdslkj flkds jflk sdjlkıf asjdl',
      price: 10,
      oldPrice: 30,
      discount: 80,
      isWishlisted: true,
      description: 'lorem ipsum dolar sit amet',
    },
  ])

  function handleWishlist(id) {
    setProducts(
      products.map(product => {
        if (product.id === id) {
          return {
            ...product,
            isWishlisted: !product.isWishlisted,
          }
        } else {
          return product
        }
      })
    )
  }
  return (
    <>
      <Navbar />
      <div className="mx-auto grid max-w-7xl grid-cols-1 place-items-center items-center gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {products.map(product => (
          <ProductCard key={product.id} {...product} handleWishlist={handleWishlist} />
        ))}
      </div>
    </>
  )
}

export default App
