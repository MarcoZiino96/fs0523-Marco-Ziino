import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFavouriteComponent } from './card-favourite.component';

describe('CardFavouriteComponent', () => {
  let component: CardFavouriteComponent;
  let fixture: ComponentFixture<CardFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFavouriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
