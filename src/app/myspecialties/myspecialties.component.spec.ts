import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyspecialtiesComponent } from './myspecialties.component';

describe('MyspecialtiesComponent', () => {
  let component: MyspecialtiesComponent;
  let fixture: ComponentFixture<MyspecialtiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyspecialtiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyspecialtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
