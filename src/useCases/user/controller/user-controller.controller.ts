import { controller, Get, Put, Delete, Post } from "@expressots/adapter-express";

@controller("/user/controller")
export class UserControllerController {
    @Get("/user/:id")
    listUsers(){
        return "listar user";

    }

    @Put("/user/:id")
    atualizarUsers(){
        return "atualizar User";

    }

    @Delete("/user/:id")
    deletarUsers(){
        return "deletado user :id";

    }
    
}
