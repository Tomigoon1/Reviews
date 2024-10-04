/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ipad9Component } from './Ipad9.component';

describe('Ipad9Component', () => {
  let component: Ipad9Component;
  let fixture: ComponentFixture<Ipad9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ipad9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ipad9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
