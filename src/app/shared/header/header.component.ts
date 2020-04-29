import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  notifications = [
    {
      menssage:
        'Se ha agregado la tareaTrabajo Jefe Encubierto, para entregar antes de 28/01/2020',
      url: 'https://source.unsplash.com/fn_BT9fwg_E/60x60',
      time: '58m',
    },
    {
      menssage:
        'Se ha agregado la tareaTrabajo Jefe Encubierto, para entregar antes de 28/01/2020',
      url: 'assets/img/tatuaje espartano.jpg',
      time: '1hora',
    },
    {
      menssage:
        'Se ha agregado la tareaTrabajo Jefe Encubierto, para entregar antes de 28/01/2020',
      url: 'https://source.unsplash.com/fn_BT9fwg_E/60x60',
      time: '12h',
    },
    {
      menssage:
        'Se ha agregado la tareaTrabajo Jefe Encubierto, para entregar antes de 28/01/2020',
      url: 'assets/img/tatuaje espartano.jpg',
      time: '3dias',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
