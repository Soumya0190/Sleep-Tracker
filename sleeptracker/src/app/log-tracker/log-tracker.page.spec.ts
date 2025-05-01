import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogTrackerPage } from './log-tracker.page';

describe('LogTrackerPage', () => {
  let component: LogTrackerPage;
  let fixture: ComponentFixture<LogTrackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogTrackerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
