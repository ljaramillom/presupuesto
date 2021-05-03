import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {

  nombreGasto: string;
  cantidad: number;
  formularioValido: boolean;
  textoValido: string;

  constructor(private presupuestoService: PresupuestoService) {
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioValido = false;
    this.textoValido = '';
  }

  ngOnInit(): void {
  }

  agregarGasto() {

    if(this.cantidad > this.presupuestoService.restante) {
      this.formularioValido = true;
      this.textoValido = 'La cantidad ingresada es mayor a la cantidad restante.';
      return;
    }

    if(this.nombreGasto === '' || this.cantidad <= 0) {
      this.formularioValido = true;
      this.textoValido = 'Por favor verifica los datos ingresados.';
    } else {
      //crear objeto
      const gasto = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad,
      }

      // enviar obj a los subscritores via Subject
      this.presupuestoService.agregarGasto(gasto)

      // reset formulario


      this.formularioValido = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }

}
