import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtekCardComponent } from './ngtek-card.component';

describe('NgtekCardComponent', () => {
  let component: NgtekCardComponent;
  let fixture: ComponentFixture<NgtekCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgtekCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtekCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
