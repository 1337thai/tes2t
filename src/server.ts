import { setServers } from 'dns'
import express, {Request, response, Response} from 'express'
import { request, Server } from 'http'

//importando o index.ts de routes
import mainRoutes from './routes/index'

//importando PATH para acessar a pasta public
import path from 'path'
//importando o mustache
import mustache from 'mustache-express'

//USANDO EXPRESS
const server = express()

//configurando o mustache
server.set('view engine','mustache')

server.use(express.static(path.join(__dirname,'../public')))

//criando a rota para pasta views
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())

server.use(mainRoutes)

///criando a página não encontrada 
server.use( (req:Request, res:Response) =>{
    res.status(404).send("Página não encontrada")
})

server.listen(4000)





