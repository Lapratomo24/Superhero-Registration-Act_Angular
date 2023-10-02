import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuperheroComponent } from './list-superhero.component';

describe('ListSuperheroComponent', () => {
  let component: ListSuperheroComponent;
  let fixture: ComponentFixture<ListSuperheroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSuperheroComponent]
    });
    fixture = TestBed.createComponent(ListSuperheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
