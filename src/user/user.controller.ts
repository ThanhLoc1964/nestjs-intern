import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('hello')
  getHello(): string {
    return 'Hello World!';
  }

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto): User {
    return this.userService.createUser(createUserDto);
  }

  @Get('get-users')
  getAllUsers(): User[] {
    return this.userService.getAllUsers();
  }
}
