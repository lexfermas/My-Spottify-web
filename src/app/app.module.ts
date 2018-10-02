import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatExpansionModule, MatMenuModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { SpottifyService } from './services/spottify.service';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { ArtistComponent } from './components/artist/artist.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { AlbumComponent } from './components/album/album.component';
import { AlbumtodosComponent } from './components/album/albumtodos/albumtodos.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    SinfotoPipe,
    ArtistComponent,
    DomseguroPipe,
    AlbumComponent,
    AlbumtodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  providers: [
    SpottifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
