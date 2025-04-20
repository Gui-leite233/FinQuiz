import { controller, Delete, Get, Post, Put } from "@expressots/adapter-express";

@controller("/question/controller")
export class QuestionControllerController {
    @Get("/quizzes/:quizId/questions")
    ListarEspecifico() {
        return "Listar perguntas de Quiz";
    }

    @Get("/ques")
    listarPergunta(){
        return "";
    }

    @Post("/quizzes/:quizId/questions")
    criarPergunta(){
        return "criar pergunta";
    }

    @Put("/questions/:id")
    atualizarPergunta(){

    }

    @Delete("/questions/:id")
    deletarPergunta(){
        
    }
}
