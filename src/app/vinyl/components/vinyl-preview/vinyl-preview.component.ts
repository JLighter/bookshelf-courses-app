import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vinyl-preview',
  templateUrl: './vinyl-preview.component.html',
  styleUrls: ['./vinyl-preview.component.css']
})
export class VinylPreviewComponent implements OnInit {

  @Input()
  public vinyl: any;

  constructor() { }

  ngOnInit() {
  }

  changeArtiste() {
    this.vinyl.artiste = 'King of pop';
  }

  changeReleaseDate(value: number) {
    this.vinyl.releaseDate = value;
  }

}
