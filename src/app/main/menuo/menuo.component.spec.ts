import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuoComponent } from './menuo.component';

describe('MenuoComponent', () => {
  let component: MenuoComponent;
  let fixture: ComponentFixture<MenuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
