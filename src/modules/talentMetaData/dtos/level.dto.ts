
import { IsString, IsInt, IsOptional } from "class-validator";

export class LevelDto {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  name: string;
}
