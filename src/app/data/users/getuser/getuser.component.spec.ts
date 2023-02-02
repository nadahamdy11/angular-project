import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GETuserComponent } from './getuser.component';

describe('GETuserComponent', () => {
  let component: GETuserComponent;
  let fixture: ComponentFixture<GETuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GETuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GETuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
