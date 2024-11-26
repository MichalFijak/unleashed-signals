/* eslint-disable prettier/prettier */
import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

export interface UserProfile {
  sub: string;
  email: string;
  given_name: string;
  family_name: string;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class KeycloakService {
  _keycloak: Keycloak | undefined;
  profile: UserProfile | undefined;


  async init() {

    return true;
  }

  login() {
  }

  logout() {
  }
}
