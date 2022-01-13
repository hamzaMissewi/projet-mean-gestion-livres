import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModfourComponent } from './modfour.component';

describe('ModfourComponent', () => {
  let component: ModfourComponent;
  let fixture: ComponentFixture<ModfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
