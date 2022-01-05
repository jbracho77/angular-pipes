import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {


  //i18nSelect
  nombre: string = 'Fernando'; //'Susana'
  genero: string = 'masculino'; //'femenino

  nombres: string[] = ['Fernando', 'Susana'];
  generos: string[] = ['masculino', 'femeninos'];
  flagGenero: boolean = false;


  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Juan', 'Fred', 'Cristian'];
  clientesBkp: string[] = ['María', 'Pedro', 'Juan'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'

  }

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Otawa, Canadá'
  }

  //JSON Pipe
  heroes = [
    { 
      nombre: 'Superman',
      vuela: true  
    },
    { 
      nombre: 'Robin',
      vuela: false  
    },
    { 
      nombre: 'Aquaman',
      vuela: false  
    }
  ]

  //Async Pipe
  miObservable = interval(1000); //0,1,2,3,4,...,n
  valorPromesa = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
      resolve('Fin de la promesa, ')
    }, 3500);

  })

  constructor() { }

  ngOnInit(): void {
  }

  cambiarGenero() {
    if(this.flagGenero){
      this.flagGenero = false;
      this.nombre = this.nombres[0];
      this.genero = this.generos[0];
    }else{
      this.flagGenero = true;
      this.nombre = this.nombres[1];
      this.genero = this.generos[1];
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  agregarCliente() {
    this.clientes.push(' ')
  }

}
