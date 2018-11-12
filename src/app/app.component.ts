import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  vinyls: Array<object> = [{
    title: 'Bad',
    artiste: 'Michael Jackson',
    imageUrl: 'https://img-4.linternaute.com/PI-AYLwdrSAlAsBVE53jZasrWYM=/350x/smart/4184ae2fdda74cb5b2e150bc98efebe8/ccmcms-linternaute/19006.jpg',
    releaseDate: 1987,
  }, {
    title: 'Uprising',
    artiste: 'Bob marley and the Wailers',
    imageUrl: 'https://img.cdandlp.com/2017/06/imgL/118865816.jpg',
    releaseDate: 1980,
  }, {
    title: 'Hendrix in the west',
    artiste: 'Jimi Hendrix',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Hendrix_in_the_west.jpg',
    releaseDate: 1972,
  }, {
    title: 'Porgy and Bess',
    artiste: 'Louis Armstrong et Ella Fitzgerald',
    imageUrl: 'https://media1.jpc.de/image/w600/front/0/8436542011464.jpg',
    releaseDate: 1958,
  }];

  title = 'vinyl-bookshelf';
}
