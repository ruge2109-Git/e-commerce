import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestimonioService } from 'src/app/services/testimonio.service';

@Component({
  selector: 'app-formulario-resenia',
  templateUrl: './formulario-resenia.component.html',
  styleUrls: ['./formulario-resenia.component.scss']
})
export class FormularioReseniaComponent implements OnInit {

  public frmDatos: FormGroup;
  @Input() codProducto!:number;
  @Output() cargarTestimonios = new EventEmitter<boolean>();

  constructor(private testimonioService:TestimonioService) {

    this.frmDatos = new FormGroup({
      nombre: new FormControl("", [Validators.required]),
      cargo: new FormControl(""),
      urlImagen: new FormControl(""),
      testimonio: new FormControl("", [Validators.required]),
      puntuacion: new FormControl("", [Validators.required]),
      codProducto: new FormControl(this.codProducto)
    });
  }

  ngOnInit(): void {
  }

  obtenerPropiedadFormGroup(xPropiedad:string) {
    return this.frmDatos.get(xPropiedad)
  }

  enviarTestimonio(){

    this.frmDatos.controls['codProducto'].setValue(this.codProducto);
    this.testimonioService.enviarTestimonio(this.frmDatos.value).then(
      (data)=>{
        if (data.flag) {
          this.cargarTestimonios.emit(true);
          this.frmDatos.reset();
        }
      }
    )
  }
}
