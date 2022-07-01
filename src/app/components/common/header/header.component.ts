import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() toggleMenu = new EventEmitter<boolean>();

  data:boolean = true;

  toggle(){
    // this.data = !this.data;
    // console.log("headerComponent "+ this.data);
    this.toggleMenu.emit(this.data);
  }

}
