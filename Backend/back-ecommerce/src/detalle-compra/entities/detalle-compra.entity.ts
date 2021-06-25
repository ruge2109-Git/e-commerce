import { Cliente } from "src/cliente/entities/cliente.entity";
import { DetalleFactura } from "src/detalle-factura/entities/detalle-factura.entity";
import { Producto } from "src/producto/entities/producto.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, } from "typeorm";

@Index("FKdetalle_co640807", ["codProducto"], {})
@Index("FKdetalle_co188748", ["codCliente"], {})
@Entity("detalle_compra", { schema: "ecommerce" })
export class DetalleCompra {
    @PrimaryGeneratedColumn({ type: "int", name: "cod_detalle_compra" })
    codDetalleCompra: number;

    @Column("int", { name: "cod_producto" })
    codProducto: number;

    @Column("int", { name: "cod_cliente" })
    codCliente: number;

    @Column("int", { name: "cantidad", nullable: true })
    cantidad: number | null;

    @ManyToOne(() => Cliente, (cliente) => cliente.detalleCompras, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "cod_cliente", referencedColumnName: "codCliente" }])
    codCliente2: Cliente;

    @ManyToOne(() => Producto, (producto) => producto.detalleCompras, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "cod_producto", referencedColumnName: "codProducto" }])
    codProducto2: Producto;

    @OneToMany(
        () => DetalleFactura,
        (detalleFactura) => detalleFactura.codDetalleCompra2
    )
    detalleFacturas: DetalleFactura[];
}
