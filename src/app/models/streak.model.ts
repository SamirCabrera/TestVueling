import { BaseModel } from './base.model';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('StreakModel')
export class StreakModel extends BaseModel {

  @JsonProperty('id_team', Number)
  public idTeam: number = undefined;

  @JsonProperty('id_player', Number)
  public idPlayer: number = undefined;

  @JsonProperty('gameweek', Number)
  public gameweek: number = undefined;

  @JsonProperty('points', Number)
  public points: number = undefined;

  @JsonProperty('color', Number)
  public color: number = undefined;
}
