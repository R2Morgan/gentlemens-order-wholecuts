import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholecutsComponent } from './wholecuts.component';

describe('WholecutsComponent', () => {
  let component: WholecutsComponent;
  let fixture: ComponentFixture<WholecutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WholecutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholecutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
