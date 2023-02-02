import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowusersComponent } from './showusers.component';

describe('ShowusersComponent', () => {
  let component: ShowusersComponent;
  let fixture: ComponentFixture<ShowusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
