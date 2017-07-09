import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileimageComponent } from './profileimage.component';

describe('ProfileimageComponent', () => {
  let component: ProfileimageComponent;
  let fixture: ComponentFixture<ProfileimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
