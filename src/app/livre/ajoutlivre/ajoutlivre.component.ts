import { Component, OnInit } from '@angular/core';
import { Livre } from '../modele/livre';
import { LivreService } from '../services/livre.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-ajoutlivre',
  templateUrl: './ajoutlivre.component.html',
  styleUrls: ['./ajoutlivre.component.css'],
})
export class AjoutlivreComponent implements OnInit {
  newLivre = new Livre();

  constructor(private livreService: LivreService, private router: Router) {}

  ngOnInit(): void {}

  addLivre() {
    this.livreService.ajouterLivre(this.newLivre).subscribe((liv) => {
      console.log(liv);
    });
    this.router.navigate(['conlivre']);
  }
}
