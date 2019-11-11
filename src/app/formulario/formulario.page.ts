import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

	dadosPessoa = {
		job: '',
		name: ''
	}

	// dadosPessoa = {
	// 	email: '',
	// 	firstname: '',
	// 	lastname: ''
	// }

  constructor(private apiService: ApiService, private alertController: AlertController) { }

  ngOnInit() {
  }

  async formSubmit(){

    await this.apiService.sendPostRequest(this.dadosPessoa).subscribe((data)=>{
      console.log(data);
    }, error => {
      console.log(error);
    });

    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: 'Formulário API',
      message: 'Dados enviados com sucesso.',
      buttons: ['OK']
    });

    await alert.present();

  	// const alert = await this.alertController.create({
   //    header: 'Alert',
   //    subHeader: 'Subtitle',
   //    message: this.dadosPessoa.job,
   //    // message: 'This is an alert message.',
   //    buttons: ['OK']
   //  });

   //  await alert.present();

   //  this.apiService.sendPostRequest(this.dadosPessoa)
   //  .subscribe((data)=>{console.log(data);
   //  }, error => {
   //  	console.log(error);
   //  });

  	// alert('Dados Enviados');
  }

}
