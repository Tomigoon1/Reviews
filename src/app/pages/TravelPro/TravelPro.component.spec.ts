/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TravelProComponent } from './TravelPro.component';

describe('TravelProComponent', () => {
  let component: TravelProComponent;
  let fixture: ComponentFixture<TravelProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
