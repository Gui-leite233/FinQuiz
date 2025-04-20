import { controller, Get } from "@expressots/adapter-express";

@controller("/score/controller")
export class ScoreControllerController {
    @Get("/quizzes/:quizId/scores")
    listarTodos() {
        return "todos listados";
    }

    @Get("/users/:userId/scores")
    scoreUser(){
        
    }
}
