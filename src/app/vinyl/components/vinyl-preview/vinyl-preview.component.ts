import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vinyl-preview',
  templateUrl: './vinyl-preview.component.html',
  styleUrls: ['./vinyl-preview.component.css']
})
export class VinylPreviewComponent implements OnInit {

  @Input()
  public vinyl: any;

  // Par défaut nous ne somme pas en mode edition
  isEditing = false;

  constructor() { }

  ngOnInit() {
  }

  switchEditMode() {
    this.isEditing = !this.isEditing;
  }

}
