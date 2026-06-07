import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  private users: User[] = [];

  signup(signupDto: SignupDto) {
    const user: User = {
      id: Date.now(),
      email: signupDto.email,
      password: signupDto.password,
      role: signupDto.role,
    };

    this.users.push(user);

    return {
      message: 'User Registered Successfully',
      user,
    };
  }

  login(loginDto: LoginDto) {
    const user = this.users.find(
      (u) => u.email === loginDto.email,
    );

    if (!user) {
      return {
        message: 'User Not Found',
      };
    }

    return {
      message: 'Login Successful',
      user,
    };
  }
}