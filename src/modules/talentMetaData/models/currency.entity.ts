//BT_TD_TIPO_MONEDA
import { Table, Column, Model, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({ tableName: "BT_TD_TIPO_MONEDA", timestamps: false })
export class Currency extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  ID_TIPO_MONEDA: number;

  @Column
  NO_TIPO_MONEDA: string;
}
