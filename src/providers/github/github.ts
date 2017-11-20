import { Injectable } from '@angular/core';
import {ApiProvider} from "../api/api";

@Injectable()
export class GithubProvider {

  constructor(public api: ApiProvider) {}

  repositories(owner) {
    return this.api.get('users/' + owner + '/repos');
  }



}
