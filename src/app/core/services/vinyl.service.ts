import { Injectable } from '@angular/core';
import {Vinyl} from '../models/vinyl';

@Injectable({
  providedIn: 'root'
})
export class VinylService {

  private vinyls: Array<Vinyl> = [{
    title: 'Bad',
    artiste: 'Michael Jackson',
    imageUrl: 'https://img-4.linternaute.com/PI-AYLwdrSAlAsBVE53jZasrWYM=/350x/smart/4184ae2fdda74cb5b2e150bc98efebe8/ccmcms-linternaute/19006.jpg',
    releaseDate: new Date().setFullYear(1987, 8, 31),
  }, {
    title: 'Uprising',
    artiste: 'Bob marley and the Wailers',
    imageUrl: 'https://img.cdandlp.com/2017/06/imgL/118865816.jpg',
    releaseDate: new Date().setFullYear(1980, 6, 10),
  }, {
    title: 'Hendrix in the west',
    artiste: 'Jimi Hendrix',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Hendrix_in_the_west.jpg',
    releaseDate: new Date().setFullYear(1972, 1, 1),
  }, {
    title: 'Porgy and Bess',
    artiste: 'Louis Armstrong et Ella Fitzgerald',
    imageUrl: 'https://media1.jpc.de/image/w600/front/0/8436542011464.jpg',
    releaseDate: new Date().setFullYear(1958, 9, 30),
  }];

  constructor() { }

  // Nous écrirons ces fonctions très bientôt

  getAll(): Array<Vinyl>  {}

  getOne(index: number): Vinyl {}

  updateOne(index: number, vinyl: object): Array<Vinyl> {}

  addOne(vinyl: object): Array<Vinyl> {}

  delete(start: number, end: number): Array<Vinyl> {}


}
