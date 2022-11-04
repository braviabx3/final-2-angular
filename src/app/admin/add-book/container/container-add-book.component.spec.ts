import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAddBookComponent } from './container-add-book.component';

describe('ContainerAddBookComponent', () => {
  let component: ContainerAddBookComponent;
  let fixture: ComponentFixture<ContainerAddBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerAddBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerAddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
