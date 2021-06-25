import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("departamento", { schema: "ecommerce" })
export class Departamento {
  @PrimaryGeneratedColumn({ type: "int", name: "cod_departamento" })
  codDepartamento: number;

  @Column("varchar", { name: "nombre", nullable: true, length: 255 })
  nombre: string | null;

  @OneToMany(() => Ciudad, (ciudad) => ciudad.codDepartamento2)
  ciudads: Ciudad[];
}
