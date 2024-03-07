import { IsString, IsInt, IsOptional, IsUrl, IsDate, Length, Max, Min, IsNotEmpty, isString, IsBase64 } from "class-validator";
import { NotNull } from "sequelize-typescript";

export class TalentResponse {
  id?: number;
  firstName: string;
  paternalSurname: string;
  maternalSurname: string;
  imageUrl: string;
  description: string;
  talentProfileId: number;
  currencyTypeId: number;
  initialAmount: number;
  finalAmount: number;
  cellphone: string;
  linkedinUrl: string;
  githubUrl: string;
  countryId: number;
  cityId: number;
  createdAt?: string;
}

export class RegisterTalentDTO {
  @IsNotEmpty()
  @IsString()
  @Length(0, 100)
  firstName: string;

  @IsString()
  @Length(0, 100)
  @IsNotEmpty()
  paternalSurname: string;

  @IsString()
  @Length(0, 100)
  @IsNotEmpty()
  maternalSurname: string;

  @IsNotEmpty()
  @IsBase64()
  imageUrl: string;

  @IsNotEmpty()
  @IsString()
  @Length(0, 100)
  description: string;

  @IsNotEmpty()
  @IsInt()
  talentProfileId: number;

  @IsNotEmpty()
  @IsInt()
  currencyTypeId: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  initialAmount: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  finalAmount: number;

  @IsNotEmpty()
  @IsString()
  @Length(0, 100)
  cellphone: string;

  @IsNotEmpty()
  @IsUrl()
  @Length(0, 100)
  linkedinUrl: string;

  @IsNotEmpty()
  @IsUrl()
  @Length(0, 100)
  githubUrl: string;

  @IsNotEmpty()
  @IsInt()
  countryId: number;

  @IsNotEmpty()
  @IsInt()
  cityId: number;
}

export class UpdateTalentDTO {
  @IsOptional()
  @IsString()
  @Length(0, 100)
  firstName: string;

  @IsOptional()
  @IsString()
  @Length(0, 100)
  paternalSurname: string;

  @IsOptional()
  @IsString()
  @Length(0, 100)
  maternalSurname: string;

  @IsOptional()
  @IsUrl()
  @IsBase64()
  imageUrl: string;

  @IsOptional()
  @IsString()
  @Length(0, 100)
  description: string;

  @IsOptional()
  @IsInt()
  talentProfileId: number;

  @IsOptional()
  @IsInt()
  currencyTypeId: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  initialAmount: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  finalAmount: number;

  @IsOptional()
  @IsString()
  @Length(0, 100)
  cellphone: string;

  @IsOptional()
  @IsUrl()
  @Length(0, 100)
  linkedinUrl: string;

  @IsOptional()
  @IsUrl()
  @Length(0, 100)
  githubUrl: string;

  @IsOptional()
  @IsInt()
  countryId: number;

  @IsOptional()
  @IsInt()
  cityId: number;
}
