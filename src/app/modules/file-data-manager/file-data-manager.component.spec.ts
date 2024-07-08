import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDataManagerComponent } from './file-data-manager.component';

describe('FileDataManagerComponent', () => {
  let component: FileDataManagerComponent;
  let fixture: ComponentFixture<FileDataManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileDataManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDataManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
