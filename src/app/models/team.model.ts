import { BaseModel } from './base.model';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('TeamModel')
export class TeamModel extends BaseModel {

  @JsonProperty('id', Number)
  public id: number = undefined;

  @JsonProperty('name', String)
  public name: string = undefined;
}
