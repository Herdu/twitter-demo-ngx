import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterUserComponent } from './twitter-user.component';

describe('TwitterUserComponent', () => {
  let component: TwitterUserComponent;
  let fixture: ComponentFixture<TwitterUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
