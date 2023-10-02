import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuperheroComponent } from './update-superhero.component';

describe('UpdateSuperheroComponent', () => {
  let component: UpdateSuperheroComponent;
  let fixture: ComponentFixture<UpdateSuperheroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSuperheroComponent]
    });
    fixture = TestBed.createComponent(UpdateSuperheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
