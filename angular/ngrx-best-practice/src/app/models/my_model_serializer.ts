import { MyModel } from './my_model';
import { Serializer } from './serializer';

export class MyModelSerializer implements Serializer {
  fromJson(json: any): MyModel {
    const instance = new MyModel();
    instance.id = json.id;

    return instance;
  }

  toJson(model: MyModel): any {
    return {
      id: model.id
    };
  }
}
