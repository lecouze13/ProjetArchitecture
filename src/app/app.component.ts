import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  TodayDate: Date = new Date();
  dateSelectionnee1: Date;
  dateSelectionnee2: Date;
  isLogin: Boolean
  constructor() {
    this.dateSelectionnee1 = new Date();
    this.dateSelectionnee2 = new Date();
    this.isLogin = false
  }

  submitForm = () => {
    const dateToday = this.TodayDate.getTime()

    const dateConge1String = this.dateSelectionnee1;
    const dateConge1 = new Date(dateConge1String)
    const dateConge1time = dateConge1.getTime();
    console.log(dateConge1)

    const dateConge2String = this.dateSelectionnee2;
    const dateConge2 = new Date(dateConge2String)

    console.log(dateConge2)
    const dateConge2time = dateConge2.getTime();


    if (dateConge1time > dateToday && dateConge2time > dateToday) {
      alert("dates correcte envoie a la base de donnée")
    }
    else {
      alert("Une ou les deux  dates selectionnées est déja passé")
    }
  }
}
