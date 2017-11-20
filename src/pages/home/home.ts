import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GithubProvider} from "../../providers/github/github";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public repos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public githubProvider: GithubProvider) {
  }

  ionViewCanEnter(): Promise <any> {
    return new Promise((resolve, reject) => {
      this.githubProvider.repositories('EcoleDuNumerique').subscribe(response => {
        console.log(response);
        this.repos = response;
        resolve();
      }, error => {
        reject(error);
      });
    });
  }
}
