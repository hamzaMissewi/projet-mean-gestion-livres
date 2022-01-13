import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConlivreComponent } from './conlivre.component';

describe('ConlivreComponent', () => {
  let component: ConlivreComponent;
  let fixture: ComponentFixture<ConlivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConlivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConlivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
