import { Request } from 'express'
import { PrismaClient } from '@repo/db'
import { Product } from './product.types'

const client = new PrismaClient()

interface CreateProductRequest extends Request {
  body: Product
}

export const findProduct = async (req: Request) => {
  const { name } = req.query

  const where = {}

  if (name) {
    Object.assign(where, {
      name: {
        contains: name,
        mode: 'insensitive',
      },
    })
  }

  const products = await client.product.findMany({
    where,
  })

  return products
}

export const createProduct = async (req: CreateProductRequest) => {
  const {
    name: productName,
    description: productDescription,
    image: productImage,
  } = req.body

  const product = await client.product.create({
    data: {
      name: productName,
      description: productDescription,
      image: productImage,
    },
  })

  return product
}

export const updateProduct = async (req: CreateProductRequest) => {
  const { id } = req.params
  const { name, description, image } = req.body

  const product = await client.product.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      description,
      image,
    },
  })

  return product
}

export const deleteProduct = async (req: CreateProductRequest) => {
  const { id } = req.params

  const product = await client.product.delete({
    where: {
      id: Number(id),
    },
  })

  return product
}
