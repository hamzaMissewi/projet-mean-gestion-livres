export interface Book {
  id: string;
  titre: string;
  auteur: string;
  prix: number;
  stars: string;
  category: string;
  nbre_page: number;
  // category: Object;
  imageUrl: string;
  details: [];
  requirements: [];
}
