import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getIndex() {
    let today = new Date();
    let answear = {
        name: "",
        email: "",
        datetime: today.getFullYear()+"-"+ today.getMonth()+"-"+ today.getDay()+"-"+today.getHours()+":"+today.getMinutes(),
        costumers: "1",
        errors: []
    };
    return answear;
  }
 
}
