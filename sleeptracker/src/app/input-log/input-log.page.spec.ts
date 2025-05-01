import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputLogPage } from './input-log.page';

describe('InputLogPage', () => {
  let component: InputLogPage;
  let fixture: ComponentFixture<InputLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputLogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
