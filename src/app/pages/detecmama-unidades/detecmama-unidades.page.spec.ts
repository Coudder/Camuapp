import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetecmamaUnidadesPage } from './detecmama-unidades.page';

describe('DetecmamaUnidadesPage', () => {
  let component: DetecmamaUnidadesPage;
  let fixture: ComponentFixture<DetecmamaUnidadesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetecmamaUnidadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetecmamaUnidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
