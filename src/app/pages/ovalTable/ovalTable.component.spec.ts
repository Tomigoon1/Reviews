/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OvalTableComponent } from './ovalTable.component';

describe('OvalTableComponent', () => {
  let component: OvalTableComponent;
  let fixture: ComponentFixture<OvalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
