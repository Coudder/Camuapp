import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastosUnidadesDetailPage } from './mastos-unidades-detail.page';

describe('MastosUnidadesDetailPage', () => {
  let component: MastosUnidadesDetailPage;
  let fixture: ComponentFixture<MastosUnidadesDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MastosUnidadesDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastosUnidadesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
