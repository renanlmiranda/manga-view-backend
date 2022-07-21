import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "tb_book" })
export class BookEntity {
    @PrimaryGeneratedColumn({ name: "book_id" })
    id: number;

    @Column({ name: "book_name" })
    name: string;

    @Column({ name: "book_description" })
    description: string;
}
