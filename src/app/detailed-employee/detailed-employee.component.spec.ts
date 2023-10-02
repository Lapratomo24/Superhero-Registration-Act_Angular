import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedEmployeeComponent } from './detailed-employee.component';

describe('DetailedEmployeeComponent', () => {
  let component: DetailedEmployeeComponent;
  let fixture: ComponentFixture<DetailedEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedEmployeeComponent]
    });
    fixture = TestBed.createComponent(DetailedEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
