import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeddyBrarsComponent } from './teddy-brars.component';

describe('TeddyBrarsComponent', () => {
  let component: TeddyBrarsComponent;
  let fixture: ComponentFixture<TeddyBrarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeddyBrarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeddyBrarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
