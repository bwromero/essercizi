import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateBackButtonComponent } from './navigate-back-button.component';

describe('NavigationButtonComponent', () => {
  let component: NavigateBackButtonComponent;
  let fixture: ComponentFixture<NavigateBackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigateBackButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigateBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
