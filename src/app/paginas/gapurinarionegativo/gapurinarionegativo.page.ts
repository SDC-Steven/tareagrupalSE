import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gapurinarionegativo',
  templateUrl: './gapurinarionegativo.page.html',
  styleUrls: ['./gapurinarionegativo.page.scss'],
})
export class GapurinarionegativoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Funcion OnCheck
  onCheck(item:any){
    console.log(item);
  }

}
