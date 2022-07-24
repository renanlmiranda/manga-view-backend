import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import { BookEntity } from "./book.entity";

@Entity({ name: "tb_chapter" })
export class ChapterEntity {
    @PrimaryGeneratedColumn({ name: "book_id" })
    id: number;

    @Column({ name: "chapter_name" })
    name: string;

    @ManyToOne(() => BookEntity, (book) => book.chapters)
    book: BookEntity;
}
