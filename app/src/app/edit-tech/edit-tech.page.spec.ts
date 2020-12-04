import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditTechPage } from './edit-tech.page';

describe('EditTechPage', () => {
  let component: EditTechPage;
  let fixture: ComponentFixture<EditTechPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTechPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
