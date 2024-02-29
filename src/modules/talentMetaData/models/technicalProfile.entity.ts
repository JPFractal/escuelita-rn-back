import { Table, Column, Model, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({ tableName: "BT_TD_PERFIL_TALENTO", timestamps: false })
export class TechnicalProfile extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  ID_PERFIL_TALENTO: number;

  @Column
  NO_PERFIL_TALENTO: string;
}
