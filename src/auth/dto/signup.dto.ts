import { IsEmail, IsEnum, IsString } from 'class-validator';
import { Role } from '../../users/enums/role.enum';

export class SignupDto {
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  @IsEnum(Role)
  role!: Role;
}