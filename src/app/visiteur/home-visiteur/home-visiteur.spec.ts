import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVisiteur } from './home-visiteur';

describe('HomeVisiteur', () => {
  let component: HomeVisiteur;
  let fixture: ComponentFixture<HomeVisiteur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeVisiteur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeVisiteur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
