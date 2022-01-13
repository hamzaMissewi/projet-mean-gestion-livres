import { Livre } from './../modele/livre';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-modlivre',
  templateUrl: './modlivre.component.html',
  styleUrls: ['./modlivre.component.css'],
})
export class ModlivreComponent implements OnInit {
  currentLivre = new Livre();

  constructor(
    private activatedRoute: ActivatedRoute,
    private livreService: LivreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.livreService
      .consulterLivre(this.activatedRoute.snapshot.params['id'])
      .subscribe((liv) => {
        this.currentLivre = liv;
      });
  }

  updateLivre() {
    this.livreService.updateProduit(this.currentLivre).subscribe(
      (prod) => {
        this.router.navigate(['conlivre']);
      },
      (error) => {
        alert('Problème lors de la modification !');
      }
    );
  }
}
