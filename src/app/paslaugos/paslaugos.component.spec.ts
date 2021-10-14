import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaslaugosComponent } from './paslaugos.component';

describe('PaslaugosComponent', () => {
  let component: PaslaugosComponent;
  let fixture: ComponentFixture<PaslaugosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaslaugosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaslaugosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
