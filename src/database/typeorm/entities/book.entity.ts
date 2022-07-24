import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

import { ChapterEntity } from "./chapter.entity";

@Entity({ name: "tb_book" })
export class BookEntity {
    @PrimaryGeneratedColumn({ name: "book_id" })
    id: number;

    @Column({ name: "book_name" })
    name: string;

    @Column({ name: "book_description" })
    description: string;

    @OneToMany(() => ChapterEntity, (chapter) => chapter.book)
    chapters: ChapterEntity[];
}
