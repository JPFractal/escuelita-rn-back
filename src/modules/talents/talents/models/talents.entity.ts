import { Table, Column, Model, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt } from "sequelize-typescript";

@Table({ tableName: "BT_TM_TALENTO", timestamps: false })
export class Talent extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  ID_TALENTO: number;

  @Column
  NO_NOMBRE: string;

  @Column
  AP_APELLIDO_PATERNO: string;

  @Column
  AP_APELLIDO_MATERNO: string;

  @Column
  URL_IMAGEN: string;

  @Column
  DE_DESCRIPCION: string;

  @Column
  ID_PERFIL_TALENTO: number;

  @Column
  ID_TIPO_MONEDA: number;

  @Column
  NU_MONTO_INICIAL: number;

  @Column
  NU_MONTO_FINAL: number;

  @Column
  NU_CELULAR: string;

  @Column
  URL_LINKDN: string;

  @Column
  URL_GITHUB: string;

  @Column
  ID_PAIS: number;

  @Column
  ID_CIUDAD: number;

  @Column
  @CreatedAt
  FE_CREACION: Date;
}
