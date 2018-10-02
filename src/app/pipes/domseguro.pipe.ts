import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
//import { url } from 'inspector';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private donSanitarizer: DomSanitizer){ }

  transform(value: any, args?: any): any {
    return this.donSanitarizer.bypassSecurityTrustResourceUrl( args + value );
  }

}
