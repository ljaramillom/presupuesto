import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  
  constructor(private presupuestoService: PresupuestoService,
    private router: Router) {
}
  ngOnInit(): void {
    if(this.presupuestoService.presupuesto == 0){
      this.router.navigate(['/ingresar-presupuesto']);
    }
  }

}
