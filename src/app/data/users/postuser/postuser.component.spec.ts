import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POSTuserComponent } from './postuser.component';

describe('POSTuserComponent', () => {
  let component: POSTuserComponent;
  let fixture: ComponentFixture<POSTuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POSTuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POSTuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
