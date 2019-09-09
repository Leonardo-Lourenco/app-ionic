import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
//export class ListagemPage implements OnInit {

  //constructor() { }

  //ngOnInit() {
  //}

//}

export class ListagemPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public itens: Array<{ titulo: string; descricao: string; icon: string }> = [];
  constructor() {
    for (let i = 0; i < 5; i++) {
      this.itens.push({
        titulo: 'Item ' + (i+1),
        descricao: 'Aqui está os ...' + (i+1),
        //icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        icon: this.icons[i]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
