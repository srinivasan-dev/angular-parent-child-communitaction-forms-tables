import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../app.component'
@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  @Input() contactList: Contact[];
  constructor() { }

  ngOnInit() {
  }

}