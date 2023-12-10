import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveWheaterComponent } from './five-wheater.component';

describe('FiveWheaterComponent', () => {
  let component: FiveWheaterComponent;
  let fixture: ComponentFixture<FiveWheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiveWheaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiveWheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
