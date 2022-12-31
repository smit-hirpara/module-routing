import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeshirtsComponent } from './teshirts.component';

describe('TeshirtsComponent', () => {
  let component: TeshirtsComponent;
  let fixture: ComponentFixture<TeshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeshirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
