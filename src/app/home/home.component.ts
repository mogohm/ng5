import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //ตัวแปรหรือ properties
  itemCount:number = 4;
  text1:string="เพิ่มรายการใหม่"; //1 way binding
  listText:string="รายการเริ่มต้น"; //2 way binding (model)
  listall=[];

  constructor() { }

  ngOnInit() {
    // รายการเริ่มต้น
    this.itemCount=this.listall.length;
  }

  additem()
  {

if(this.listText !=""){
  
  this.listall.push(this.listText);
  this.listText='';
  //นับล่าสุด
  this.itemCount=this.listall.length;
}


  }

}
