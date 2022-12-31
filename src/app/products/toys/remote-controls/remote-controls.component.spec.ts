import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteControlsComponent } from './remote-controls.component';

describe('RemoteControlsComponent', () => {
  let component: RemoteControlsComponent;
  let fixture: ComponentFixture<RemoteControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
