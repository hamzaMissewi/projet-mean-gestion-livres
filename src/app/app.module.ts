import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ConlivreComponent } from './livre/conlivre/conlivre.component';
import { ModlivreComponent } from './livre/modlivre/modlivre.component';
import { AjoutlivreComponent } from './livre/ajoutlivre/ajoutlivre.component';
import { DetaillivresComponent } from './livre/detaillivres/detaillivres.component';
import { AjoutfourComponent } from './fournisseur/ajoutfour/ajoutfour.component';
import { ConfourComponent } from './fournisseur/confour/confour.component';
import { DetailfourComponent } from './fournisseur/detailfour/detailfour.component';
import { ModfourComponent } from './fournisseur/modfour/modfour.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AjoutlivreComponent,
    ConlivreComponent,
    ModlivreComponent,
    DetaillivresComponent,
    AjoutfourComponent,
    ConfourComponent,
    DetailfourComponent,
    ModfourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
