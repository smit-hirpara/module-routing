import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomarComponent } from './customar.component';

describe('CustomarComponent', () => {
  let component: CustomarComponent;
  let fixture: ComponentFixture<CustomarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
