import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AperoRacesComponent } from './apero-races.component';

describe('AperoRacesComponent', () => {
  let component: AperoRacesComponent;
  let fixture: ComponentFixture<AperoRacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AperoRacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AperoRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
