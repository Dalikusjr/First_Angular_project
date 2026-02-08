import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFilm } from './modifier-film';

describe('ModifierFilm', () => {
  let component: ModifierFilm;
  let fixture: ComponentFixture<ModifierFilm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifierFilm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierFilm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
