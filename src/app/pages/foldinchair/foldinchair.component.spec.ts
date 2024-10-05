/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoldinchairComponent } from './foldinchair.component';

describe('FoldinchairComponent', () => {
  let component: FoldinchairComponent;
  let fixture: ComponentFixture<FoldinchairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldinchairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldinchairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
