import { IBaseRepository } from "../../database/repository/IBase.repository";
import { User } from "../../domain/user.domain";
import { IUseCase } from "../iBase.useCase";
import { ICreateUserDTO } from "./dto/user.dto";

export default class CreateUserUseCase
    implements IUseCase<ICreateUserDTO, Promise<boolean>>
{
    private userRepository: IBaseRepository<User>;

    constructor(userRepository: IBaseRepository<User>) {
        this.userRepository = userRepository;
    }

    async execute(request: ICreateUserDTO): Promise<boolean> {
        return true;
    }
}
