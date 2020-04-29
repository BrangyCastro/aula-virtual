import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
})
export class EventComponent implements OnInit {
  // Datos de prueba local - posible llegada de informacion JSON
  listaEventos: ListaEventos[] = [
    {
      mes: 'Febrero',
      eventos: [
        {
          fecha: '17 de febrero del 2020',
          nombre:
            'Socialización de actividades realizadas por los recicladores para realización de video sobre el Prozecto Recíclame denomida "Mosaico con tapas"',
          hora: '14:30',
          lugar: 'Sector San Juan de Manta',
          organiza: 'Dirección de Gestión Mediambiente',
        },
        {
          fecha: '17 de febrero del 2020',
          nombre:
            'Socialización del uso y apliación de la matriz del marco lógico en la formulación de proyectos de Vinculación',
          hora: '15:00 - 18:00',
          lugar: 'Facultad de Hotelería y Turismo',
          organiza: 'Dirección de Vinculación y emprendimiento',
        },
        {
          fecha: '17 al 18 de febrero del 2020',
          nombre:
            'Primera Jornada Científica Transdisciplinaria Estudiantil de la Facuktad de Ciencias Médicas',
          hora: '09:00 - 17:00',
          lugar: 'Auditorio "Dr. Roddy Mata"',
          organiza: 'Facultad Ciencias Médicas',
        },
        {
          fecha: '19 de febrero del 2020',
          nombre: 'Lanzamiento del evento ICCIS2020',
          hora: '10:00',
          lugar: 'Hotel Manta host',
          organiza: 'Facultad Ciencias Informáticas',
        },
        {
          fecha: '19 al 21 de febrero del 2020',
          nombre:
            'I Jornada Científica Iberoamericanas Diversidad en la Educación Superior Interculturalidad, Genero y Discapacidad',
          hora: '08:00 - 17:30',
          lugar: 'Salon de Concierto "Horacio Hidrovo"',
          organiza: 'Vicerrectorado Académico',
        },
        {
          fecha: '20 de febrero del 2020',
          nombre:
            'Conferencia con profecionales de la salud dobre el coronavirus',
          hora: '17:00',
          lugar: 'Auditorio "Dr. Roddy Mata"',
          organiza: 'Facultad Ciencias Médicas',
        },
        {
          fecha: '21 de febrero del 2020',
          nombre:
            'Elecciones de miembros de consejo de facultad y extensiones 2020 - 2022',
          hora: '16:00 - 20:00',
          lugar: 'Unidades Académicas Uleam-Extensiones',
          organiza: 'Consejo Electoral Permanente',
        },
      ],
    },
    {
      mes: 'Marzo',
      eventos: [
        {
          fecha: '17 de Marzo del 2020',
          nombre:
            'Socialización de actividades realizadas por los recicladores para realización de video sobre el Prozecto Recíclame denomida "Mosaico con tapas"',
          hora: '14:30',
          lugar: 'Sector San Juan de Manta',
          organiza: 'Dirección de Gestión Mediambiente',
        },
        {
          fecha: '17 de Marzo del 2020',
          nombre:
            'Socialización del uso y apliación de la matriz del marco lógico en la formulación de proyectos de Vinculación',
          hora: '15:00 - 18:00',
          lugar: 'Facultad de Hotelería y Turismo',
          organiza: 'Dirección de Vinculación y emprendimiento',
        },
        {
          fecha: '17 al 18 de Marzo del 2020',
          nombre:
            'Primera Jornada Científica Transdisciplinaria Estudiantil de la Facuktad de Ciencias Médicas',
          hora: '09:00 - 17:00',
          lugar: 'Auditorio "Dr. Roddy Mata"',
          organiza: 'Facultad Ciencias Médicas',
        },
        {
          fecha: '19 de Marzo del 2020',
          nombre: 'Lanzamiento del evento ICCIS2020',
          hora: '10:00',
          lugar: 'Hotel Manta host',
          organiza: 'Facultad Ciencias Informáticas',
        },
        {
          fecha: '19 al 21 de Marzo del 2020',
          nombre:
            'I Jornada Científica Iberoamericanas Diversidad en la Educación Superior Interculturalidad, Genero y Discapacidad',
          hora: '08:00 - 17:30',
          lugar: 'Salon de Concierto "Horacio Hidrovo"',
          organiza: 'Vicerrectorado Académico',
        },
        {
          fecha: '20 de Marzo del 2020',
          nombre:
            'Conferencia con profecionales de la salud dobre el coronavirus',
          hora: '17:00',
          lugar: 'Auditorio "Dr. Roddy Mata"',
          organiza: 'Facultad Ciencias Médicas',
        },
        {
          fecha: '21 de Marzo del 2020',
          nombre:
            'Elecciones de miembros de consejo de facultad y extensiones 2020 - 2022',
          hora: '16:00 - 20:00',
          lugar: 'Unidades Académicas Uleam-Extensiones',
          organiza: 'Consejo Electoral Permanente',
        },
      ],
    },
  ];
  // Variable para mostrar el año actual
  anio: number = new Date().getFullYear();
  // Variable para almacenar los resultados de los evento dependiendo
  // si es por uno o todos los meses
  resultadoEventos: ListaEventos[];
  constructor() {}

  ngOnInit(): void {
    this.mostrarEventos('0');
  }

  // Metodo que me permite validar que mes esta seleccionado
  mostrarEventos(evento: string) {
    if (evento === '0') {
      this.resultadoEventos = this.listaEventos;
    } else {
      this.resultadoEventos = this.listaEventos.filter(
        (item) => item.mes === evento
      );
    }
  }
}

// Interfaces para los datos locales
interface ListaEventos {
  mes: string;
  eventos: Eventos[];
}

interface Eventos {
  fecha: string;
  nombre: string;
  hora: string;
  lugar: string;
  organiza: string;
}
