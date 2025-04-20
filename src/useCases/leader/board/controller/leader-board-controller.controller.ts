import { controller, Get } from "@expressots/adapter-express";

@controller("/leader/board/controller")
export class LeaderBoardControllerController {
    @Get("/quizzes/:quizId/leaderBoard")
    placarEspecifico() {
        return "placar";
    }


    @Get("/leaderBoards/global")
    placarGlobal(){
        
    }
}
