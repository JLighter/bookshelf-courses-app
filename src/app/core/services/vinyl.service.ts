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

  getAll(): Array<Vinyl> {
    return this.vinyls.slice(0, 0);
  }

  getOne(index: number): Vinyl {
    return this.vinyls[index];
  }

  updateOne(index: number, vinyl: Vinyl): Array<Vinyl> {
    if (vinyl == null) throw Error('Null or undefined vinyl');
    this.vinyls[index] = vinyl;
    return this.vinyls;
  }

  add(vinyl: Vinyl): Array<Vinyl> {
    if (vinyl == null) throw Error('Null or undefined vinyl');
    this.vinyls.push(vinyl);
    return this.vinyls;
  }

  delete(start: number, end: number): Array<Vinyl> {
    if (start - end > 0) throw Error('End must be higher than start');
    this.vinyls = this.vinyls.splice(start, end - start);
    return this.vinyls;
  }

}
