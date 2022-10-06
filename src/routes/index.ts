import { Router, Request, Response } from "express"

const router = Router()

router.get('/',(req:Request,res:Response) =>{
    res.render('home')
})

router.get('/login',(req:Request,res:Response) =>{
    res.render("login")
})
//ROTA ESTÁTICA
router.get('/contato',(req:Request,res:Response) =>{
    res.send("PAGINA DE CONTATO")
})
//ROTA DINÂMICA
router.get('/noticia/:noticia',(req:Request,res:Response) =>{
    let noticia: string = req.params.noticia
    res.send(`Noticias: ${noticia}`)
})

router.get('/viagens/:origem-:destino',(req:Request,res:Response) =>{
    let origem:string = req.params.origem
    let destino:string = req.params.destino

    res.send(`Procurando trajetos de ${origem} até ${destino}`)
})

export default router