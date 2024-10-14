import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import myDTO from './myDTO.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index')
  getIndex() {
    return {
      message: this.appService.getIndex()
    };
  }

  @Get('sikeres')
  @Render('sikeres')
  getSikeres() { }
  

  @Post()
  getPost(@Body() myDto: myDTO, @Res() res) {
    console.log("post");
    let errors = [];
    if (myDto.name == "" || myDto.email == "") {
      errors.push("Minden mező kitöltése kötelező");
      console.log("valami null");
    }
    if (parseInt(myDto.costumers) < 1 || parseInt(myDto.costumers) > 15) {
      console.log("vásárlo nem ok");
      errors.push("Nézőknek 1 és 15 között kell lenniük");
    }
    if (!/.+[@].+/.test(myDto.email)) {
      console.log("email nem ok");
      errors.push("Emailcímnek tartalmaznia kell 1 @ jelet");
    }
    if(new Date(myDto.datetime).getDate()< new Date().getDate()){
      errors.push("A dátum nem lehet multbeli");
    }

    console.log(errors);

    if (errors.length < 1) {
      res.redirect('sikeres');
    } else {
      console.log("else");

      let message = {
        name: myDto.name,
        email: myDto.email,
        datetime: myDto.datetime,
        costumers: myDto.costumers,
        errors: errors
      }

      console.log(message);
      return message;
    }
    console.log("ez miért fut le?")
  }
}
