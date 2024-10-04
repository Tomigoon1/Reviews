/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TravelLaptopBackpackComponent } from './TravelLaptopBackpack.component';

describe('TravelLaptopBackpackComponent', () => {
  let component: TravelLaptopBackpackComponent;
  let fixture: ComponentFixture<TravelLaptopBackpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelLaptopBackpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelLaptopBackpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
