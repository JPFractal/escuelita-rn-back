import { IsString, IsInt, IsOptional, IsUrl, IsDate, Length, Max, Min } from "class-validator";

export class TalentDTO {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  @Length(0, 100)
  firstName: string;

  @IsString()
  @Length(0, 100)
  paternalSurname: string;

  @IsString()
  @Length(0, 100)
  maternalSurname: string;

  @IsUrl()
  @Length(0, 100)
  imageUrl: string;

  @IsString()
  @Length(0, 100)
  description: string;

  @IsInt()
  talentProfileId: number;

  @IsInt()
  currencyTypeId: number;

  @IsInt()
  @Min(0)
  initialAmount: number;

  @IsInt()
  @Min(0)
  finalAmount: number;

  @IsString()
  @Length(0, 100)
  cellphone: string;

  @IsUrl()
  @Length(0, 100)
  linkedinUrl: string;

  @IsUrl()
  @Length(0, 100)
  githubUrl: string;

  @IsInt()
  countryId: number;

  @IsInt()
  cityId: number;

  @IsDate()
  createdAt: Date;
}
