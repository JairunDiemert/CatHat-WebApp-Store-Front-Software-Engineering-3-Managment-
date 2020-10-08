import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { CartItemComponent } from "src/app/modules/cart-item/cart-item.component";
import { CartPageComponent } from "./cart-page.component";

describe("CartPageComponent", () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartPageComponent, CartItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //used to test rendered html via debug
    de = fixture.debugElement.query(By.css("*"));
    console.log(de);
    el = de.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  //check correct html rendering using dsl of debug element to query debug elements in DOM
  it("should have an H1 tag of `Shopping Cart`", () => {
    expect(de.query(By.css("h1")).nativeElement.innerText).toBe(
      "Shopping Cart"
    );
  });
});
