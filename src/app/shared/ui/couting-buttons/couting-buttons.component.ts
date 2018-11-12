import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-couting-buttons',
  templateUrl: './couting-buttons.component.html',
  styleUrls: ['./couting-buttons.component.css']
})
export class CoutingButtonsComponent implements OnInit {

  // Voici notre objet émetteur d’évènements.
  @Output()
  valueChange = new EventEmitter();

  // Nous avons besoin d’initialiser la valeur de ce compteur depuis l’extérieur.
  @Input()
  value = 0;

  constructor() { }

  ngOnInit() {
  }

  // Une fonction permet d’émettre la valeur de notre compteur grâce à notre EventEmitter.
  emitValue() {
    this.valueChange.emit(this.value);
  }

  // Une fonction incrémente la valeur puis l’émet
  incValue() {
    this.value += 1;
    this.emitValue();
  }

  // Une fonction décrémente la valeur puis l’émet.
  decValue() {
    this.value -= 1;
    if (this.value < 0) { this.value = 0; }
    this.emitValue();
  }


}
