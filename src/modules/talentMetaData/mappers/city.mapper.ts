import { CityDto } from "../dtos/city.dto";
import { City } from "../models/city.entity";

export const mapCityToDto = (city: City): CityDto => ({
  id: city.ID_CIUDAD,
  name: city.NO_CIUDAD,
  countryId: city.ID_PAIS,
});
