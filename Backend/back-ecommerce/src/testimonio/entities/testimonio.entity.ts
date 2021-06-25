import { Producto } from "src/producto/entities/producto.entity";
import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

@Index("FKtestimonio872084", ["codProducto"], {})
@Entity("testimonio", { schema: "ecommerce" })
export class Testimonio {
    @PrimaryGeneratedColumn({ type: "int", name: "cod_testimonio" })
    codTestimonio: number;

    @Column("int", { name: "cod_producto" })
    codProducto: number;

    @Column("varchar", { name: "nombre", nullable: true, length: 255 })
    nombre: string | null;

    @Column("varchar", { name: "cargo", nullable: true, length: 255 })
    cargo: string | null;

    @Column("varchar", { name: "url_imagen", nullable: true, length: 255 })
    urlImagen: string | null;

    @Column("varchar", { name: "testimonio", nullable: true, length: 255 })
    testimonio: string | null;

    @ManyToOne(() => Producto, (producto) => producto.testimonios, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "cod_producto", referencedColumnName: "codProducto" }])
    codProducto2: Producto;
}
