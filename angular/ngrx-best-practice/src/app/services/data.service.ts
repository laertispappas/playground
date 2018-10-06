import { MyModel, MyModelSerializer } from '../models';
import { ResourceService } from './resource.service';
import { HttpClient } from '@angular/common/http';

// Use generic CRUD resource service for CRUD operations
export class DataService extends ResourceService<MyModel> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'http://apiservice',
      'my_models',
      new MyModelSerializer()
    );
  }
}
