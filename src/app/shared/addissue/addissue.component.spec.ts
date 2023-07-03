import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddissueComponent } from './addissue.component';

describe('AddissueComponent', () => {
  let component: AddissueComponent;
  let fixture: ComponentFixture<AddissueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddissueComponent]
    });
    fixture = TestBed.createComponent(AddissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
