import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './interface/user.entity';

@Controller('user')
export class UserController {

    constructor( private readonly userRep : UserService) {}

    @Post('/create')
    async createUser (
        @Body() createUser : CreateUserDTO
    ) : Promise<UserEntity> { 
        return await this.userRep.createUser(createUser);
    }

    @Get('/all')
    async getAllUsers() : Promise<UserEntity[]>{
        return await this.userRep.getAllUsers();
    }
}
