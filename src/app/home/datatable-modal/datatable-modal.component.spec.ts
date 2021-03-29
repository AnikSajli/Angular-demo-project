import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableModalComponent } from './datatable-modal.component';

describe('DatatableModalComponent', () => {
  let component: DatatableModalComponent;
  let fixture: ComponentFixture<DatatableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
