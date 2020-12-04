import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTechPage } from './new-tech.page';

describe('NewTechPage', () => {
  let component: NewTechPage;
  let fixture: ComponentFixture<NewTechPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTechPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
