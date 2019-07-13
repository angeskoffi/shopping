
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Articles: any[];
  constructor(public router: Router) {
    this.Articles = [
      {nom : 'Television', prix : 145 , details : 'Marque de Television'},
      {nom : 'Telephone', prix : 89 , details : 'Marque de Telephone'},
      {nom : 'Sac a Dos', prix : 11 , details : 'Marque de Sac a Dos'},
      {nom : 'PC', prix : 100 , details : 'Marque de PC'}
    ];
  }
  showDetails() {
    this.router.navigateByUrl('/Details');
  }
}
