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
        const userDomain = User.create(request);
        const userAlreadyExists = await this.userRepository.exists(
            userDomain.email
        );

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        try {
            await this.userRepository.save(userDomain);
            return true;
        } catch (error) {
            throw new Error(`Error${error}`);
        }
    }
}
