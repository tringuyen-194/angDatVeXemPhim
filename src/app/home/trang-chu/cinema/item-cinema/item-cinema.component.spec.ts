import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCinemaComponent } from './item-cinema.component';

describe('ItemCinemaComponent', () => {
  let component: ItemCinemaComponent;
  let fixture: ComponentFixture<ItemCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
