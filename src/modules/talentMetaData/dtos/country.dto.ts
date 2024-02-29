import { IsString, IsInt, IsOptional } from "class-validator";

export class CountryDto {
  @IsInt()
  id?: number;

  @IsString()
  name: string;
}
