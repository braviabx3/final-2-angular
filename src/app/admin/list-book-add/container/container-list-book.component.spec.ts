import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerListBookComponent } from './container-list-book.component';

describe('ContainerListBookComponent', () => {
  let component: ContainerListBookComponent;
  let fixture: ComponentFixture<ContainerListBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerListBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerListBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
