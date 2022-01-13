import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillivresComponent } from './detaillivres.component';

describe('DetaillivresComponent', () => {
  let component: DetaillivresComponent;
  let fixture: ComponentFixture<DetaillivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillivresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
