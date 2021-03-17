import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionSalesComponent } from './section-sales.component';

describe('SectionSalesComponent', () => {
  let component: SectionSalesComponent;
  let fixture: ComponentFixture<SectionSalesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
