import { Controller, Get, Post, Body, Patch, Param, Delete, Header, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { USER_KEY } from 'src/config/guard/auth.guard';
import { ROLES_KEY, Roles } from 'src/config/guard/role.decorator';
import { Role } from '../role/role';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get("/users")
  findAll() {
    return this.userService.findAll();
  }

  @Get("/user/me")
  getUserDetail(@Headers(USER_KEY) user: string) {
    console.log(user)
    return this.userService.findOne(user)
  }

  @Get('/user/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch('/user/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete('/user/:id')
  remove(@Param('id') id: string) {
    return this.userService.removeUser(id);
  }
}
