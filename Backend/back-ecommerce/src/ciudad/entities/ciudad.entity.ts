import { Cliente } from "src/cliente/entities/cliente.entity";
import { Departamento } from "src/departamento/entities/departamento.entity";
import {Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,PrimaryGeneratedColumn,} from "typeorm";

  @Index("FKciudad895433", ["codDepartamento"], {})
  @Entity("ciudad", { schema: "ecommerce" })
  export class Ciudad {
    @PrimaryGeneratedColumn({ type: "int", name: "cod_ciudad" })
    codCiudad: number;
  
    @Column("int", { name: "cod_departamento" })
    codDepartamento: number;
  
    @Column("varchar", { name: "nom_ciudad", nullable: true, length: 255 })
    nomCiudad: string | null;
  
    @ManyToOne(() => Departamento, (departamento) => departamento.ciudads, {
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
    @JoinColumn([
      { name: "cod_departamento", referencedColumnName: "codDepartamento" },
    ])
    codDepartamento2: Departamento;
  
    @OneToMany(() => Cliente, (cliente) => cliente.codCiudad2)
    clientes: Cliente[];
  }
  