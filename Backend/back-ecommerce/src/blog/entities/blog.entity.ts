import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("blog", { schema: "ecommerce" })
export class Blog {

    @PrimaryGeneratedColumn({ type: "int", name: "cod_blog" })
    codBlog: number;

    @Column("date", { name: "fecha", nullable: true })
    fecha: Date | null;

    @Column("varchar", { name: "titulo", nullable: true, length: 255 })
    titulo: string | null;

    @Column("varchar", { name: "descripcion", nullable: true, length: 255 })
    descripcion: string | null;

    @Column("varchar", { name: "url_imagen", nullable: true, length: 255 })
    urlImagen: string | null;
}
