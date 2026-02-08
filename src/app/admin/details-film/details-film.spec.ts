import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFilm } from './details-film';

describe('DetailsFilm', () => {
  let component: DetailsFilm;
  let fixture: ComponentFixture<DetailsFilm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsFilm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsFilm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
