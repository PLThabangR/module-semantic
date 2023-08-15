import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmantComponent } from './segmant.component';

describe('SegmantComponent', () => {
  let component: SegmantComponent;
  let fixture: ComponentFixture<SegmantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegmantComponent]
    });
    fixture = TestBed.createComponent(SegmantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
