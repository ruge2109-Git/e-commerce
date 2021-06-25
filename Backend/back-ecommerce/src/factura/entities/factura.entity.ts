import { DetalleFactura } from "src/detalle-factura/entities/detalle-factura.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("factura", { schema: "ecommerce" })
export class Factura {
  @PrimaryGeneratedColumn({ type: "int", name: "cod_factura" })
  codFactura: number;

  @Column("int", { name: "referencia", nullable: true })
  referencia: number | null;

  @Column("int", { name: "observaciones", nullable: true })
  observaciones: number | null;

  @Column("int", { name: "precio_total", nullable: true })
  precioTotal: number | null;

  @OneToMany(
    () => DetalleFactura,
    (detalleFactura) => detalleFactura.codFactura2
  )
  detalleFacturas: DetalleFactura[];
}
