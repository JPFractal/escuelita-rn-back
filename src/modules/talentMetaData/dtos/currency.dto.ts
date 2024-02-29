import { IsString, IsInt, IsOptional } from "class-validator";

export class CurrencyDto {
  @IsInt()
  @IsOptional()
  id?: number;

  @IsString()
  name: string;
}
