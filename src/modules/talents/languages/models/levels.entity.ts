import { Table, Column, Model, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({ tableName: "BT_TD_NIVEL_IDIOMA", timestamps: false })
export class Level extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  ID_NIVEL_IDIOMA: number;

  @Column
  NO_NIVEL: string;
}
