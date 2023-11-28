import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePostAttiviComponent } from './page-post-attivi.component';

describe('PagePostAttiviComponent', () => {
  let component: PagePostAttiviComponent;
  let fixture: ComponentFixture<PagePostAttiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagePostAttiviComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePostAttiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
