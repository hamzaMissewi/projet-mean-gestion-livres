// export interface Book {
export class Book {
  public id: number;
  public title: string;
  public price: number;
  public postedBy: string = 'hamza';
  public nbrePages: string;
  public profilePic: string;
  public category: string;
  public dateCreated: Date = new Date();
  public quantite: number;
}

export interface APIResponse<T> {
  results: Array<T>;
}

interface Genre {
  name: string;
}
