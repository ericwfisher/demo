import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Brewery {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  address_2: string;
  address_3: string;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  state: string;
  street:string;
}

export interface BreweryMeta {
  total: string;
  page: string;
  per_page: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreweryApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(limit = 50) {
    return this.httpClient.get<Brewery[]>(`https://api.openbrewerydb.org/v1/breweries?per_page=${limit}`);
  }

  getByType(type: string, limit = 50) {
    return this.httpClient.get<Brewery[]>(`https://api.openbrewerydb.org/v1/breweries?by_type=${type}&per_page=${limit}`);
  }

  getByCountry(type: string, limit = 50) {
    return this.httpClient.get<Brewery[]>(`https://api.openbrewerydb.org/v1/breweries?by_country=${type}&per_page=${limit}`);
  }

  getMeta() {
    return this.httpClient.get<BreweryMeta>(`https://api.openbrewerydb.org/v1/breweries/meta`);
  }

  getMetaByType(param: string) {
    return this.httpClient.get<BreweryMeta>(`https://api.openbrewerydb.org/v1/breweries/meta?by_type=${param}`);
  }

  getMetaByCountry(param: string) {
    return this.httpClient.get<BreweryMeta>(`https://api.openbrewerydb.org/v1/breweries/meta?by_country=${param}`);
  }
}
