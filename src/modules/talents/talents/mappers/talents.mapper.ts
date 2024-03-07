import { TalentResponse } from "../dtos/talent.dto";
import { Talent } from "../models/talents.entity";

export const mapTalentToEntity = (talent: TalentResponse): Talent => {
  return new Talent({
    ID_TALENTO: talent.id,
    NO_NOMBRE: talent.firstName.trim(),
    AP_APELLIDO_PATERNO: talent.paternalSurname.trim(),
    AP_APELLIDO_MATERNO: talent.maternalSurname.trim(),
    URL_IMAGEN: talent.imageUrl,
    DE_DESCRIPCION: talent.description.trim(),
    ID_PERFIL_TALENTO: talent.talentProfileId,
    ID_TIPO_MONEDA: talent.currencyTypeId,
    NU_MONTO_INICIAL: talent.initialAmount,
    NU_MONTO_FINAL: talent.finalAmount,
    NU_CELULAR: talent.cellphone,
    URL_LINKDN: talent.linkedinUrl.trim(),
    URL_GITHUB: talent.githubUrl.trim(),
    ID_PAIS: talent.countryId,
    ID_CIUDAD: talent.cityId,
    FE_CREACION: talent.createdAt,
  });
};

export const mapTalentToDto = (talent: Talent): TalentResponse => {
  return {
    id: talent.ID_TALENTO,
    firstName: talent.NO_NOMBRE,
    paternalSurname: talent.AP_APELLIDO_PATERNO,
    maternalSurname: talent.AP_APELLIDO_MATERNO,
    imageUrl: talent.URL_IMAGEN?.toString("base64"),
    description: talent.DE_DESCRIPCION,
    talentProfileId: talent.ID_PERFIL_TALENTO,
    currencyTypeId: talent.ID_TIPO_MONEDA,
    initialAmount: talent.NU_MONTO_INICIAL,
    finalAmount: talent.NU_MONTO_FINAL,
    cellphone: talent.NU_CELULAR,
    linkedinUrl: talent.URL_LINKDN,
    githubUrl: talent.URL_GITHUB,
    countryId: talent.ID_PAIS,
    cityId: talent.ID_CIUDAD,
    createdAt: talent.FE_CREACION.toString(),
  };
};
