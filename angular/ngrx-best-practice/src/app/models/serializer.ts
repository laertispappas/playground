import { Resource } from './resource';

export interface Serializer {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
}
