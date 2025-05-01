import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StanfordSleepinessPage } from './stanford-sleepiness.page';

describe('StanfordSleepinessPage', () => {
  let component: StanfordSleepinessPage;
  let fixture: ComponentFixture<StanfordSleepinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanfordSleepinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StanfordSleepinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
