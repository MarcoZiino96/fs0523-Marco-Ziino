import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePostInattiviComponent } from './page-post-inattivi.component';

describe('PagePostInattiviComponent', () => {
  let component: PagePostInattiviComponent;
  let fixture: ComponentFixture<PagePostInattiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagePostInattiviComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePostInattiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
