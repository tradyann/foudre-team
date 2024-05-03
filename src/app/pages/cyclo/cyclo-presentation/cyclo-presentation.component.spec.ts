import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycloPresentationComponent } from './cyclo-presentation.component';

describe('CycloPresentationComponent', () => {
  let component: CycloPresentationComponent;
  let fixture: ComponentFixture<CycloPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CycloPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CycloPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
