import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFilm } from './ajouter-film';

describe('AjouterFilm', () => {
  let component: AjouterFilm;
  let fixture: ComponentFixture<AjouterFilm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterFilm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterFilm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
