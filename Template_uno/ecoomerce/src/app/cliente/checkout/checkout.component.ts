import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ciudad, Departamento } from 'src/app/models/Ciudad.model';
import { Cliente } from 'src/app/models/Cliente.model';
import { CiudadService } from 'src/app/services/ciudad.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public frmDatos: FormGroup;
  public departamentos:Departamento[];
  public ciudades:Ciudad[];

  constructor(
    private ciudadService:CiudadService,
    private clienteService:ClienteService
  ) {
    this.frmDatos = this.newFormGroup();
    this.departamentos = [];
    this.ciudades = [];
  }

  ngOnInit(): void {
    this.cargarDepartamentos();
  }

  comprar(){
    this.frmDatos.get('codCiudad')?.setValue(parseInt(this.frmDatos.get('codCiudad')?.value));
    this.frmDatos.get('codigoPostal')?.setValue(parseInt(this.frmDatos.get('codigoPostal')?.value));
    this.clienteService.crearCliente(this.frmDatos.value).then((data)=>{
      console.log(data);
    });
  }

  cargarDepartamentos(){
    this.ciudadService.cargarDepartamentos().then((data)=>{
      if (!data.flag) {
        return;
      }
      this.departamentos = data.data;
    })
  }

  cargarCiudadPorDepartamento(idDepartamento:number){
    this.ciudadService.cargarCiudadesPorDepartamento(idDepartamento).then((data)=>{
      if (!data.flag) {
        return;
      }
      this.ciudades = data.data;
    })
  }

  newFormGroup() {
    return new FormGroup({
      primerNombre: new FormControl("", [Validators.required]),
      segundoNombre: new FormControl(""),
      primerApellido: new FormControl("",[Validators.required]),
      segundoApellido: new FormControl("",[Validators.required]),
      departamento: new FormControl("",[Validators.required]),
      codCiudad: new FormControl("",[Validators.required]),
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
    return this.frmDatos.get(xPropiedad);
  }

}
