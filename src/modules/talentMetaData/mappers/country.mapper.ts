import { CountryDto } from "../dtos/country.dto";
import { Country } from "../models/country.entity";

export const mapCountryToDto = (country: Country): CountryDto => ({
  id: country.ID_PAIS,
  name: country.NO_PAIS,
});
