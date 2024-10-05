/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StockTankComponent } from './stockTank.component';

describe('StockTankComponent', () => {
  let component: StockTankComponent;
  let fixture: ComponentFixture<StockTankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
