
import { JsonConverter, JsonCustomConvert } from 'json2typescript';
import { StreakModel } from '../streak.model';

@JsonConverter
export class StreakConverter implements JsonCustomConvert<Array<StreakModel>> {

    public serialize(streaks: Array<StreakModel>): Array<StreakModel> {

        return streaks;
    }

    public deserialize(streak: any): Array<StreakModel> {

        return Object.values(streak);
    }
}
