import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateTaskDto {
  @MinLength(5)
  @IsNotEmpty()
  title: string;
  @MinLength(10)
  @IsNotEmpty()
  description: string;
}
