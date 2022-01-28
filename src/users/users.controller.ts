import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: User) : Promise<User> {
    return this.usersService.create(user);
  }

  @Get()
  findAll() : Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':parameter')
  @ApiParam({ name: 'parameter' })
  findAllByParameter(@Param() params) : Promise<User[]> {
    return this.usersService.findAllByParameter(params.parameter);
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  findOne(@Param() params) : Promise<User> {
    return this.usersService.findOne(params.id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id' })
  update(@Param() params, @Body() user: User) : Promise<User> {
    return this.usersService.update(params.id, user);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  remove(@Param() params) : Promise<User> {
    return this.usersService.remove(params.id);
  }
}
