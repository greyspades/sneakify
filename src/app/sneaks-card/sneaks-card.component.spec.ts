import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneaksCardComponent } from './sneaks-card.component';

describe('SneaksCardComponent', () => {
  let component: SneaksCardComponent;
  let fixture: ComponentFixture<SneaksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneaksCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneaksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
