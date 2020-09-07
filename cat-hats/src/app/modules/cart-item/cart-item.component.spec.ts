//ng test runs test and displays pass/fail

//import angular testing utilities
import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CartPageComponent } from 'src/app/pages/cart-page/cart-page.component';
import { CartItemComponent } from './cart-item.component';

//describe test suite
describe('CartItemComponent', () => {
  //declare components for easy change of test variables in test specs
  let component: CartItemComponent;

  //declare test environment that provides access to cart item component AND rendered html debug element
  let fixture: ComponentFixture<CartItemComponent>;

  let de: DebugElement;
  let el: HTMLElement;

  //setup test bed before each spec, ngmodule specific for testing environment
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemComponent, CartPageComponent ]
    })
    //method called to compile component's html and css
    .compileComponents();
  }));

  //declare variables used for testing cart item component
  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    
    //used to test component directly
    component = fixture.componentInstance;

    //runs angular change detection before/after each test
    fixture.detectChanges();

    //used to test rendered html via debug
    de = fixture.debugElement.query(By.css('*'));
    console.log(de);
    el = de.nativeElement;

  });

  //test if component is created succesfully
  it('should create', () => {
    
    //Truthy (Jasmine matcher) identifies if variable evaluates true in boolean context
    expect(component).toBeTruthy();
  });

});
