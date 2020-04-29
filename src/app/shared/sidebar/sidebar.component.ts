import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menus = [
    {
      nombre: 'Inicio',
      icono: 'home.svg',
      url: '/home',
    },
    {
      nombre: 'Mis notas',
      icono: 'book.svg',
      url: '/my-note',
    },
    {
      nombre: 'Materias abiertas',
      icono: 'book.svg',
      url: '/materias-abiertas',
    },
    {
      nombre: 'Registro',
      icono: 'feather-check-square.svg',
      url: '/registro',
    },
    {
      nombre: 'Calendario',
      icono: 'calendar-alt.svg',
      url: '/calendario',
    },
    {
      nombre: 'Banco laboral',
      icono: 'briefcase.svg',
      url: '/banco-laboral',
    },
    {
      nombre: 'Eventos',
      icono: 'calendar-check.svg',
      url: '/eventos',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.init();
  }

  init() {}
}
