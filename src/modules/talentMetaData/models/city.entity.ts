//BT_TD_CIUDAD
import { Table, Column, Model, PrimaryKey, AutoIncrement, BelongsTo } from "sequelize-typescript";
import { Country } from "./country.entity";

@Table({ tableName: "BT_TD_CIUDAD", timestamps: false })
export class City extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  ID_CIUDAD: number;

  @Column
  NO_CIUDAD: string;

  @Column
  ID_PAIS: number;

  //one to one relationship
  @BelongsTo(() => Country, "ID_PAIS")
  country: Country;
}
