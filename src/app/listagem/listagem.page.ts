import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})


export class ListagemPage implements OnInit {

  public posts:any;
  public page:any;
  public total_page:any;

  constructor(private apiService: ApiService, private modalController: ModalController, private alertController: AlertController) {

    this.page = 1;

    this.apiService.getPosts(this.page).subscribe((data:any)=>{
      console.log(data);
      this.total_page = data.total_page;
      this.posts = data.data;
      });

    }

  loadMoreData(event) {

    this.page++;

    this.apiService.getPosts(this.page).subscribe((data:any)=>{
      this.posts = this.posts.concat(data.data);

      event.target.complete();
      if (this.total_page == this.page) {
        event.target.disabled = true;
      }
    });
  }

  async presentModal(post) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        'firstName': post.first_name,
        'lastName': post.last_name,
        'modalController': this.modalController
      }
    });
    return await modal.present();
  }



  async edit(post){

    let dadosPessoa = {
      "name": "leo",
      "job": "Pulicidade"
    }

   await this.apiService.sendPutRequest(dadosPessoa, post.id).subscribe((data)=>{
      console.log(data);
    }, error => {
      console.log(error);
    });

    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: 'Atualizar API',
      message: 'Dados atualizados ('+post.first_name+' '+ post.last_name+') com sucesso.',
      buttons: ['OK']
    });

      // const alert = await this.alertController.create({
      // header: 'Alerta!',
      // subHeader: 'Formulário API',
      // message: 'Dados editados ('+post.first_name+' '+ post.last_name+') com sucesso.',
      // buttons: ['OK']
      // });

      // await alert.present();
  
  }

    async delete(post){

      await this.apiService.sendDeleteRequest(post.id).subscribe((data)=>{
      console.log(data);
    }, error => {
      console.log(error);
    });

    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: 'Deletar API',
      message: 'Dados deletados com sucesso.',
      buttons: ['OK']
    });

      // const alert = await this.alertController.create({
      // header: 'Alerta!',
      // subHeader: 'Formulário API',
      // message: 'Dados deletados com sucesso.',
      // buttons: ['OK']
      // });

      // await alert.present();

      await alert.present();
  
  }

  ngOnInit(){

  }

}
