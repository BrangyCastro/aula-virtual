import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  materias = [
    {
      nombre: 'TECNOLOGÍAS DE SEGURIDAD DE LA INFORMACIÓN',
      paralelo: 'A',
      local: 'MANTA - Edif. Rb - Redes (Facultad Informática)',
      horario: 'MAR17:00-18:00MAR18:00-19:00MAR19:00-20:00',
    },
    {
      nombre: 'ADMINISTRACIÓN DE SERVIDORES',
      paralelo: 'A',
      local: 'MANTA - Edif. Rb - Redes (Facultad Informática)',
      horario: 'MAR17:00-18:00MAR18:00-19:00MAR19:00-20:00',
    },
    {
      nombre: 'Administración de empresas',
      paralelo: 'A',
      local: 'MANTA - Edif. Rb - Redes (Facultad Informática)',
      horario: 'MAR17:00-18:00MAR18:00-19:00MAR19:00-20:00',
    },
    {
      nombre: 'Investigación de operaciones',
      paralelo: 'A',
      local: 'MANTA - Edif. Rb - Redes (Facultad Informática)',
      horario: 'MAR17:00-18:00MAR18:00-19:00MAR19:00-20:00',
    },
    {
      nombre: 'OPTATIVA 2 [NUEVAS TECNOLOGÍAS]',
      paralelo: 'A',
      local: 'MANTA - Edif. Rb - Redes (Facultad Informática)',
      horario: 'MAR17:00-18:00MAR18:00-19:00MAR19:00-20:00',
    },
    {
      nombre: 'SISTEMA CORPORATIVOS DE GESTION',
      paralelo: 'A',
      local: 'MANTA - Edif. Rb - Redes (Facultad Informática)',
      horario: 'MAR17:00-18:00MAR18:00-19:00MAR19:00-20:00',
    },
  ];

  noticias = [
    {
      titulo: 'Formulario para inscripción de capacitación docentes - Uleam',
      contenido:
        'Mediante Oficio N° 009-IFF-VA, el Vicerrectorado Académico ha planificado un sistema de capacitaciones y cursos de perfeccionamiento docente para el inicio de este periodo......',
    },
    {
      titulo: 'Formulario para inscripción de capacitación docentes - Uleam',
      contenido:
        'Mediante Oficio N° 009-IFF-VA, el Vicerrectorado Académico ha planificado un sistema de capacitaciones y cursos de perfeccionamiento docente para el inicio de este periodo......',
    },
    {
      titulo: 'Formulario para inscripción de capacitación docentes - Uleam',
      contenido:
        'Mediante Oficio N° 009-IFF-VA, el Vicerrectorado Académico ha planificado un sistema de capacitaciones y cursos de perfeccionamiento docente para el inicio de este periodo......',
    },
    {
      titulo: 'Formulario para inscripción de capacitación docentes - Uleam',
      contenido:
        'Mediante Oficio N° 009-IFF-VA, el Vicerrectorado Académico ha planificado un sistema de capacitaciones y cursos de perfeccionamiento docente para el inicio de este periodo......',
    },
  ];

  matriculas = [
    {
      titulo: 'INGENIERÍA EN SISTEMAS (Créditos) Período Académico: 2019-2',
      generado: '8.55',
      pagado: '8.55',
      descuento: '0.00',
      deuda: '0.00',
      url: '',
    },
    {
      titulo: 'INGENIERÍA EN SISTEMAS (Créditos) Período Académico: 2019-1',
      generado: '8.55',
      pagado: '8.55',
      descuento: '0.00',
      deuda: '0.00',
      url: '',
    },
    {
      titulo: 'INGENIERÍA EN SISTEMAS (Créditos) Período Académico: 2018-2',
      generado: '8.55',
      pagado: '8.55',
      descuento: '0.00',
      deuda: '0.00',
      url: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
