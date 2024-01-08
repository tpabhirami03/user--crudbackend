const jsonserver=require('json-server')

const server=jsonserver.create()

const router=jsonserver.router("db.json")

const middleware=jsonserver.defaults()

const PORT=process.env.PORT ||3001

server.use(middleware)
server.use(router)

server.listen(PORT,()=>{
    console.log("user details server started at port:"+PORT);
})



