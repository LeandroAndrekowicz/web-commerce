import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './interface/user.entity';

@Module({
  controllers: [UserController],
  exports: [UserModule],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([UserEntity])]
})
export class UserModule {}
