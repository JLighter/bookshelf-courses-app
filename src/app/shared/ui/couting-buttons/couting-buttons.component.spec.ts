import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutingButtonsComponent } from './couting-buttons.component';

describe('CoutingButtonsComponent', () => {
  let component: CoutingButtonsComponent;
  let fixture: ComponentFixture<CoutingButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoutingButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
