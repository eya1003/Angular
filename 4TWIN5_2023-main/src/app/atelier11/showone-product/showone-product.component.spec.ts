import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowoneProductComponent } from './showone-product.component';

describe('ShowoneProductComponent', () => {
  let component: ShowoneProductComponent;
  let fixture: ComponentFixture<ShowoneProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowoneProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowoneProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
