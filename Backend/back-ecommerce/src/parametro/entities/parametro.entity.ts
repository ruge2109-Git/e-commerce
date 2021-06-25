import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("parametros", { schema: "ecommerce" })
export class Parametros {
  @PrimaryGeneratedColumn({ type: "int", name: "cod_parametros" })
  codParametros: number;

  @Column("varchar", { name: "nom_busqueda", nullable: true, length: 255 })
  nomBusqueda: string | null;

  @Column("varchar", { name: "descripcion", nullable: true, length: 255 })
  descripcion: string | null;

  @Column("varchar", { name: "valor", nullable: true, length: 255 })
  valor: string | null;
}
