import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacaholderComponent } from './placaholder.component';

describe('PlacaholderComponent', () => {
  let component: PlacaholderComponent;
  let fixture: ComponentFixture<PlacaholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacaholderComponent]
    });
    fixture = TestBed.createComponent(PlacaholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
