import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Livre } from '../modele/livre';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class LivreService {
  apiURL: string = 'http://localhost:3000/livres';
  constructor(private http: HttpClient) {}

  listeLivre(): Observable<Livre[]> {
    return this.http.get<Livre[]>(this.apiURL);
  }

  ajouterLivre(liv: Livre): Observable<Livre> {
    return this.http.post<Livre>(this.apiURL, liv, httpOptions);
  }

  supprimerLivre(id: string) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterLivre(id: number): Observable<Livre> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Livre>(url);
  }

  updateProduit(liv: Livre): Observable<Livre> {
    return this.http.put<Livre>(this.apiURL, liv, httpOptions);
  }
}
