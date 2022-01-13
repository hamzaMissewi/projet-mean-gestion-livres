import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModlivreComponent } from './modlivre.component';

describe('ModlivreComponent', () => {
  let component: ModlivreComponent;
  let fixture: ComponentFixture<ModlivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModlivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModlivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
