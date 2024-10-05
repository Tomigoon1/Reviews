/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToddlerBedComponent } from './toddlerBed.component';

describe('ToddlerBedComponent', () => {
  let component: ToddlerBedComponent;
  let fixture: ComponentFixture<ToddlerBedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToddlerBedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToddlerBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
