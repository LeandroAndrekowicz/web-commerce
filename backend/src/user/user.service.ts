import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { UserEntity } from './interface/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor (
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async createUser(createUserDto : CreateUserDTO) : Promise<UserEntity>{

        const salt = 10;

        const passwordHash = await hash(createUserDto.password, salt);

        return this.userRepository.save({
            ...createUserDto,
            typeUser: 1,
            password: passwordHash,
        })
    }

    async getAllUsers() : Promise<UserEntity[]> {
        return this.userRepository.find();
    }
}
