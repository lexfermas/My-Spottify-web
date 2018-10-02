import { Component, OnInit } from '@angular/core';
import { SpottifyService } from '../../services/spottify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino: string = "";

  constructor(public s_spottify: SpottifyService) {  }

   buscarArtistas(){
    this.s_spottify.getArtistas(this.termino )
      .subscribe( );
   }

  ngOnInit() {
  }

}
