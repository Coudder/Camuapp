import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetecmamaUnidadesDetailPage } from './detecmama-unidades-detail.page';

describe('DetecmamaUnidadesDetailPage', () => {
  let component: DetecmamaUnidadesDetailPage;
  let fixture: ComponentFixture<DetecmamaUnidadesDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetecmamaUnidadesDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetecmamaUnidadesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
