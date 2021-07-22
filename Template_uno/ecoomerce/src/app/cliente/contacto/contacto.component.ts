import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  public frmDatos: FormGroup;
  public spinner: boolean = false;

  constructor(
    private _contactoService: ContactoService,
    private _toastr: ToastrService
  ) {
    this.frmDatos = this.newFormGroup();

  }

  ngOnInit(): void {
  }

  enviarMensaje() {
    this.spinner = true;
    this._contactoService.enviarMensaje(this.frmDatos.value).then((data) => {
      this.spinner = false;
      if (!data.flag) {
        this._toastr.error("Ocurrio un error inesperado al enviar el mensaje", "Error");
        return;
      }
      this._toastr.success("Se ha enviado el mensaje de manera correcta, por favor este pendiente. La empresa se contactará por correo electrónico.", "Correcto");
      this.frmDatos.reset();
    })
  }

  newFormGroup() {
    return new FormGroup({
      nombres: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      asunto: new FormControl("", [Validators.required]),
      mensaje: new FormControl("", [Validators.required])
    });
  }

  condicionInvalid(xPropiedad: string) {
    if (this.obtenerPropiedadFormGroup(xPropiedad)!.invalid && (this.obtenerPropiedadFormGroup(xPropiedad)!.dirty || this.obtenerPropiedadFormGroup(xPropiedad)!.touched)) {
      return true;
    }
    return false;
  }

  obtenerPropiedadFormGroup(xPropiedad: string) {
    return this.frmDatos.get(xPropiedad);
  }

}
