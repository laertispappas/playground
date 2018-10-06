import { HttpClient } from '@angular/common/http';
import { MyModelSerializer, MyModel } from '../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class DataService {
  private url = 'http://apiservice';
  private endpoint = 'my_model';
  private serializer = new MyModelSerializer();

  constructor(protected httpClient: HttpClient) {}

  public create(model: MyModel): Observable<MyModel> {
    return this.httpClient
      .post<MyModel>(`${this.url}/${this.endpoint}`, model)
      .pipe(map(data => this.serializer.fromJson(data)));
  }

  public update(model: MyModel): Observable<MyModel> {
    return this.httpClient
      .put<MyModel>(`${this.url}/${this.endpoint}/${model.id}`, model)
      .pipe(map(data => this.serializer.fromJson(data)));
  }

  read(id: number): Observable<MyModel> {
    return this.httpClient
      .get<MyModel>(`${this.url}/${this.endpoint}/${id}`)
      .pipe(map(data => this.serializer.fromJson(data)));
  }

  list(): Observable<MyModel[]> {
    return this.httpClient
      .get<MyModel[]>(`${this.url}/${this.endpoint}`)
      .pipe(map(data => data.map(item => this.serializer.fromJson(item))));
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${this.endpoint}/${id}`);
  }
}
