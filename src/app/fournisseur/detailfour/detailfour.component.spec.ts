import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailfourComponent } from './detailfour.component';

describe('DetailfourComponent', () => {
  let component: DetailfourComponent;
  let fixture: ComponentFixture<DetailfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
