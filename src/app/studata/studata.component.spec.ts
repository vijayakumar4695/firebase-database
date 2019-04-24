import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudataComponent } from './studata.component';

describe('StudataComponent', () => {
  let component: StudataComponent;
  let fixture: ComponentFixture<StudataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
