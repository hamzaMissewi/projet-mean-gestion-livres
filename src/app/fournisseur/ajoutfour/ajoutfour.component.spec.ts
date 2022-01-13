import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutfourComponent } from './ajoutfour.component';

describe('AjoutfourComponent', () => {
  let component: AjoutfourComponent;
  let fixture: ComponentFixture<AjoutfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
