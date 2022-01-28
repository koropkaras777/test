import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { Op } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async findAllByParameter(parameter: string): Promise<User[]> {
    console.log(parameter);

    const result = await this.userModel.findAll({
      where: {
        [Op.or]: [
          { username: parameter },
          { name: parameter },
          { email: parameter },
          { phone: parameter },
        ]
      }
    });

    return result;
  }

  async create(user: User) : Promise<User> {
    return this.userModel.create(user);
  }

  async update(id: string, newUser: User) : Promise<User> {
    await this.userModel.update(newUser, {
      where: {
        id,
      },
    });

    const user = this.findOne(id);
    return user;
  }

  async remove(id: string): Promise<User> {
    const user = await this.findOne(id);
    await this.userModel.destroy({
      where: {
        id,
      },
    });
    return user;
  }
}