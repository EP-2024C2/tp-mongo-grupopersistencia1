const { Router } = require('express')
const productoRoutes = require('./productoRoutes')
const fabricanteRoutes=require('./fabricanteRoutes')
const componenteRoutes = require('./componenteRoutes')
const router = Router()

router.use('/productos', productoRoutes)
router.use('/fabricantes',fabricanteRoutes)
router.use('/componentes', componenteRoutes)


module.exports = router