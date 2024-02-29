import { Role } from "src/types/role.enum";

import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Talent } from "../models/talents.entity";
import { InjectModel } from "@nestjs/sequelize";
import { mapTalentToDto, mapTalentToEntity } from "../mappers/talents.mapper";
import { RegisterTalentDTO, TalentResponse } from "../dtos/talent.dto";

@Injectable()
export class TalentsService {
  constructor(
    @InjectModel(Talent)
    private talentsRepository: typeof Talent,
  ) {}

  async findAll(): Promise<TalentResponse[]> {
    const talents = await this.talentsRepository.findAll<Talent>();
    const res: TalentResponse[] = talents.map(mapTalentToDto);
    return res;
  }

  async registerTalent(talent: RegisterTalentDTO): Promise<TalentResponse> {
    const talentWithSameFullName = await this.isAntoherTalentWithFullName(talent);

    if (talentWithSameFullName) {
      throw new HttpException("Another talent with the same full name already exists", HttpStatus.BAD_REQUEST);
    }

    const newTalent = mapTalentToEntity(talent);

    const talentRegistered = await newTalent.save();

    const response: TalentResponse = mapTalentToDto(talentRegistered);

    return response;
  }

  private isAntoherTalentWithFullName = async (talent: RegisterTalentDTO): Promise<boolean> => {
    const talentAux = await this.talentsRepository.findOne<Talent>({
      where: { NO_NOMBRE: talent.firstName },
      attributes: ["NO_NOMBRE", "AP_APELLIDO_PATERNO", "AP_APELLIDO_MATERNO"],
    });
    const fullName = talentAux.NO_NOMBRE?.trim() + talentAux.AP_APELLIDO_PATERNO?.trim() + talentAux.AP_APELLIDO_MATERNO?.trim();
    return fullName === talent.firstName?.trim() + talent.paternalSurname?.trim() + talent.maternalSurname.trim();
  };
}
