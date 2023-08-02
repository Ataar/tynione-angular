import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanchorComponent } from './fanchor.component';

describe('FanchorComponent', () => {
  let component: FanchorComponent;
  let fixture: ComponentFixture<FanchorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanchorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
