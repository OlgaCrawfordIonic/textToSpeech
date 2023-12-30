import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderFrenchPage } from './slider-french.page';

describe('SliderFrenchPage', () => {
  let component: SliderFrenchPage;
  let fixture: ComponentFixture<SliderFrenchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SliderFrenchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
