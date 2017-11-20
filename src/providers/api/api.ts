import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  public apiRoot: string = 'https://api.github.com/';

  constructor(public http: HttpClient) {}

  get(endpoint: string, params ?: any) {
    return this.http.get(this.apiRoot + endpoint);
  }

  post(endpoint: string, body : any[]) {
    return this.http.post(this.apiRoot + endpoint, body);
  }

}
