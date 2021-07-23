
import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MetricaGeneral } from 'src/app/models/admin/Metrica.model';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/states/producto/Producto.model';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.scss']
})
export class InicioAdminComponent implements OnInit {

  @ViewChild("charVentas", { static: false }) charVentas: any;
  public barCharVentas: any;

  @ViewChild("charVisitaVsVenta", { static: false }) charVisitaVsVenta: any;
  public barCharVisitaVsVenta: any;

  public listProductos: Producto[] = [];

  public listMetricas: MetricaGeneral[] = [];

  constructor(private _productoService: ProductoService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.metricasGenerales();
    this.productosMasVendidos();
    setTimeout(() => {
      this.chartPorVentas();
      this.comparacionVisitaVenta();
    }, 100);
  }

  metricasGenerales() {
    this.listMetricas = [
      { icon: 'fas fa-chart-line', descripcion: 'Ventas en el último mes', valorNumero: 35 },
      { icon: 'fas fa-user-tag', descripcion: 'Usuarios registrados', valorNumero: 20 },
      { icon: 'fas fa-user-tag', descripcion: 'Usuarios nuevos', valorNumero: 5 },
      { icon: 'fas fa-wallet', descripcion: 'Un total de $5,000,000.00 de ingresos', valorNumero: -1 },
      { icon: 'fab fa-shopify', descripcion: 'Producto más vendido: Bacardi 151', valorNumero: -1 },
      { icon: 'fas fa-heart', descripcion: 'Mejor producto: Bacardi 151', valorNumero: -1 },
    ]
  }

  chartPorVentas() {
    this.barCharVentas = new Chart(this.charVentas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
          label: 'Ventas por mes',
          data: [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 5],
          backgroundColor: [
            'rgba(102, 120, 246, 0.8)'
          ],
          borderColor: [
            'rgba(102, 120, 246, 0.8)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            align: 'center',
            position: 'bottom'
          }
        }
      }
    });
  }

  productosMasVendidos() {
    this._productoService.obtenerMasVendidos().then((data) => {
      if (!data.flag) {
        return;
      }
      this.listProductos = data.data.slice(0, 8);
    })
  }

  comparacionVisitaVenta() {
    this.barCharVisitaVsVenta = new Chart(this.charVisitaVsVenta.nativeElement, {
      type: 'line',
      data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datasets: [
          {
            label: 'Cantidad de visitas',
            data: [1, 2, 3, 5, 6, 7, 2],
            borderColor:'rgba(102, 120, 246, 0.8)',
            fill:true
          },
          {
            label: 'Cantidad de Ventas',
            data:[10,2,4,6,2,7,9],
            borderColor:'rgba(255, 0, 10, 0.8)',
            fill:true,
            // tension:0.2
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            align: 'center',
            position: 'bottom'
          }
        }
      }
    });
  }

}
