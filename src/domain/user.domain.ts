interface IUserProps {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    password: string;
}

export class User {
    private props: IUserProps;
    private id?: number;

    get userId(): number | undefined {
        return this.id;
    }

    get email(): string {
        return this.props.email;
    }

    get firstName(): string {
        return this.props.firstName;
    }

    get lastName(): string {
        return this.props.lastName;
    }

    get role(): string {
        return this.props.role;
    }

    get password(): string {
        return this.props.password;
    }

    private constructor(props: IUserProps, id?: number) {
        this.props = props;
        this.id = id;
    }

    public static create(props: IUserProps, id?: number): User {
        const user = new User(
            {
                ...props,
            },
            id
        );

        return user;
    }
}
