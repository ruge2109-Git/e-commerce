import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Factura } from "src/factura/entities/factura.entity";
import { Producto } from "src/producto/entities/producto.entity";

@Index("FKdetalle_fa626029", ["codFactura"], {})
@Index("FKdetalle_producto", ["codProducto"], {})
@Entity("detalle_factura", { schema: "ecommerce" })
export class DetalleFactura {
    @PrimaryGeneratedColumn({ type: "int", name: "cod_detalle_factura" })
    codDetalleFactura: number;

    @Column("int", { name: "cod_factura" })
    codFactura: number;

    @Column("int", { name: "cod_producto" })
    codProducto: number;

    @Column("int", { name: "cantidad" })
    cantidad: number;

    @ManyToOne(() => Factura, (factura) => factura.detalleFacturas, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "cod_factura", referencedColumnName: "codFactura" }])
    codFactura2: Factura;

    @ManyToOne(() => Producto, (producto) => producto.detalleFacturas, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "cod_producto", referencedColumnName: "codProducto" }])
    codProducto2: Producto;
}
