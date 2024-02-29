import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany } from "sequelize-typescript";
import { City } from "./city.entity";
@Table({ tableName: "BT_TD_PAIS", timestamps: false })
export class Country extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  ID_PAIS: number;

  @Column
  NO_PAIS: string;

  @HasMany(() => City, "ID_PAIS")
  cities: City[];
}
