import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionOrdersComponent } from './section-orders.component';

describe('SectionOrdersComponent', () => {
  let component: SectionOrdersComponent;
  let fixture: ComponentFixture<SectionOrdersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
