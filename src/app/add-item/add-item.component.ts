import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  name:string;
  phone:string;

  @Output() sendDataToParent = new EventEmitter<{name:string, phone:string}>();


  constructor() { }

  ngOnInit() {
  }

  pushToArr(){
    let obj = {
      "name": this.name,
      "phone": this.phone
    }

    this.sendDataToParent.emit(obj);


  }

}