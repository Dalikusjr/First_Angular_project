import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerFilms } from './lister-films';

describe('ListerFilms', () => {
  let component: ListerFilms;
  let fixture: ComponentFixture<ListerFilms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListerFilms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerFilms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
