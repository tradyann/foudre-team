import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AperoPresentationComponent } from './apero-presentation.component';

describe('AperoPresentationComponent', () => {
  let component: AperoPresentationComponent;
  let fixture: ComponentFixture<AperoPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AperoPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AperoPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
