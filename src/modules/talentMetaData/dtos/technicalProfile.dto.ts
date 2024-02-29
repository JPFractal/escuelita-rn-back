import { IsString, IsInt, IsOptional } from "class-validator";

export class TechnicalProfileDto {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  name: string;
}