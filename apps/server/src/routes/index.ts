import { Router } from 'express'
import routesProducts from './../modules/product/product.router'
import routesVariants from './../modules/variant/variant.router'

const router: Router = Router()

router.use('/v1/products', routesProducts)
router.use('/v1/variants', routesVariants)

export default router
