import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // open:boolean = ;
  open:boolean = true;

  receive($toggleData:any){
    console.log("open");
    console.log(this.open);
    console.log("toggleMenu");
    console.log($toggleData);
    this.open = $toggleData;
  }

}
