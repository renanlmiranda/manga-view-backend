import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum UserRole {
    VIEWER = "viewer",
    CONTENT_PRODUCER = "content_producer",
    ADMIN = "admin",
    SUPER_ADMIN = "super_admin",
}
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

    @Column({
        name: "user_role",
        type: "enum",
        enum: UserRole,
        default: UserRole.VIEWER,
    })
    role: UserRole;
}
