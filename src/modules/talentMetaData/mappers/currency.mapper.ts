import { CurrencyDto } from "../dtos/currency.dto";
import { Currency } from "../models/currency.entity";

export const mapCurrencyToDto = (currency: Currency): CurrencyDto => ({
  id: currency.ID_TIPO_MONEDA,
  name: currency.NO_TIPO_MONEDA,
});
