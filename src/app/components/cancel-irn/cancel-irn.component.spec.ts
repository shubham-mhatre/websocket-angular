import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelIRNComponent } from './cancel-irn.component';

describe('CancelIRNComponent', () => {
  let component: CancelIRNComponent;
  let fixture: ComponentFixture<CancelIRNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancelIRNComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelIRNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
