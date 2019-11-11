import { Component } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	posts;

	constructor(private apiService: ApiService) {



	}	

  // constructor() {
  // 	this.showAlert();
  // }

  // showAlert(){
  // 	alert(1);
  // }
}
