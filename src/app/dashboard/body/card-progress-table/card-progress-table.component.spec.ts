import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProgressTableComponent } from './card-progress-table.component';

describe('CardProgressTableComponent', () => {
  let component: CardProgressTableComponent;
  let fixture: ComponentFixture<CardProgressTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProgressTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProgressTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
