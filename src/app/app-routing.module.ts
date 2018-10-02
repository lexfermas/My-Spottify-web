import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { patch } from 'webdriver-js-extender';
import { AlbumComponent } from './components/album/album.component';
import { AlbumtodosComponent } from './components/album/albumtodos/albumtodos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'album/:id_artist', component: AlbumComponent},
   {path: 'albumTodos', component: AlbumtodosComponent},
  {path: 'artist/:id_artist', component: ArtistComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}, //todas las rutas redireccioanan al home.
  {path: '**', pathMatch: 'full', redirectTo: 'home'} //todas las rutas redireccioanan al home.
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
