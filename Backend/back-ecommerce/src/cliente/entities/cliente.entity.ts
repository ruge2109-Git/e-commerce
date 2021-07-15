import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Factura } from "src/factura/entities/factura.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Index("FKcliente965220", ["codCiudad"], {})
@Entity("cliente", { schema: "ecommerce" })
export class Cliente {
  @PrimaryGeneratedColumn({ type: "int", name: "cod_cliente" })
  codCliente: number;

  @Column("varchar", { name: "primer_nombre", nullable: true, length: 255 })
  primerNombre: string | null;

  @Column("varchar", { name: "segundo_nombre", nullable: true, length: 255 })
  segundoNombre: string | null;

  @Column("varchar", { name: "primer_apellido", nullable: true, length: 255 })
  primerApellido: string | null;

  @Column("varchar", { name: "segundo_apellido", nullable: true, length: 255 })
  segundoApellido: string | null;

  @Column("int", { name: "cod_ciudad" })
  codCiudad: number;

  @Column("varchar", { name: "direccion", nullable: true, length: 255 })
  direccion: string | null;

  @Column("int", { name: "codigo_postal", nullable: true })
  codigoPostal: number | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("varchar", { name: "telefono", nullable: true, length: 255 })
  telefono: string | null;

  @ManyToOne(() => Ciudad, (ciudad) => ciudad.clientes, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "cod_ciudad", referencedColumnName: "codCiudad" }])
  codCiudad2: Ciudad;

  @OneToMany(() => Factura, (factura) => factura.codCliente2)
  facturas: Factura[];
}
