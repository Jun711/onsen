import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComDocumentComponent } from './com-document.component';

describe('ComDocumentComponent', () => {
  let component: ComDocumentComponent;
  let fixture: ComponentFixture<ComDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
