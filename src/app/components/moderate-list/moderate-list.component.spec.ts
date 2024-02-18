import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerateListComponent } from './moderate-list.component';

describe('ModerateListComponent', () => {
  let component: ModerateListComponent;
  let fixture: ComponentFixture<ModerateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModerateListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModerateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
