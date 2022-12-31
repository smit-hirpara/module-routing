import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhnumberComponent } from './phnumber.component';

describe('PhnumberComponent', () => {
  let component: PhnumberComponent;
  let fixture: ComponentFixture<PhnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhnumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
