import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { User } from './interface/user.interface';

@Controller('user')
export class UserController {

    constructor( private readonly userRep : UserService) {}

    @Post('/create')
    async createUser (
        @Body() createUser : CreateUserDTO
    ) : Promise<User> { 
        return await this.userRep.createUser(createUser);
    }

    @Get('/all')
    async getAllUsers() : Promise<User[]>{
        return await this.userRep.getAllUsers();
    }
}
