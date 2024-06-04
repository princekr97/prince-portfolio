import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuDialogComponent } from './mobile-menu-dialog.component';

describe('MobileMenuDialogComponent', () => {
  let component: MobileMenuDialogComponent;
  let fixture: ComponentFixture<MobileMenuDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileMenuDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileMenuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
