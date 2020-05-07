import { Component } from '@angular/core';

export interface Contact{
  name:string;
  phone:string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular Parent Child Communication Form and Tables';
  
  contactArr: Contact[] = [];

  pushToContactArr(data){
    console.log(data);
    this.contactArr.push(data);
    console.log(this.contactArr)
  }
}
