import { Cliente } from "src/cliente/entities/cliente.entity";
import { DetalleFactura } from "src/detalle-factura/entities/detalle-factura.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Index("FKFactura_cliente", ["codCliente"], {})
@Entity("factura", { schema: "ecommerce" })
export class Factura {
  @PrimaryGeneratedColumn({ type: "int", name: "cod_factura" })
  codFactura: number;

  @Column("int", { name: "cod_cliente" })
  codCliente: number;

  @Column("varchar", { name: "referencia", nullable: true })
  referencia: string | null;

  @Column("varchar", { name: "observaciones", nullable: true })
  observaciones: string | null;

  @Column("int", { name: "precio_total", nullable: true })
  precioTotal: number | null;

  @OneToMany(
    () => DetalleFactura,
    (detalleFactura) => detalleFactura.codFactura2
  )
  detalleFacturas: DetalleFactura[];

  @ManyToOne(() => Cliente, (cliente) => cliente.facturas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "cod_cliente", referencedColumnName: "codCliente" }])
  codCliente2: Cliente;
}
