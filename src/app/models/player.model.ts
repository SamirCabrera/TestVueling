import { BaseModel } from './base.model';
import { JsonObject, JsonProperty } from 'json2typescript';
import { StreakConverter } from './converters/streak.converter';
import { StreakModel } from './streak.model';

@JsonObject('PlayerModel')
export class PlayerModel extends BaseModel {

  @JsonProperty('picture', String)
  public picture: string = undefined;

  @JsonProperty('name', String)
  public name: string = undefined;

  @JsonProperty('position', Number)
  public position: number = undefined;

  @JsonProperty('id_team', Number)
  public idTeam: number = undefined;

  @JsonProperty('id_comunio', Number)
  public idComunio: number = undefined;

  @JsonProperty('value', Number)
  public value: number = undefined;

  @JsonProperty('points', Number)
  public points: number = undefined;

  @JsonProperty('avg', Number)
  public avg: number = undefined;

  @JsonProperty('status', String, true)
  public status?: string = undefined;

  @JsonProperty('id_competition', Number)
  public idCompetition: number = undefined;

  @JsonProperty('ts_pic', Number)
  public tsPic: number = undefined;

  @JsonProperty('prev_value', Number)
  public prevValue: number = undefined;

  @JsonProperty('last_modified', String)
  public lastModified: string = undefined;

  @JsonProperty('id_uc', Number, true)
  public idUc?: number = undefined;

  @JsonProperty('clause', Number)
  public clause: number = undefined;

  @JsonProperty('streak', StreakConverter)
  public streak: Array<StreakModel> = undefined;

  @JsonProperty('shield', Number)
  public shield: number = undefined;

  @JsonProperty('fav', Number)
  public fav: number = undefined;
}
