import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "tb_user" })
export class UserEntity {
    @PrimaryGeneratedColumn({ name: "user_id" })
    id: number;

    @Column({ name: "user_first_name" })
    firstName: string;

    @Column({ name: "user_last_name" })
    lastName: string;

    @Column({ name: "user_email" })
    email: string;
}
