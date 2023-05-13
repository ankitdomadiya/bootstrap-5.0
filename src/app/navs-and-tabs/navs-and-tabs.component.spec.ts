import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsAndTabsComponent } from './navs-and-tabs.component';

describe('NavsAndTabsComponent', () => {
  let component: NavsAndTabsComponent;
  let fixture: ComponentFixture<NavsAndTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavsAndTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavsAndTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
