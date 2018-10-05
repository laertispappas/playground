import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsApiService {
  static readonly API_KEY = "94f93287be014d6db322a1449ef75978";

  constructor(private httpClient: HttpClient) {}
}
