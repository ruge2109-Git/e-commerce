import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("authjwt", { schema: "ecommerce" })
export class Autenticacion {
    @PrimaryGeneratedColumn({ type: "int", name: "cod_authjwt" })
    codAuthjwt: number;

    @Column("varchar", { name: "username", length: 255 })
    username: string;

    @Column("varchar", { name: "password", length: 255 })
    password: string;
}
