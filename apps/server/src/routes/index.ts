import { Router } from 'express'
import routesProducts from './../modules/product/product.router'

const router: Router = Router()

router.use('/v1/products', routesProducts)

export default router
