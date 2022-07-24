import { Repository } from "typeorm";

import { User } from "../../../domain/user.domain";
import { AppDataSource } from "../../typeorm/config/ormConfig";
import { UserEntity } from "../../typeorm/entities/user.entity";
import { IBaseRepository } from "../IBase.repository";

export default class UserRepository implements IBaseRepository<User> {
    private ormRepository: Repository<UserEntity>;

    constructor() {
        this.ormRepository = AppDataSource.getRepository(UserEntity);
    }

    async save(user: User): Promise<void> {
        await this.ormRepository.save({ ...user });
    }

    async exists(email: string): Promise<boolean> {
        const exists = await this.ormRepository.findOneBy({ email });
        return !exists;
    }
}
