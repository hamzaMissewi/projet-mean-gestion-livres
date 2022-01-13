import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutfourComponent } from './fournisseur/ajoutfour/ajoutfour.component';
import { ConfourComponent } from './fournisseur/confour/confour.component';
import { AjoutlivreComponent } from './livre/ajoutlivre/ajoutlivre.component';
import { ConlivreComponent } from './livre/conlivre/conlivre.component';
import { ModlivreComponent } from './livre/modlivre/modlivre.component';


const routes: Routes = [
  {path: "ajoutlivre", component : AjoutlivreComponent},
  {path: "conlivre", component : ConlivreComponent},
  {path: "ajoutfour", component : AjoutfourComponent},
  {path: "modlivre", component : ModlivreComponent},
  {path: "confour", component : ConfourComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
