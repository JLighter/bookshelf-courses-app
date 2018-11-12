import { Component } from '@angular/core';
import {VinylService} from './core/services/vinyl.service';
import {Vinyl} from './core/models/vinyl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  vinyls: Array<Vinyl>;

  constructor(private vinylService: VinylService) {
    this.vinyls = this.vinylService.getAll();
  }

  title = 'vinyl-bookshelf';
}
