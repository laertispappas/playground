import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsApiService {
  static readonly API_KEY = "94f93287be014d6db322a1449ef75978";

  readonly apiBaseUrl = "https://newsapi.org/v2";

  constructor(private http: HttpClient) {}

  getSources() {
    return this.http.get(
      `${this.apiBaseUrl}/sources?language=en&apiKey=${NewsApiService.API_KEY}`
    );
  }

  getArticles() {
    return this.http.get(
      `${this.apiBaseUrl}/top-headlines?sources=techcrunch&apiKey=${
        NewsApiService.API_KEY
      }`
    );
  }

  getArticlesBySource(source: String) {
    return this.http.get(
      `${this.apiBaseUrl}/top-headlines?sources=${source}&apiKey=${
        NewsApiService.API_KEY
      }`
    );
  }
}
