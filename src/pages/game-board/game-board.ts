import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import gridData from '../../assets/data/gridData';
import { gridDataType } from '../../../www/assets/data/gridData.interface';


@IonicPage()
@Component({
  selector: 'page-game-board',
  templateUrl: 'game-board.html',
})
export class GameBoardPage {

  gridNumbers: number[];
  fullData: gridDataType[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ngOnInit() {
    this.fullData = gridData;
    console.log(this.fullData);
  }
}
