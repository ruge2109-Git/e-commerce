import { DetalleCompra } from "src/detalle-compra/entities/detalle-compra.entity";
import { Factura } from "src/factura/entities/factura.entity";
import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";


@Index("FKdetalle_fa235067", ["codDetalleCompra"], {})
@Index("FKdetalle_fa626029", ["codFactura"], {})
@Entity("detalle_factura", { schema: "ecommerce" })
export class DetalleFactura {
    @PrimaryGeneratedColumn({ type: "int", name: "cod_detalle_factura" })
    codDetalleFactura: number;

    @Column("int", { name: "cod_detalle_compra" })
    codDetalleCompra: number;

    @Column("int", { name: "cod_factura" })
    codFactura: number;

    @ManyToOne(
        () => DetalleCompra,
        (detalleCompra) => detalleCompra.detalleFacturas,
        { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
    )
    @JoinColumn([
        { name: "cod_detalle_compra", referencedColumnName: "codDetalleCompra" },
    ])
    codDetalleCompra2: DetalleCompra;

    @ManyToOne(() => Factura, (factura) => factura.detalleFacturas, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "cod_factura", referencedColumnName: "codFactura" }])
    codFactura2: Factura;
}
