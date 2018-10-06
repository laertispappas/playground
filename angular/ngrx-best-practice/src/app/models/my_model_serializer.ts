import { MyModel } from './my_model';

export class MyModelSerializer {
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
