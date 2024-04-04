import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { BreweryApiService } from './brewery-api.service';

describe('BreweryApiService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: BreweryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BreweryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
