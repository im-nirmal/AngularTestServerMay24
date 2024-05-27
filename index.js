const jsonServer = require('json-server')
const EMPServer = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

EMPServer.use(middleware)
EMPServer.use(router)

EMPServer.listen(PORT, () => {
    console.log(`Employee App Server started at port ${PORT}`);
})