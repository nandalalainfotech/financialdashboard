import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermoprogressComponent } from './thermoprogress.component';

describe('ThermoprogressComponent', () => {
  let component: ThermoprogressComponent;
  let fixture: ComponentFixture<ThermoprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThermoprogressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermoprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
