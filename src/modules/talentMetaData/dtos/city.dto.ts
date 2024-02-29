import { IsString, IsInt, IsOptional } from "class-validator";

export class CityDto {
  @IsInt()
  @IsOptional()
  id?: number;

  @IsString()
  name: string;

  @IsInt()
  countryId: number;
}
