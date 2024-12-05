import { useState, useEffect } from 'react'
import { useParams } from '@tanstack/react-router'
import { IVariant } from './variant.types'
import { getVariantsByProductId } from '../../services/fetchVariants'

const Variant = () => {
  const [variants, setVariants] = useState<IVariant[]>([])
  const [error, setError] = useState<string | null>(null)
  const { productId } = useParams({ from: '/products/$productId' })

  useEffect(() => {
    const loadVariants = async () => {
      try {
        const data = await getVariantsByProductId(productId)

        setVariants(data)
      } catch (err: unknown) {
        setError('Error loading products')
      }
    }

    loadVariants()
  }, [productId])

  if (error) {
    return (
      <div className="container mx-auto min-h-screen p-8 mt-16">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <section className="container mx-auto min-h-screen p-8 mt-16">
      <h1>Variants</h1>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {variants.map((item, index) => (
          <div
            key={index}
            className="bg-black text-white p-4 rounded-lg shadow-lg hover:cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-lg font-normal">{item.description}</p>
              <p className="text-lg font-semibold">{`$ ${item.price.toFixed(2)} USD`}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Variant
