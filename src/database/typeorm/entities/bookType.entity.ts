import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";

@Entity({ name: "tb_book_type" })
export class BookTypeEntity {
    @PrimaryColumn({ name: "book_type_id" })
    id: number;

    @Column({ name: "book_type_name" })
    name: string;
}
