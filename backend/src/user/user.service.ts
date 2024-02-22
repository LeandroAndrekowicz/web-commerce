import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { User } from './interface/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    
    private users : User[] = [];

    async createUser(createUserDto : CreateUserDTO) : Promise<User>{

        const salt = 10;

        const passwordHash = await hash(createUserDto.password, salt);

        const users : User= {
            ...createUserDto,
            id: this.users.length + 1,
            password: passwordHash,
        }

        this.users.push(users);

        return (users)
    }

    async getAllUsers() : Promise<User[]> {
        return this.users;
    }
}
