import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.model';

@Module({
    imports: [SequelizeModule.forFeature([User])],
    exports: [SequelizeModule],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}