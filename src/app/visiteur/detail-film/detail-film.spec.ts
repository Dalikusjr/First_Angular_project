import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFilm } from './detail-film';

describe('DetailFilm', () => {
  let component: DetailFilm;
  let fixture: ComponentFixture<DetailFilm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailFilm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFilm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
