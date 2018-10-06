import { SessionSerializer, Session } from '../models';
import { ResourceService } from './resource.service';
import { HttpClient } from '@angular/common/http';

// Use generic CRUD resource service for CRUD operations
export class AuthService extends ResourceService<Session> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'http://apiservice',
      'auth/sessions',
      new SessionSerializer()
    );
  }
}
