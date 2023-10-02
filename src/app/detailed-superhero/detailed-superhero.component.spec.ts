import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedSuperheroComponent } from './detailed-superhero.component';

describe('DetailedSuperheroComponent', () => {
  let component: DetailedSuperheroComponent;
  let fixture: ComponentFixture<DetailedSuperheroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedSuperheroComponent]
    });
    fixture = TestBed.createComponent(DetailedSuperheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
