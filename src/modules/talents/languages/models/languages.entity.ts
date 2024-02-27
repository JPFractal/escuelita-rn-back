import { Table, Column, Model, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({ tableName: "BT_TM_IDIOMA", timestamps: false })
export class Language extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  ID_IDIOMA: number;

  @Column
  NO_IDIOMA: string;
}
