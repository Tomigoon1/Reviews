/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NikeAirZoomStructureComponent } from './NikeAirZoomStructure.component';

describe('NikeAirZoomStructureComponent', () => {
  let component: NikeAirZoomStructureComponent;
  let fixture: ComponentFixture<NikeAirZoomStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NikeAirZoomStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NikeAirZoomStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
