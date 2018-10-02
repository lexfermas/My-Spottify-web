import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpottifyService } from '../../services/spottify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  pistas: any[] = [];
  pistas2: any[] = [];
  terminoCansion: string = "";
  id_artista: string = "";

  constructor(private activatedRoute: ActivatedRoute,
    public s_spottify: SpottifyService) { }

  buscarCansion() {
    this.s_spottify.getCansion( this.terminoCansion)
      .subscribe();
      
  }

  ngOnInit() {

    this.activatedRoute.params
      .pipe(map(params => params['id_artist']))
      .subscribe(id_artist => {
        console.log(id_artist);
        this.s_spottify.getArtistaUnico(id_artist).subscribe(
          cantante => {
            console.log(cantante);
            this.artista = cantante;
          });
        //se obtinen top 10 de las canciones del artista
        this.s_spottify.getTop(id_artist)
          .pipe(map((resp: any) => resp.tracks))
          .subscribe(cansiones => {
            this.pistas = cansiones;
            console.log(this.pistas)
          });

        //ver obj de buscar cansion. Busca una cansión del artista seleccionado.
        this.s_spottify.getCansion(id_artist)
        .pipe(map((data: any) => data.tracks))
        .subscribe(cansionDelArtist => {
        this.pistas2 = cansionDelArtist;
        console.log("Busqueda cansion");
        console.log(this.pistas2);
        })
      });

  }

}
