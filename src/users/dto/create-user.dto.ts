import { IsString, IsEnum, IsNumber, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Valid role required',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';

  @IsNumber()
  age: number;
}
