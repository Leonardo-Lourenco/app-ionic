import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})

export class ListagemPage implements OnInit {

public itens: Array<{ titulo: string; descricao: string}> = []
public posts;
public page;
public total_page;

  constructor(private apiService: ApiService) {
    this.page = 1;

  	this.apiService.getPosts(this.page).subscribe((data:any)=>{
  		console.log(data);
  		this.posts = data.data; 
  		//['data']['children'];
  	});

   }

   loadMoreData(event) {

      this.page++;
      this.apiService.getPosts(this.page).subscribe((data:any)=>{
      //console.log(data);
      this.posts =  this.posts.concat(data.data) ; 
      event.target.complete();

      if (this.total_page == this.page) {
        event.target.disabled = true;
      }

     });
  }

  ngOnInit() {
  }

}