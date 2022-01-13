import { Livre } from './../modele/livre';
import { Component, OnInit } from '@angular/core';
import { LivreService } from '../services/livre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conlivre',
  templateUrl: './conlivre.component.html',
  styleUrls: ['./conlivre.component.css'],
})
export class ConlivreComponent implements OnInit {
  livres!: Livre[];

  constructor(private livreService: LivreService, private router: Router) {}

  ngOnInit(): void {
    this.livreService.listeLivre().subscribe((liv) => {
      console.log(liv);
      this.livres = liv;
    });
  }

  supprimerLivre(p: Livre) {
    let conf = confirm('Etes-vous sûr de supprimer ?');
    if (conf)
      this.livreService.supprimerLivre(p.id).subscribe(() => {
        console.log('livre supprimé');
        this.SuprimerLivreDuTableau(p);
      });
  }

  SuprimerLivreDuTableau(liv: Livre) {
    this.livres.forEach((cur, index) => {
      if (liv.id === cur.id) {
        this.livres.splice(index, 1);
      }
    });
  }
}
