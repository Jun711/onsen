import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComLibraryComponent } from './com-library.component';

describe('ComLibraryComponent', () => {
  let component: ComLibraryComponent;
  let fixture: ComponentFixture<ComLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
