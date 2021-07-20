import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Ciudad, Departamento } from 'src/app/models/Ciudad.model';
import { Cliente } from 'src/app/models/Cliente.model';
import { CarritoService } from 'src/app/services/carrito.service';
import { CiudadService } from 'src/app/services/ciudad.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public frmDatos: FormGroup;
  public departamentos:Departamento[];
  public ciudades:Ciudad[];
  public aceptaTerminos:boolean = false;
  public spinner:boolean=false;

  public totalCarrito:number = 0;
  public cantidadEnvio:number=0;

  constructor(
    private _ciudadService:CiudadService,
    private _clienteService:ClienteService,
    private _facturaService:FacturaService,
    private _carritoService: CarritoService,
    private _toastr: ToastrService
  ) {
    this.frmDatos = this.newFormGroup();
    this.departamentos = [];
    this.ciudades = [];
    this._carritoService.obtenerTotalCarrito().then((data) => {
      this.totalCarrito = data;
      if (data > 0) {
        this.cantidadEnvio = 7000;
      }
    });
  }

  ngOnInit() {

    this.cargarDepartamentos();
  }

  comprar(){
    this.spinner = true;
    this.frmDatos.get('codCiudad')?.setValue(parseInt(this.frmDatos.get('codCiudad')?.value));
    this.frmDatos.get('codigoPostal')?.setValue(parseInt(this.frmDatos.get('codigoPostal')?.value));
    this._clienteService.crearCliente(this.frmDatos.value).then((data)=>{
      if (!data.flag) {
        this._toastr.error("Ocurrio un error inesperado en la creación de la compra","Error");
        this.spinner=false;
        return;
      }
      this.crearFactura(data.data.codCliente);
    });
  }

  crearFactura(codCliente:number){
    const observaciones = this.obtenerPropiedadFormGroup('observaciones')!.value;
    this._facturaService.crearFactura(codCliente,observaciones,this.totalCarrito+this.cantidadEnvio).then((data)=>{
      if (!data.flag) {
        this._toastr.error("Ocurrio un error inesperado en la creación de la compra","Error");
        this.spinner=false;
        return;
      }
      this.recorrerCarritoCompras(data.data.codFactura);
    });
  }

  async recorrerCarritoCompras(codFactura:number){
    const carritoCompras = await this._carritoService.obtenerCarrito();
    carritoCompras.forEach(async carrito => {
      await this.crearDetalleFactura(codFactura,carrito.producto.codProducto,carrito.cantidad_comprar);
    });
    this.spinner=false;
    this._toastr.success("Se ha realizado la compra de manera correcta, enviaremos a su email la información correspondiente al pago","Correcto");

  }

  crearDetalleFactura(codFactura:number,codProducto:number,cantidad:number){
    this._facturaService.crearDetalleFactura(codFactura,codProducto,cantidad).then((data)=>{
      return;
    })
  }




  cargarDepartamentos(){
    this._ciudadService.cargarDepartamentos().then((data)=>{
      if (!data.flag) {
        return;
      }
      this.departamentos = data.data;
    })
  }

  cargarCiudadPorDepartamento(idDepartamento:number){
    this._ciudadService.cargarCiudadesPorDepartamento(idDepartamento).then((data)=>{
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
      observaciones: new FormControl("")
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
