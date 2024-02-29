import { TechnicalProfileDto } from "../dtos/technicalProfile.dto";
import { TechnicalProfile } from "../models/technicalProfile.entity";

export const mapTechnicalProfileToDto = (technicalProfile: TechnicalProfile): TechnicalProfileDto => ({
  id: technicalProfile.ID_PERFIL_TALENTO,
  name: technicalProfile.NO_PERFIL_TALENTO,
});
