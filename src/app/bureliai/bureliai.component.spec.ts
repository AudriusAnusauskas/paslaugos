import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureliaiComponent } from './bureliai.component';

describe('BureliaiComponent', () => {
  let component: BureliaiComponent;
  let fixture: ComponentFixture<BureliaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureliaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BureliaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
