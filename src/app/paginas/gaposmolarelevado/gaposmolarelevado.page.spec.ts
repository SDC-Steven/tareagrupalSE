import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GaposmolarelevadoPage } from './gaposmolarelevado.page';

describe('GaposmolarelevadoPage', () => {
  let component: GaposmolarelevadoPage;
  let fixture: ComponentFixture<GaposmolarelevadoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GaposmolarelevadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GaposmolarelevadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
