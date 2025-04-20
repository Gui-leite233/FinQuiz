import { controller, Get, Post } from "@expressots/adapter-express";

@controller("/submission/controller")
export class SubmissionControllerController {
    @Post("/quizzes/:quizId/submissions")
    criarRespostas() {
        return "resposta criada";
    }

    @Get("/submissions/:id")
    verResultEspecifico(){
        return ":id"
    }

    @Get("/submissions")
    listarRespostas(){
    
    }
}
