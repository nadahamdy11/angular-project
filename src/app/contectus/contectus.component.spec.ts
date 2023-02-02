import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectusComponent } from './contectus.component';

describe('ContectusComponent', () => {
  let component: ContectusComponent;
  let fixture: ComponentFixture<ContectusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContectusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContectusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export { ContectusComponent };
