import { controller, Delete, Get, Post } from "@expressots/adapter-express";

@controller("/quiz/controller")
export class QuizControllerController {
    @Get("/quizzes")
    listarQuiz() {
        return "listar Quiz";
    }

    @Get("/quizzes/:id")
    listarEspecifico(){
        return "/:id";
    }

    @Post("/quizzes")
    criarQuiz(){

    }

    @Delete("/quizzes/:id")
    deletarQuiz(){

    }
}
