export interface Factura{
  codFactura:number;
  codCliente:number;
  precioTotal:number;
}


export interface DetalleFactura {
  codDetalleFactura: number;
  codFactura: number;
  codProducto: number;
  cantidad: number;
}
