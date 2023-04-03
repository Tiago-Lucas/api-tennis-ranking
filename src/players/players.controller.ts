import { Controller, Post } from "@nestjs/common";

@Controller('api/v1/players')
export class PlayersController {

  @Post()
  async newUpdatePlayer(){
    return JSON.stringify({
      "nome":"Lucas"
    })
  }
}
