import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispalyCardsComponent } from './dispaly-cards.component';

describe('DispalyCardsComponent', () => {
  let component: DispalyCardsComponent;
  let fixture: ComponentFixture<DispalyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DispalyCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispalyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
