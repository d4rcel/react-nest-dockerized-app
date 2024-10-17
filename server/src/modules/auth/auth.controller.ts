import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from '../../core/guards/localAuth.guard';
import { IUser } from '../users/users.interfaces';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() user: IUser) {
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() user: IUser) {
    return this.authService.register(user);
  }
}
