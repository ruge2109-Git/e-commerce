import { Producto } from "src/producto/entities/producto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Categoria {
    @PrimaryGeneratedColumn({ type: "int", name: "cod_categoria" })
    codCategoria: number;

    @Column("varchar", { name: "nombre", nullable: true, length: 255 })
    nombre: string | null;

    @Column("varchar", { name: "url_imagen", nullable: true, length: 255 })
    urlImagen: string | null;

    // @OneToMany(() => Producto, (producto) => producto.codCategoria2)
    // productos: Producto[];
}
