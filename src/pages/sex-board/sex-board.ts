import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sex-board',
  templateUrl: 'sex-board.html',
})
export class SexBoardPage implements OnInit{

  gridNumbers: number[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ngOnInit() {
    for(let i=1; i<=100; i++) {
      
    }
  }
}
