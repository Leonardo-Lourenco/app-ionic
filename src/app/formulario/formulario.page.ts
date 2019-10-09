import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

	dadosPessoa= {
		email: '',
		nome: '',
		sobrenome: ''
	}

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  async formSubmit(){
  	 const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: this.dadosPessoa.email,
      buttons: ['OK']
    });

  	 await alert.present();

  	 this.apiService.sendPostRequest(this.dadosPessoa).subscribe((data)=>{
  	 	console.log(data);
  	 }, error => {
  	 	console.log(error);
  	 });
  }
}
