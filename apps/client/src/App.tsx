import './index.css'
import { useEffect, useState } from 'react'
import Product from './components/product/Product'
import { Link } from '@tanstack/react-router'
import { IProduct } from './components/product/product.types'
import { getProducts } from './services/fetchProducts'
import { useSearch } from './hooks/useSearch'

function App() {
  const { path, searchTerm } = useSearch()
  const [products, setProducts] = useState<IProduct[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const params = {}

        if (searchTerm) {
          if (path.includes('/') || path.includes('/products')) {
            Object.assign(params, {
              name: searchTerm,
            })
          }
        }

        const data = await getProducts(params)
        setProducts(data)
      } catch (err: unknown) {
        setError('Error loading products')
      }
    }

    loadProducts()
  }, [path, searchTerm])

  if (error) {
    return (
      <div className="container mx-auto min-h-screen p-8 mt-16">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <main className="container mx-auto min-h-screen p-8 mt-16">
      <h1>Products</h1>
      <br />
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <Link
              key={index}
              to="/products/$productId"
              params={{ productId: String(item.id) }}
              className="hover:opacity-75"
            >
              <Product title={item.name} image={item.image} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex justify-center content-center items-center h-96">
          <span>No products found</span>
        </div>
      )}
    </main>
  )
}

export default App
