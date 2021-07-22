import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("contacto", { schema: "ecommerce" })
export class Contacto {
  @PrimaryGeneratedColumn({ type: "int", name: "cod_contacto" })
  codContacto: number;

  @Column("varchar", { name: "nombres", nullable: true, length: 255 })
  nombres: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("varchar", { name: "asunto", nullable: true, length: 255 })
  asunto: string | null;

  @Column("varchar", { name: "mensaje", nullable: true, length: 255 })
  mensaje: string | null;

  @Column("date", { name: "fecha", nullable: true })
  fecha: Date | null;
}
