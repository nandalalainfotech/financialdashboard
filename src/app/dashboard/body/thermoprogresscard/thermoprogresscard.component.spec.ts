import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermoprogresscardComponent } from './thermoprogresscard.component';

describe('ThermoprogresscardComponent', () => {
  let component: ThermoprogresscardComponent;
  let fixture: ComponentFixture<ThermoprogresscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThermoprogresscardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermoprogresscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
