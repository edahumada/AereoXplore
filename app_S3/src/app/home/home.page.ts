import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string = '';

  aviones = [
    { 
      nombre: 'Airbus', 
      modelo: 'A220-300', 
      descripcion: 'El Airbus A220-300 es una aeronave eficiente en combustible, diseñada para vuelos de corto y medio alcance, con capacidad para hasta 160 pasajeros y destacada por su comodidad y bajo impacto ambiental.' 
    },
    { 
      nombre: 'Airbus', 
      modelo: 'A320neo', 
      descripcion: 'El Airbus A320neo incorpora motores de última generación y diseño de wingtips que permiten ahorrar combustible, siendo ideal para vuelos de medio alcance y una capacidad que ronda los 180 pasajeros.' 
    },
    { 
      nombre: 'Airbus', 
      modelo: 'A330-900', 
      descripcion: 'Con mayor alcance y comodidad, el Airbus A330-900 es una opción popular para rutas de largo alcance, ofreciendo eficiencia y una capacidad de hasta 287 pasajeros en un diseño espacioso.' 
    },
    { 
      nombre: 'Boeing', 
      modelo: '787 Dreamliner', 
      descripcion: 'El Boeing 787 Dreamliner es un avión de última tecnología para vuelos de largo alcance, conocido por su eficiencia en combustible, gran capacidad y un ambiente de cabina avanzado para los pasajeros.' 
    },
    { 
      nombre: 'Boeing', 
      modelo: '747-8', 
      descripcion: 'El icónico Boeing 747-8 es un gigante de los cielos, adecuado para rutas de largo alcance, con capacidad para 410 pasajeros y características únicas como su cabina de dos pisos.' 
    },
    { 
      nombre: 'Boeing', 
      modelo: '737 MAX', 
      descripcion: 'El Boeing 737 MAX es una opción popular para rutas de corto y medio alcance, conocido por su bajo consumo de combustible y capacidad para unos 180 pasajeros.' 
    },
    { 
      nombre: 'Boeing', 
      modelo: 'F/A-18 Hornet', 
      descripcion: 'El Boeing F/A-18 Hornet es un caza multifunción utilizado en operaciones militares. Con gran maniobrabilidad y velocidad, es eficaz tanto en combate aire-aire como en misiones de ataque.' 
    },
    {
      nombre: 'Embraer',
      modelo: 'E190',
      descripcion: 'El Embraer E190 es un avión regional de pasajeros que ofrece un alto nivel de confort y eficiencia, ideal para vuelos de corto a medio alcance, con capacidad para 100 pasajeros.'
    },
    {
      nombre: 'Bombardier',
      modelo: 'CRJ900',
      descripcion: 'El Bombardier CRJ900 es un jet regional que combina eficiencia y confort, ideal para vuelos cortos y con capacidad para 76 pasajeros.'
    },
    {
      nombre: 'Lockheed Martin',
      modelo: 'C-130 Hercules',
      descripcion: 'El Lockheed Martin C-130 Hercules es un avión de transporte militar versátil, conocido por su capacidad para operar en pistas cortas y no preparadas.'
    },
    {
      nombre: 'Airbus',
      modelo: 'A350-900',
      descripcion: 'El Airbus A350-900 es un avión de largo alcance que combina tecnología avanzada con un diseño aerodinámico, permitiendo una capacidad de hasta 440 pasajeros.'
    },
    {
      nombre: 'Boeing',
      modelo: '757',
      descripcion: 'El Boeing 757 es un avión de fuselaje estrecho, utilizado en vuelos de medio alcance, conocido por su capacidad para operar en pistas cortas y su eficiencia en combustible.'
    },
    {
      nombre: 'McDonnell Douglas',
      modelo: 'MD-80',
      descripcion: 'El McDonnell Douglas MD-80 es un avión de pasajeros que ha sido un trabajo caballo en el transporte aéreo regional, con capacidad para 130 pasajeros.'
    },
    {
      nombre: 'Sukhoi',
      modelo: 'Superjet 100',
      descripcion: 'El Sukhoi Superjet 100 es un avión regional ruso que combina características modernas con eficiencia, diseñado para vuelos de corto alcance y con capacidad para 100 pasajeros.'
    }
  ];
  


  constructor(private route: ActivatedRoute, private alertController: AlertController) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
    });
  }

  async mostrarAlerta(producto: any) {
    const alert = await this.alertController.create({
      header: `${producto.nombre} - ${producto.modelo}`,
      message: producto.descripcion,
      buttons: ['Cerrar']
    });
    await alert.present();
  }
  
}
