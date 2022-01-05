import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = false;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Mujer maravilla',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Shadow',
      vuela: false,
      color: Color.negro
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

  cambiarMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden( valor: string ) {
    this.ordenarPor = valor;
  }

}
