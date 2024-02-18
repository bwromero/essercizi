import { TestBed } from '@angular/core/testing';

import { SelectedListService } from './selected-list.service';

describe('SelectedListService', () => {
  let service: SelectedListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
