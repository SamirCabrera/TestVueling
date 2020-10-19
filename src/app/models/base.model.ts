import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';
import { environment } from 'src/environments/environment';

export abstract class BaseModel {

    public static jsonConvert: JsonConvert = new JsonConvert();

    public static serializeObject<T>(instance: T): any {

        return BaseModel.jsonConvert.serializeObject<T>(instance);
    }

    public static serializeArray<T>(instanceArray: Array<T>): Array<{}> {

        return BaseModel.jsonConvert.serializeArray<T>(instanceArray);
    }

    public static deserializeObject<T>(jsonObject: any, classReference: new () => T): T {

        return BaseModel.jsonConvert.deserializeObject<T>(jsonObject, classReference);
    }

    public static deserializeArray<T>(instanceArray: Array<any>, classReference: new () => T): Array<T> {

        return BaseModel.jsonConvert.deserializeArray<T>(instanceArray, classReference);
    }
}

BaseModel.jsonConvert.operationMode = environment.production ? OperationMode.ENABLE : OperationMode.ENABLE;
BaseModel.jsonConvert.ignorePrimitiveChecks = false;
BaseModel.jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL;
