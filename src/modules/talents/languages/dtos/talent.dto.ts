import { IsString, IsInt, IsOptional } from "class-validator";

export class LanguageDto {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  name: string;
}
