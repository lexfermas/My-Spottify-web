import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpottifyService } from '../../../services/spottify.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-albumtodos',
  templateUrl: './albumtodos.component.html',
  styles: []
})
export class AlbumtodosComponent implements OnInit {

  albumTodos2: any[] = [];
  idArtista: any = {};
  termino: string = "";
  
  constructor(private activatedRoute: ActivatedRoute,
    public s_spoty: SpottifyService) { }

    buscarAlbums(){
      this.s_spoty.getAlbums(this.termino )
        .subscribe( );
     }

  ngOnInit() {

    this.s_spoty.getAlbumTodos()
              .pipe(map((resp: any) => resp.albums))
              .subscribe(albumsAll => {
                this.albumTodos2 = albumsAll;
                this.idArtista = albumsAll;
                console.log(this.albumTodos2)
              });
  }

}
