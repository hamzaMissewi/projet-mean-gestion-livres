import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfourComponent } from './confour.component';

describe('ConfourComponent', () => {
  let component: ConfourComponent;
  let fixture: ComponentFixture<ConfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
