import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SpottifyService {

  artistas: any[] = [];
  album: any[] = [];
  cansionArtista: any[] = [];
  albumArtista: any[] = [];
  urlSpottify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQC2EKqEJwlj6FErjGM1PAql6snGXguuf84LsBw8L1OAY3k42ZrfxIFAn2LmaxTGMUxG1efZF3e2HRmdMjU';

  constructor(public http: HttpClient) {
  }
  // https://accounts.spotify.com/api/token  este link se debe colocar en postman con el metodo get seleccionado
  // para obtener el token y el token generado colocarlo en la variable token.
  private httpHeadersToken(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });
    return headers;
  }

  getTop(id_artist: string) {
    //obtiene 10 cansiones del artista seleccionado.
    let url = `${this.urlSpottify}artists/${id_artist}/top-tracks?country=CO`;
    let headers = this.httpHeadersToken();
    return this.http.get(url, { headers });
  }
  
  // Obtien un del artista seleccionado.
  getAlbum(id_artist: string){
    let url = `https://api.spotify.com/v1/artists/${id_artist}/albums?market=CO`
    let headers = this.httpHeadersToken();
    return this.http.get(url, { headers });
  }
  
  // Obtine todos los albun del artista seleccionado
  getAlbumTodos(){
    let url = "https://api.spotify.com/v1/albums/?ids=";
    let headers = this.httpHeadersToken();
    return this.http.get(url, {headers});
  }

  //obtiene todos los artistas que coincidan con el termino buscado.
  getAlbums(termino: string) {
    let url = `${this.urlSpottify}search?q=album%3A${termino}&type=album`;
    let headers = this.httpHeadersToken();
    return this.http.get(url, { headers })
      .pipe(map((resp: any) => {
        this.album = resp.albums.items;
        return this.album;
      }));
    }
    //obtiene el artista seleccionado de la lista generada por el metodo getArtistas().
  getArtistaUnico(id_artist: string) {
    let url = `${this.urlSpottify}artists/${id_artist}`;
    let headers = this.httpHeadersToken();
    return this.http.get(url, { headers });
  }
  //obtiene todos los artistas que coincidan con el termino buscado.
  getArtistas(termino: string) {
    let url = `${this.urlSpottify}search?query=${termino}&type=artist&market=CO&limit=50&offset=0`;
    let headers = this.httpHeadersToken();
    return this.http.get(url, { headers })
      .pipe(map((resp: any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      }));
    }

    //OJO verificar el id del artista, para que la canción sea de ese artista.
    getCansion( terminoCansion: string){

      let url = `${this.urlSpottify}search?query=${terminoCansion}&type=track`
      let headers = this.httpHeadersToken();

      return this.http.get(url, { headers })
        .pipe(map((resp: any) => {
          this.cansionArtista = resp.tracks.items;
          return this.cansionArtista; 
        }));
    }

  }
