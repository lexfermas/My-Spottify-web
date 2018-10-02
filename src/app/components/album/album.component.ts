import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpottifyService } from '../../services/spottify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styles: []
})
export class AlbumComponent implements OnInit {

  idArtista2: any = {};
  albumsDelArtista: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              public s_spoty: SpottifyService) { }

  ngOnInit() {

    this.activatedRoute.params
      .pipe(map(params => params['id_artist']))
      .subscribe(id_artist => {
        this.idArtista2 = id_artist;
        console.log("id artista "+ this.idArtista2);
        this.s_spoty.getAlbum(id_artist)
              .pipe(map((resp: any) => resp.items))
              .subscribe(albumsAll => {
                this.albumsDelArtista = albumsAll;
                console.log(this.albumsDelArtista)
              });
      });  
  }
}
