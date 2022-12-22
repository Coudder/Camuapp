import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColposUnidadesDetailPage } from './colpos-unidades-detail.page';

describe('ColposUnidadesDetailPage', () => {
  let component: ColposUnidadesDetailPage;
  let fixture: ComponentFixture<ColposUnidadesDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ColposUnidadesDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColposUnidadesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
