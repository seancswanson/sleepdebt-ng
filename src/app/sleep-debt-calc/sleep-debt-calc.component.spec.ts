import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepDebtCalcComponent } from './sleep-debt-calc.component';

describe('SleepDebtCalcComponent', () => {
  let component: SleepDebtCalcComponent;
  let fixture: ComponentFixture<SleepDebtCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepDebtCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepDebtCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
