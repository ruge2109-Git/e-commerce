import { Categoria } from "src/categorias/entities/categoria.entity";
import { DetalleFactura } from "src/detalle-factura/entities/detalle-factura.entity";
import { Testimonio } from "src/testimonio/entities/testimonio.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Index("FKproducto706097", ["codCategoria"], {})
@Entity("producto", { schema: "ecommerce" })
export class Producto {
  @PrimaryGeneratedColumn({ type: "int", name: "cod_producto" })
  codProducto: number;

  @Column("int", { name: "cod_categoria" })
  codCategoria: number;

  @Column("varchar", { name: "nombre", nullable: true, length: 255 })
  nombre: string | null;

  @Column("varchar", { name: "descripcion", nullable: true, length: 255 })
  descripcion: string | null;

  @Column("decimal", {
    name: "precio",
    nullable: true,
    precision: 19,
    scale: 0,
  })
  precio: string | null;

  @Column("int", { name: "cantidad_inventario", nullable: true })
  cantidadInventario: number | null;

  @Column("varchar", { name: "url_imagen", nullable: true, length: 255 })
  urlImagen: string | null;

  @OneToMany(
    () => DetalleFactura,
    (detalleFactura) => detalleFactura.codProducto2
  )
  detalleFacturas: DetalleFactura[];

  @ManyToOne(() => Categoria, (categoria) => categoria.productos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
    eager:true
  })
  @JoinColumn([{ name: "cod_categoria", referencedColumnName: "codCategoria" }])
  codCategoria2: Categoria;

  @OneToMany(() => Testimonio, (testimonio) => testimonio.codProducto2)
  testimonios: Testimonio[];
}
