import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public frmDatos: FormGroup;

  constructor() {
    this.frmDatos = this.newFormGroup();
  }

  ngOnInit(): void {
  }

  comprar(){

  }

  newFormGroup() {
    return new FormGroup({
      primerNombre: new FormControl("", [Validators.required]),
      segundoNombre: new FormControl(""),
      primerApellido: new FormControl("",[Validators.required]),
      segundoApellido: new FormControl("",[Validators.required]),
      ciudad: new FormControl("",[Validators.required]),
      direccion: new FormControl("",[Validators.required]),
      codigoPostal: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required]),
      telefono: new FormControl("",[Validators.required]),
    });
  }

  condicionInvalid(xPropiedad:string) {
    if (this.obtenerPropiedadFormGroup(xPropiedad)!.invalid && (this.obtenerPropiedadFormGroup(xPropiedad)!.dirty || this.obtenerPropiedadFormGroup(xPropiedad)!.touched)) {
      return true;
    }
    return false;
  }

  obtenerPropiedadFormGroup(xPropiedad:string) {
    return this.frmDatos.get(xPropiedad)
  }

}
