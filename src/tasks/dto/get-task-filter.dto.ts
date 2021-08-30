import { IsEnum, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class GetTaskFilterDto {
  @IsOptional()
  @MinLength(3)
  @IsNotEmpty()
  search?: string;
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
