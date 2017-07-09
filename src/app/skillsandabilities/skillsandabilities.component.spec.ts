import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsandabilitiesComponent } from './skillsandabilities.component';

describe('SkillsandabilitiesComponent', () => {
  let component: SkillsandabilitiesComponent;
  let fixture: ComponentFixture<SkillsandabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsandabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsandabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
