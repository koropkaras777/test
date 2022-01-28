import { Column, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { Exclude } from 'class-transformer';

@Table
export class User extends Model<User> {
  @Column
  @ApiProperty()
  @Length(4, 50)
  username: string;

  @Column
  @ApiProperty()
  @IsNotEmpty()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column
  @ApiProperty()
  @Length(4, 50)
  name: string;

  @Column
  @ApiProperty()
  @IsEmail()
  email: string;

  @Column
  @Length(9, 16)
  @ApiProperty()
  phone: string;
}