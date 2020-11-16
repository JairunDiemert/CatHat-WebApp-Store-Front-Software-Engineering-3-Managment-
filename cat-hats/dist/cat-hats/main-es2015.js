(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["main"],
  {
    /***/ 0:
      /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /home/cen4078/SEM_Group_2/cat-hats/src/main.ts */ "zUnb"
        );

        /***/
      },

    /***/ "1W4x":
      /*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
      /*! exports provided: RegisterComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "RegisterComponent",
          function () {
            return RegisterComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../auth.service */ "ccyI"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */ "3Pt+"
        );

        class RegisterComponent {
          constructor(auth, router) {
            this.auth = auth;
            this.router = router;
          }
          ngOnInit() {}
          registerUser(event) {
            event.preventDefault();
            const errors = [];
            const target = event.target;
            const username = target.querySelector("#username").value;
            const name = target.querySelector("#name").value;
            const email = target.querySelector("#email").value;
            const address = target.querySelector("#address").value;
            const password = target.querySelector("#password").value;
            const cpassword = target.querySelector("#cpassword").value;
            if (password != cpassword) {
              errors.push("Passwords do not match");
            }
            //more validation ie. if this else that..
            if (errors.length == 0) {
              this.auth
                .registerUser(username, name, email, address, password)
                .subscribe((data) => {
                  console.log(data);
                  if (data.success) {
                    this.router.navigate(["dashboard"]);
                  }
                });
            }
            console.log(username, password);
          }
        }
        RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
          return new (t || RegisterComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
            )
          );
        };
        RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: RegisterComponent,
          selectors: [["app-register"]],
          decls: 13,
          vars: 0,
          consts: [
            [3, "submit"],
            [1, "container"],
            [
              "type",
              "text",
              "autocomplete",
              "off",
              "placeholder",
              "Username",
              "id",
              "username",
            ],
            [
              "type",
              "password",
              "autocomplete",
              "off",
              "placeholder",
              "Password",
              "id",
              "password",
            ],
            [
              "type",
              "password",
              "autocomplete",
              "off",
              "placeholder",
              "Confirm Password",
              "id",
              "cpassword",
            ],
            ["type", "submit", "id", "submit"],
          ],
          template: function RegisterComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "form",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "submit",
                function RegisterComponent_Template_form_submit_0_listener(
                  $event
                ) {
                  return ctx.registerUser($event);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "h2"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                3,
                "Register Here"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                5,
                "input",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                7,
                "input",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                9,
                "input",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "button",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                12,
                "Submit"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
              "ɵangular_packages_forms_forms_y"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"],
          ],
          styles: [
            "form[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  background: #eee;\n  border-radius: 20px;\n}\n\ninput#username[_ngcontent-%COMP%], input#password[_ngcontent-%COMP%], input#cpassword[_ngcontent-%COMP%] {\n  outline: 0;\n  font-size: 20px;\n  padding: 5px 10px;\n  margin: 5px;\n  min-width: 300px;\n}\n\nbutton#submit[_ngcontent-%COMP%] {\n  margin: 20px;\n  padding: 20px;\n  border-radius: 10px;\n  font-size: 20px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbmlucHV0I3VzZXJuYW1lLFxuaW5wdXQjcGFzc3dvcmQsXG5pbnB1dCNjcGFzc3dvcmQge1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW46IDVweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuYnV0dG9uI3N1Ym1pdCB7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            RegisterComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-register",
                    templateUrl: "./register.component.html",
                    styleUrls: ["./register.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "2TiI":
      /*!********************************************************!*\
  !*** ./src/app/pages/cart-page/cart-page.component.ts ***!
  \********************************************************/
      /*! exports provided: CartPageComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CartPageComponent",
          function () {
            return CartPageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ "ofXK"
        );
        /* harmony import */ var _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../modules/footer/footer.component */ "oC4s"
        );
        /* harmony import */ var _modules_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../modules/cart-item/cart-item.component */ "RhcK"
        );

        function CartPageComponent_tr_29_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              0,
              "tr",
              12
            );
          }
          if (rf & 2) {
            const item_r1 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "items",
              item_r1
            );
          }
        }
        class CartPageComponent {
          constructor() {
            //array of cart items
            this.cart_Items = [];
          }
          ngOnInit() {
            //TO DO: listing data for each cart item from database
            //let the array cart_Items be named cart
            let cart = [];
            //temporary objects for viewing functionality, will update with database objects
            for (let i = 0; i < 3; i++) {
              //push inserts objects into cart array
              cart.push({
                itemName: "Mini Kitty Beanie",
                itemPrice: 16.79,
                itemID: 2,
                itemDescription: "A miniature feline beanie",
                itemQuantity: 9,
                itemImg: "./../../../assets/200x200.png",
              });
            }
            //constructor instantiation
            this.cart_Items = cart;
          }
        }
        CartPageComponent.ɵfac = function CartPageComponent_Factory(t) {
          return new (t || CartPageComponent)();
        };
        CartPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: CartPageComponent,
          selectors: [["app-cart-page"]],
          decls: 35,
          vars: 1,
          consts: [
            [1, "container", "py-3", "text-center"],
            [1, "display-4"],
            [1, "container"],
            [1, "row"],
            [1, "col-lg-12", "p-5", "bg-white", "rounded", "shadow-lg", "mb-4"],
            [1, "table-responsive", "w-auto"],
            [1, "table"],
            ["scope", "col", 1, "border-0", "bg-light"],
            [1, "py-2", "text-uppercase", "align-middle", "text-center"],
            ["app-cart-item", "", 3, "items", 4, "ngFor", "ngForOf"],
            [1, "text-center"],
            ["href", "#", 1, "btn", "btn-primary"],
            ["app-cart-item", "", 3, "items"],
          ],
          template: function CartPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "body"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "h1",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                4,
                "Shopping Cart"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "main"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "div",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "div",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "div",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "div",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "table",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "thead"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                12,
                "tr"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                13,
                "th",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                14,
                "div",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                15,
                " Remove "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "th",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                17,
                "div",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                18,
                " Product "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                19,
                "th",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                20,
                "div",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                21,
                " Price "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                22,
                "th",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                23,
                "div",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                24,
                " Quantity "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                25,
                "th",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                26,
                "div",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                27,
                " Subtotal "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                28,
                "tbody"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                29,
                CartPageComponent_tr_29_Template,
                1,
                1,
                "tr",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                30,
                "p",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                31,
                "a",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                32,
                "Proceed to Checkout"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                33,
                "footer"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                34,
                "app-footer"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngForOf",
                ctx.cart_Items
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"],
            _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__[
              "FooterComponent"
            ],
            _modules_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_3__[
              "CartItemComponent"
            ],
          ],
          styles: [
            'h1[_ngcontent-%COMP%] {\n  font-family: "Alice", serif;\n}\n\nheader[_ngcontent-%COMP%] {\n  align-content: center;\n  text-align: center;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #eecda3;\n  background: linear-gradient(to right, #eecda3, #ef629f);\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUVuQix1REFBdUQ7RUFDdkQsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC1wYWdlL2NhcnQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBmb250LWZhbWlseTogXCJBbGljZVwiLCBzZXJpZjtcbn1cblxuaGVhZGVyIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZWVjZGEzO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlY2RhMywgI2VmNjI5Zik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlY2RhMywgI2VmNjI5Zik7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuIl19 */',
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            CartPageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-cart-page",
                    templateUrl: "./cart-page.component.html",
                    styleUrls: ["./cart-page.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ "4dcm":
      /*!**********************************************************!*\
  !*** ./src/app/modules/item-card/item-card.component.ts ***!
  \**********************************************************/
      /*! exports provided: ItemCardComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ItemCardComponent",
          function () {
            return ItemCardComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );

        class ItemCardComponent {
          constructor(router) {
            this.router = router;
          }
          ngOnInit() {}
          handleClick() {
            this.router.navigate(["catalog/" + this.items.itemID]);
          }
        }
        ItemCardComponent.ɵfac = function ItemCardComponent_Factory(t) {
          return new (t || ItemCardComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
            )
          );
        };
        ItemCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: ItemCardComponent,
          selectors: [["app-item-card"]],
          inputs: { items: "items" },
          decls: 11,
          vars: 5,
          consts: [
            [
              1,
              "card",
              "shadow-sm",
              "p-3",
              "mb-5",
              "bg-white",
              "rounded",
              2,
              "width",
              "12rem",
              3,
              "click",
            ],
            [1, "card-img-top", 3, "src", "alt"],
            [1, "card-body", "text-center"],
            [1, "card-title"],
            [1, "card-price"],
            [1, "card-text"],
            ["href", "/catalog", 1, "btn", "btn-primary"],
          ],
          template: function ItemCardComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function ItemCardComponent_Template_div_click_0_listener() {
                  return ctx.handleClick();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                1,
                "img",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "div",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "h5",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "p",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "p",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "a",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                10,
                "Add To Cart"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵpropertyInterpolate"
              ](
                "src",
                ctx.items.itemImg,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵpropertyInterpolate"
              ]("alt", ctx.items.itemName);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                ctx.items.itemName
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
                "$ ",
                ctx.items.itemPrice,
                ""
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                ctx.items.itemDescription
              );
            }
          },
          styles: [
            'h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  font-family: "Alice", serif;\n}\n\n.card-price[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: larger;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #5d3980;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9pdGVtLWNhcmQvaXRlbS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaXRlbS1jYXJkL2l0ZW0tY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDUsXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwiQWxpY2VcIiwgc2VyaWY7XG59XG5cbi5jYXJkLXByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMzk4MDtcbn1cbiJdfQ== */',
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ItemCardComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-item-card",
                    templateUrl: "./item-card.component.html",
                    styleUrls: ["./item-card.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
                },
              ];
            },
            {
              items: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
                },
              ],
            }
          );
        })();

        /***/
      },

    /***/ "4h5o":
      /*!************************************************************!*\
  !*** ./src/app/modules/login-card/login-card.component.ts ***!
  \************************************************************/
      /*! exports provided: LoginCardComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "LoginCardComponent",
          function () {
            return LoginCardComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! src/app/auth.service */ "ccyI"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );
        /* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! src/app/user.service */ "xdv0"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common */ "ofXK"
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/forms */ "3Pt+"
        );

        function LoginCardComponent_div_0_Template(rf, ctx) {
          if (rf & 1) {
            const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              2
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "button",
              3
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              2,
              " Already have an account? Login to our site "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "div",
              4
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              4,
              "form",
              5,
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "ngSubmit",
              function LoginCardComponent_div_0_Template_form_ngSubmit_4_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r4
                );
                const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵreference"
                ](5);
                const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();
                return ctx_r3.onSubmit(_r2);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              6,
              "div",
              7
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              7,
              "label",
              8
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              8,
              "Email address"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              9,
              "input",
              9
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              10,
              "div",
              7
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              11,
              "label",
              10
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              12,
              "Password"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              13,
              "input",
              11
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              14,
              "div",
              7
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              15,
              "button",
              12
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign In");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              17,
              "p"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              18,
              "Don't have an account?"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              19,
              "a",
              13
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              20,
              " Register here!"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        function LoginCardComponent_div_1_Template(rf, ctx) {
          if (rf & 1) {
            const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "button",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function LoginCardComponent_div_1_Template_button_click_1_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r6
                );
                const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();
                return ctx_r5.profileReroute();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              2,
              " Profile Page "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "button",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function LoginCardComponent_div_1_Template_button_click_3_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r6
                );
                const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();
                return ctx_r7.logout();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log Out");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        }
        class LoginCardComponent {
          constructor(Auth, router, User) {
            this.Auth = Auth;
            this.router = router;
            this.User = User;
            this.loginShow = true;
            this.loginShow = this.Auth.getisLoggedIn();
          }
          ngOnInit() {}
          profileReroute() {
            this.router.navigate(["/profile"]);
          }
          logout() {
            this.User.logout().subscribe((data) => {
              if (data.success) {
                this.router.navigate(["/"]);
                this.Auth.setLoggedIn(false);
                this.loginShow = this.Auth.getisLoggedIn();
              } else {
                window.alert("Some problem");
              }
            });
          }
          onSubmit(login) {
            const email = login.value.email;
            const password = login.value.password;
            this.Auth.getUserDetails(email, password).subscribe((data) => {
              if (data.success) {
                this.router.navigate(["/"]);
                this.Auth.setLoggedIn(true);
                this.loginShow = this.Auth.getisLoggedIn();
              } else {
                this.router.navigate(["/login"]);
                window.alert(data.message);
                this.loginShow = this.Auth.getisLoggedIn();
              }
            });
            console.log("Login card: ", email, password);
          }
        }
        LoginCardComponent.ɵfac = function LoginCardComponent_Factory(t) {
          return new (t || LoginCardComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
            )
          );
        };
        LoginCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: LoginCardComponent,
          selectors: [["app-login-card"]],
          decls: 2,
          vars: 2,
          consts: [
            ["class", "dropdown", 4, "ngIf"],
            [4, "ngIf"],
            [1, "dropdown"],
            [
              "type",
              "button",
              "id",
              "dropdownMenuButton",
              "data-toggle",
              "dropdown",
              "aria-haspopup",
              "true",
              "aria-expanded",
              "true",
              1,
              "btn",
              "btn-secondary",
              "dropdown-toggle",
            ],
            ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"],
            [
              "role",
              "form",
              "method",
              "post",
              "action",
              "login",
              "accept-charset",
              "UTF-8",
              "id",
              "login-nav",
              1,
              "form",
              3,
              "ngSubmit",
            ],
            ["login", "ngForm"],
            [1, "form-group"],
            ["for", "exampleInputEmail1"],
            [
              "name",
              "email",
              "ngModel",
              "",
              "id",
              "exampleInputEmail1",
              "aria-describedby",
              "emailHelp",
              1,
              "form-control",
            ],
            ["for", "exampleInputPassword1"],
            [
              "name",
              "password",
              "ngModel",
              "",
              "id",
              "exampleInputPassword1",
              1,
              "form-control",
            ],
            ["type", "submit", 1, "btn", "btn-primary"],
            ["routerLink", "/register"],
            [1, "btn", "btn-primary", 3, "click"],
          ],
          template: function LoginCardComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                0,
                LoginCardComponent_div_0_Template,
                21,
                0,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                1,
                LoginCardComponent_div_1_Template,
                5,
                0,
                "div",
                1
              );
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                !ctx.loginShow
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.loginShow
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__[
              "ɵangular_packages_forms_forms_y"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"],
          ],
          styles: [
            '.logo[_ngcontent-%COMP%] {\n  width: 75%;\n  height: auto;\n}\n\n.nav-link[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  font-family: "Alice", serif;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n\nnav[_ngcontent-%COMP%] {\n  z-index: 6;\n}\n\n.navbar-light[_ngcontent-%COMP%] {\n  background-color: #b3a4c4;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #b3a4c4;\n  border: none;\n  padding: 15px 32px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  min-width: 100%;\n  padding: 15px 32px;\n}\n\np[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpbi1jYXJkL2xvZ2luLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4tY2FyZC9sb2dpbi1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm5hdi1saW5rLFxuYnV0dG9uLFxucCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsaWNlXCIsIHNlcmlmO1xufVxuXG4ubmF2LWxpbmsge1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxubmF2IHtcbiAgei1pbmRleDogNjtcbn1cblxuLm5hdmJhci1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2E0YzQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2E0YzQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xufVxuXG5wIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuIl19 */',
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            LoginCardComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-login-card",
                    templateUrl: "./login-card.component.html",
                    styleUrls: ["./login-card.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__[
                      "AuthService"
                    ],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                },
                {
                  type:
                    src_app_user_service__WEBPACK_IMPORTED_MODULE_3__[
                      "UserService"
                    ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "68BK":
      /*!************************************!*\
  !*** ./src/app/records.service.ts ***!
  \************************************/
      /*! exports provided: RecordsService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "RecordsService",
          function () {
            return RecordsService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */ "tk/3"
        );

        class RecordsService {
          constructor(http) {
            this.http = http;
          }
          getData() {
            return this.http.get("/api/fake-data.php");
          }
        }
        RecordsService.ɵfac = function RecordsService_Factory(t) {
          return new (t || RecordsService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
            )
          );
        };
        RecordsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({ token: RecordsService, factory: RecordsService.ɵfac });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            RecordsService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[
                      "HttpClient"
                    ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "8ZFQ":
      /*!************************************!*\
  !*** ./src/app/catalog.service.ts ***!
  \************************************/
      /*! exports provided: CatalogService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CatalogService",
          function () {
            return CatalogService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */ "tk/3"
        );

        class CatalogService {
          constructor(http) {
            this.http = http;
          }
          getCatalog() {
            return this.http.get("/api/catalog");
          }
          getItem(item) {
            return this.http.get("/api/item/" + item);
          }
          searchItem(item) {
            return this.http.get("/api/search/" + item);
          }
        }
        CatalogService.ɵfac = function CatalogService_Factory(t) {
          return new (t || CatalogService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
            )
          );
        };
        CatalogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: CatalogService,
          factory: CatalogService.ɵfac,
          providedIn: "root",
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            CatalogService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [
                  {
                    providedIn: "root",
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[
                      "HttpClient"
                    ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ A5xL:
      /*!**************************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.component.ts ***!
  \**************************************************************/
      /*! exports provided: ProfilePageComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ProfilePageComponent",
          function () {
            return ProfilePageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! src/app/auth.service */ "ccyI"
        );
        /* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! src/app/user.service */ "xdv0"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */ "ofXK"
        );
        /* harmony import */ var _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../modules/footer/footer.component */ "oC4s"
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/forms */ "3Pt+"
        );

        function ProfilePageComponent_div_17_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              13
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "h5",
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "p",
              15
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              5,
              "p",
              16
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              7,
              "p",
              17
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              ctx_r0.customer.name
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              ctx_r0.customer.username
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              ctx_r0.customer.email
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              ctx_r0.customer.address
            );
          }
        }
        function ProfilePageComponent_div_18_Template(rf, ctx) {
          if (rf & 1) {
            const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵgetCurrentView"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              18
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "form",
              19,
              20
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "ngSubmit",
              function ProfilePageComponent_div_18_Template_form_ngSubmit_1_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r4
                );
                const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵreference"
                ](2);
                const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();
                return ctx_r3.onSubmit(_r2);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "div",
              21
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              4,
              "label",
              22
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              6,
              "input",
              23
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "ngModelChange",
              function ProfilePageComponent_div_18_Template_input_ngModelChange_6_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r4
                );
                const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();
                return (ctx_r5.customer.name = $event);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              7,
              "div",
              21
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              8,
              "label",
              24
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              10,
              "input",
              25
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "ngModelChange",
              function ProfilePageComponent_div_18_Template_input_ngModelChange_10_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r4
                );
                const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();
                return (ctx_r6.customer.username = $event);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              11,
              "div",
              21
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              12,
              "label",
              26
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              13,
              "Email address"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              14,
              "input",
              27
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "ngModelChange",
              function ProfilePageComponent_div_18_Template_input_ngModelChange_14_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r4
                );
                const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();
                return (ctx_r7.customer.email = $event);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              15,
              "small",
              28
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              16,
              "We'll never share your email with anyone else."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              17,
              "div",
              21
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              18,
              "label",
              29
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              20,
              "input",
              30
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "ngModelChange",
              function ProfilePageComponent_div_18_Template_input_ngModelChange_20_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r4
                );
                const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();
                return (ctx_r8.customer.address = $event);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              21,
              "small",
              31
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              22,
              "We'll never share your address with anyone else."
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              23,
              "div",
              21
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              24,
              "label",
              32
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              25,
              "Password"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              26,
              "input",
              33
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "ngModelChange",
              function ProfilePageComponent_div_18_Template_input_ngModelChange_26_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r4
                );
                const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵnextContext"
                ]();
                return (ctx_r9.customer.password = $event);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              27,
              "button",
              34
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵnextContext"
            ]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngModel",
              ctx_r1.customer.name
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngModel",
              ctx_r1.customer.username
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngModel",
              ctx_r1.customer.email
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngModel",
              ctx_r1.customer.address
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngModel",
              ctx_r1.customer.password
            );
          }
        }
        class ProfilePageComponent {
          constructor(Auth, user) {
            this.Auth = Auth;
            this.user = user;
            this.customer = {
              username: "null12",
              cartItems: [],
              cartTotal: 0,
              name: "null",
              email: "null",
              address: "null",
              password: "null",
            };
            this.profileShow = true;
            let email = localStorage.getItem("email");
            this.Auth.getUser(email).subscribe((data) => {
              this.customer.username = data.username;
              this.customer.name = data.name;
              this.customer.email = data.email;
              this.customer.address = data.address;
              this.customer.password = data.password;
            });
          }
          ngOnInit() {}
          editProfileClick() {
            this.profileShow = false;
          }
          profileClick() {
            this.profileShow = true;
          }
          onSubmit(profileForm) {
            let oldEmail = localStorage.getItem("email");
            console.log(oldEmail);
            this.customer.username = profileForm.value.username;
            this.customer.name = profileForm.value.name;
            this.customer.email = profileForm.value.email;
            this.customer.address = profileForm.value.address;
            this.customer.password = profileForm.value.password;
            localStorage.setItem("username", profileForm.value.username);
            localStorage.setItem("name", profileForm.value.name);
            localStorage.setItem("email", profileForm.value.email);
            localStorage.setItem("address", profileForm.value.address);
            localStorage.setItem("password", profileForm.value.password);
            this.user
              .updateUser(
                oldEmail,
                this.customer.username,
                this.customer.name,
                this.customer.email,
                this.customer.address,
                this.customer.password
              )
              .subscribe((data) => {
                if (data.success) {
                  alert("Your profile was updated");
                } else {
                  alert("Some problem");
                }
              });
          }
        }
        ProfilePageComponent.ɵfac = function ProfilePageComponent_Factory(t) {
          return new (t || ProfilePageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
            )
          );
        };
        ProfilePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: ProfilePageComponent,
          selectors: [["app-profile-page"]],
          decls: 24,
          vars: 2,
          consts: [
            [
              "src",
              "../../../assets/cats.png",
              "alt",
              "cats walking across the page",
              1,
              "header-img",
            ],
            [1, "display-4"],
            [1, "pb-5"],
            [1, "container", "d-flex", "justify-content-center"],
            [1, "card", "text-center"],
            [1, "card-header"],
            [1, "nav", "nav-tabs", "card-header-tabs"],
            [1, "nav-item"],
            [1, "nav-link", "active", 3, "click"],
            [1, "nav-link", 3, "click"],
            [1, "card-body"],
            [
              "class",
              "tab-pane active",
              "id",
              "profile",
              "role",
              "tabpanel",
              "aria-labelledby",
              "profile-tab",
              4,
              "ngIf",
            ],
            [
              "class",
              "tab-pane",
              "id",
              "edit-profile",
              "role",
              "tabpanel",
              "aria-labelledby",
              "edit-profile-tab",
              4,
              "ngIf",
            ],
            [
              "id",
              "profile",
              "role",
              "tabpanel",
              "aria-labelledby",
              "profile-tab",
              1,
              "tab-pane",
              "active",
            ],
            [1, "card-title"],
            [1, "username"],
            [1, "email"],
            [1, "address"],
            [
              "id",
              "edit-profile",
              "role",
              "tabpanel",
              "aria-labelledby",
              "edit-profile-tab",
              1,
              "tab-pane",
            ],
            [3, "ngSubmit"],
            ["profile", "ngForm"],
            [1, "form-group"],
            ["for", "exampleInputName1"],
            [
              "name",
              "name",
              "ngModel",
              "",
              "id",
              "exampleInputName1",
              "aria-describedby",
              "nameHelp",
              1,
              "form-control",
              3,
              "ngModel",
              "ngModelChange",
            ],
            ["for", "exampleInputUsername1"],
            [
              "name",
              "username",
              "ngModel",
              "",
              "id",
              "exampleInputUsername1",
              "aria-describedby",
              "usernameHelp",
              1,
              "form-control",
              3,
              "ngModel",
              "ngModelChange",
            ],
            ["for", "exampleInputEmail1"],
            [
              "name",
              "email",
              "ngModel",
              "",
              "id",
              "exampleInputEmail1",
              "aria-describedby",
              "emailHelp",
              1,
              "form-control",
              3,
              "ngModel",
              "ngModelChange",
            ],
            ["id", "emailHelp", 1, "form-text", "text-muted"],
            ["for", "exampleInputAddress1"],
            [
              "name",
              "address",
              "ngModel",
              "",
              "id",
              "exampleInputAddress1",
              "aria-describedby",
              "addressHelp",
              1,
              "form-control",
              3,
              "ngModel",
              "ngModelChange",
            ],
            ["id", "addressHelp", 1, "form-text", "text-muted"],
            ["for", "exampleInputPassword1"],
            [
              "name",
              "password",
              "ngModel",
              "",
              "id",
              "exampleInputPassword1",
              1,
              "form-control",
              3,
              "ngModel",
              "ngModelChange",
            ],
            ["type", "submit", 1, "btn", "btn-primary"],
          ],
          template: function ProfilePageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                1,
                "img",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "h1",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                3,
                "User Profile"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "main"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "div",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "div",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "div",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "div",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "ul",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "li",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "a",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function ProfilePageComponent_Template_a_click_11_listener() {
                  return ctx.profileClick();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                12,
                "Profile"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                13,
                "li",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                14,
                "a",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function ProfilePageComponent_Template_a_click_14_listener() {
                  return ctx.editProfileClick();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                15,
                "Edit Profile"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "div",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                17,
                ProfilePageComponent_div_17_Template,
                9,
                4,
                "div",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                18,
                ProfilePageComponent_div_18_Template,
                29,
                5,
                "div",
                12
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                19,
                "div",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                20,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                21,
                "ad for cat hat goes here"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                22,
                "footer"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                23,
                "app-footer"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                ctx.profileShow
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngIf",
                !ctx.profileShow
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"],
            _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__[
              "FooterComponent"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__[
              "ɵangular_packages_forms_forms_y"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"],
          ],
          styles: [
            'h1[_ngcontent-%COMP%] {\n  font-family: "Alice", serif;\n}\n\nheader[_ngcontent-%COMP%] {\n  align-content: center;\n  text-align: center;\n}\n\n.header-img[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #5d3980;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtcGFnZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgZm9udC1mYW1pbHk6IFwiQWxpY2VcIiwgc2VyaWY7XG59XG5cbmhlYWRlciB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWltZyB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMzk4MDtcbn1cbiJdfQ== */',
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ProfilePageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-profile-page",
                    templateUrl: "./profile-page.component.html",
                    styleUrls: ["./profile-page.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__[
                      "AuthService"
                    ],
                },
                {
                  type:
                    src_app_user_service__WEBPACK_IMPORTED_MODULE_2__[
                      "UserService"
                    ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ AytR:
      /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
      /*! exports provided: environment */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "environment",
          function () {
            return environment;
          }
        );
        // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.
        const environment = {
          production: false,
        };
        /*
         * For easier debugging in development mode, you can import the following file
         * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
         *
         * This import should be commented out in production mode because it will have a negative impact
         * on performance if an error is thrown.
         */
        // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

        /***/
      },

    /***/ JFIp:
      /*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
      /*! exports provided: HomePageComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HomePageComponent",
          function () {
            return HomePageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );
        /* harmony import */ var _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../modules/footer/footer.component */ "oC4s"
        );

        class HomePageComponent {
          constructor() {}
          ngOnInit() {}
        }
        HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
          return new (t || HomePageComponent)();
        };
        HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: HomePageComponent,
          selectors: [["app-home-page"]],
          decls: 53,
          vars: 0,
          consts: [
            ["lang", "en"],
            ["charset", "utf-8"],
            [
              "name",
              "viewport",
              "content",
              "width=device-width, initial-scale=1, shrink-to-fit=no",
            ],
            [
              "id",
              "carouselExampleCaptions",
              "data-ride",
              "carousel",
              1,
              "carousel",
              "slide",
            ],
            [1, "carousel-indicators"],
            [
              "data-target",
              "#carouselExampleCaptions",
              "data-slide-to",
              "0",
              1,
              "active",
            ],
            ["data-target", "#carouselExampleCaptions", "data-slide-to", "1"],
            ["data-target", "#carouselExampleCaptions", "data-slide-to", "2"],
            [1, "carousel-inner"],
            [1, "carousel-item", "active"],
            [
              "src",
              "./../../../assets/Cat_SlideShow_01.jpg",
              "alt",
              "...",
              1,
              "d-block",
              "w-100",
            ],
            [1, "carousel-caption", "d-none", "d-md-block"],
            ["type", "button", 1, "btn", "btn-outline-success"],
            [1, "carousel-item"],
            [
              "src",
              "./../../../assets/Cat_SlideShow_02.jpg",
              "alt",
              "...",
              1,
              "d-block",
              "w-100",
            ],
            [
              "src",
              "./../../../assets/Cat_SlideShow_03.jpg",
              "alt",
              "...",
              1,
              "d-block",
              "w-100",
            ],
            [
              "href",
              "#carouselExampleCaptions",
              "role",
              "button",
              "data-slide",
              "prev",
              1,
              "carousel-control-prev",
            ],
            ["aria-hidden", "true", 1, "carousel-control-prev-icon"],
            [1, "sr-only"],
            [
              "href",
              "#carouselExampleCaptions",
              "role",
              "button",
              "data-slide",
              "next",
              1,
              "carousel-control-next",
            ],
            ["aria-hidden", "true", 1, "carousel-control-next-icon"],
            ["routerLink", "/records"],
          ],
          template: function HomePageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "html",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "head"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                2,
                "meta",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                3,
                "meta",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "title"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                5,
                "Mad Catter"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "body"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "div",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "ol",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                9,
                "li",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                10,
                "li",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                11,
                "li",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                12,
                "div",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                13,
                "div",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                14,
                "img",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                15,
                "div",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "h5"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                17,
                "The Purr-fect Hat"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                18,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                19,
                "Nulla vitae elit libero, a pharetra augue mollis interdum."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                20,
                "button",
                12
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                21,
                " Shop Now "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                22,
                "div",
                13
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                23,
                "img",
                14
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                24,
                "div",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                25,
                "h5"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                26,
                "Purr-haps this one?"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                27,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                28,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                29,
                "button",
                12
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                30,
                " Shop Now "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                31,
                "div",
                13
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                32,
                "img",
                15
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                33,
                "div",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                34,
                "h5"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                35,
                "Paw-sibilities are endless!"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                36,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                37,
                " Praesent commodo cursus magna, vel scelerisque nisl consectetur. "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                38,
                "button",
                12
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                39,
                " Shop Now "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                40,
                "a",
                16
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                41,
                "span",
                17
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                42,
                "span",
                18
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                43,
                "Previous"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                44,
                "a",
                19
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                45,
                "span",
                20
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                46,
                "span",
                18
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Next");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                48,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                49,
                "a",
                21
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "???");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                51,
                "footer"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                52,
                "app-footer"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"],
            _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__[
              "FooterComponent"
            ],
          ],
          styles: [
            '.carousel-caption[_ngcontent-%COMP%] {\n  font-family: "Alice", serif;\n  position: absolute;\n  left: 0;\n  width: 30%;\n  top: 0%;\n  margin-left: 27%;\n  text-align: left;\n  color: darkturquoise;\n}\n\n.carousel-caption[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 3em;\n  width: 200%;\n}\n\n.btn-outline-success[_ngcontent-%COMP%] {\n  color: white;\n  background-image: none;\n  background-color: transparent;\n  border-color: whitesmoke;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsVUFBVTtFQUNWLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNhcHRpb24ge1xuICBmb250LWZhbWlseTogXCJBbGljZVwiLCBzZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMzAlO1xuICB0b3A6IDAlO1xuICBtYXJnaW4tbGVmdDogMjclO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogZGFya3R1cnF1b2lzZTtcbn1cblxuLmNhcm91c2VsLWNhcHRpb24gaDUge1xuICBmb250LXNpemU6IDNlbTtcbiAgd2lkdGg6IDIwMCU7XG59XG5cbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuIl19 */',
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            HomePageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-home-page",
                    templateUrl: "./home-page.component.html",
                    styleUrls: ["./home-page.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ QX6l:
      /*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
      /*! exports provided: DashboardComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "DashboardComponent",
          function () {
            return DashboardComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../user.service */ "xdv0"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );

        class DashboardComponent {
          constructor(user, router) {
            this.user = user;
            this.router = router;
            this.total = "Loading your total...";
            this.email = "Getting your email...";
          }
          ngOnInit() {
            this.user.getData().subscribe((data) => {
              if (data.status) {
                this.total = data.total;
                this.email = data.email;
              } else {
                this.router.navigate(["logout"]);
              }
            });
          }
          updateTotal(event) {
            const value = event.target.parentNode.querySelector("#myTotal")
              .value;
            this.user.updateTotal(value).subscribe((data) => {
              if (data.success) {
                alert("Your total was updated");
              } else {
                alert("Some problem");
              }
            });
          }
        }
        DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
          return new (t || DashboardComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
            )
          );
        };
        DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: DashboardComponent,
          selectors: [["app-dashboard"]],
          decls: 8,
          vars: 3,
          consts: [
            ["id", "message"],
            ["routerLink", "/logout", 1, "button"],
            ["id", "controls"],
            ["type", "text", "id", "myTotal", 3, "value"],
            ["type", "button", "value", "Update Total", 3, "click"],
          ],
          template: function DashboardComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "a",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logout");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "div",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                6,
                "input",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "input",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function DashboardComponent_Template_input_click_7_listener(
                  $event
                ) {
                  return ctx.updateTotal($event);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](
                "",
                ctx.total,
                " by ",
                ctx.email,
                ""
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵpropertyInterpolate"
              ]("value", ctx.total);
            }
          },
          directives: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"],
          ],
          styles: [
            "#message[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 40px;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.button[_ngcontent-%COMP%] {\n  padding: 20px;\n  color: white;\n  font-size: 30px;\n  border-radius: 10px;\n  background: black;\n  border: 1px solid black;\n  text-decoration: none;\n  margin: 20px;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            DashboardComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-dashboard",
                    templateUrl: "./dashboard.component.html",
                    styleUrls: ["./dashboard.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ RhcK:
      /*!**********************************************************!*\
  !*** ./src/app/modules/cart-item/cart-item.component.ts ***!
  \**********************************************************/
      /*! exports provided: CartItemComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CartItemComponent",
          function () {
            return CartItemComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ "ofXK"
        );
        //Input allows usage of cart-item in cart-page.component.html with selector

        const _c0 = ["app-cart-item", ""];
        class CartItemComponent {
          constructor() {}
          ngOnInit() {}
        }
        CartItemComponent.ɵfac = function CartItemComponent_Factory(t) {
          return new (t || CartItemComponent)();
        };
        CartItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: CartItemComponent,
          selectors: [["", "app-cart-item", ""]],
          inputs: { items: "items" },
          attrs: _c0,
          decls: 21,
          vars: 9,
          consts: [
            [1, "align-middle", "text-center"],
            ["href", "#", 1, "btn", "btn-primary"],
            [1, "px-2", "py-2", "d-inline-block"],
            [
              "width",
              "80",
              1,
              "img-fluid",
              "rounded",
              "shadow-sm",
              "align-self-center",
              3,
              "src",
              "alt",
            ],
            [1, "ml-3", "d-inline-block", "align-middle", "text-center"],
            [1, "mb-0"],
            [
              "href",
              "#",
              1,
              "text-dark",
              "d-inline-block",
              "align-middle",
              "text-right",
            ],
          ],
          template: function CartItemComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "td",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "a",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "X");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "td"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "div",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                5,
                "img",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "div",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "h5",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "a",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "td",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "strong"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                13,
                "td",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                14,
                "strong"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "td",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                17,
                "strong"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                18,
                "span"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](
                20,
                "number"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵpropertyInterpolate"
              ](
                "src",
                ctx.items.itemImg,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵpropertyInterpolate"
              ]("alt", ctx.items.itemName);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                ctx.items.itemName
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
                "$",
                ctx.items.itemPrice,
                ""
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                ctx.items.itemQuantity
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
                "$",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](
                  20,
                  6,
                  ctx.items.itemPrice * ctx.items.itemQuantity,
                  "1.2-2"
                ),
                ""
              );
            }
          },
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]],
          styles: [
            'h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  font-family: "Alice", serif;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #5d3980;\n}\n\n.ccontainer[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 2px 2px #888888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNSxcbnAge1xuICBmb250LWZhbWlseTogXCJBbGljZVwiLCBzZXJpZjtcbn1cblxucCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDM5ODA7XG59XG5cbi5jY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICM4ODg4ODg7XG59XG4iXX0= */',
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            CartItemComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "[app-cart-item]",
                    templateUrl: "./cart-item.component.html",
                    styleUrls: ["./cart-item.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            {
              items: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
                },
              ],
            }
          );
        })();

        /***/
      },

    /***/ Sy1n:
      /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
      /*! exports provided: AppComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppComponent",
          function () {
            return AppComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _modules_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./modules/nav-bar/nav-bar.component */ "xBqr"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );

        class AppComponent {
          constructor() {
            this.title = "cat-hats";
          }
        }
        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)();
        };
        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: AppComponent,
          selectors: [["app-root"]],
          decls: 6,
          vars: 0,
          consts: [
            [
              "href",
              "https://fonts.googleapis.com/css2?family=Alice&display=swap",
              "rel",
              "stylesheet",
            ],
            [1, "mainContainer"],
          ],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "head"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                1,
                "link",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "nav"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                3,
                "app-nav-bar"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "div",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                5,
                "router-outlet"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [
            _modules_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__[
              "NavBarComponent"
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"],
          ],
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AppComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-root",
                    templateUrl: "./app.component.html",
                    styleUrls: ["./app.component.css"],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ ZAI4:
      /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
      /*! exports provided: AppModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppModule",
          function () {
            return AppModule;
          }
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/platform-browser */ "jhN1"
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app-routing.module */ "vY5A"
        );
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./app.component */ "Sy1n"
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common/http */ "tk/3"
        );
        /* harmony import */ var _pages_catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./pages/catalog-page/catalog-page.component */ "rY3q"
        );
        /* harmony import */ var _modules_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./modules/item-card/item-card.component */ "4dcm"
        );
        /* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./pages/home-page/home-page.component */ "JFIp"
        );
        /* harmony import */ var _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./pages/cart-page/cart-page.component */ "2TiI"
        );
        /* harmony import */ var _modules_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./modules/nav-bar/nav-bar.component */ "xBqr"
        );
        /* harmony import */ var _modules_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./modules/cart-item/cart-item.component */ "RhcK"
        );
        /* harmony import */ var _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./modules/footer/footer.component */ "oC4s"
        );
        /* harmony import */ var _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./pages/profile-page/profile-page.component */ "A5xL"
        );
        /* harmony import */ var _modules_login_card_login_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./modules/login-card/login-card.component */ "4h5o"
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! @angular/forms */ "3Pt+"
        );
        /* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./pages/register-page/register-page.component */ "lmRq"
        );
        /* harmony import */ var _pages_records_page_records_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./pages/records-page/records-page.component */ "i2XY"
        );
        /* harmony import */ var _records_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./records.service */ "68BK"
        );
        /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./login/login.component */ "vtpD"
        );
        /* harmony import */ var _home_test_home_test_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./home-test/home-test.component */ "jpLA"
        );
        /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./auth.guard */ "tIkO"
        );
        /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./user.service */ "xdv0"
        );
        /* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./logout/logout.component */ "n1B2"
        );
        /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./dashboard/dashboard.component */ "QX6l"
        );
        /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./register/register.component */ "1W4x"
        );
        /* harmony import */ var _modules_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./modules/search-bar/search-bar.component */ "zsl1"
        );
        /* harmony import */ var _pages_item_page_item_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./pages/item-page/item-page.component */ "w+21"
        );
        /* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./catalog.service */ "8ZFQ"
        );
        /* harmony import */ var _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./pages/search-page/search-page.component */ "sdyP"
        );

        class AppModule {}
        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineNgModule"
        ]({
          type: AppModule,
          bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
          ],
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineInjector"
        ]({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [
            _records_service__WEBPACK_IMPORTED_MODULE_17__["RecordsService"],
            _user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"],
            _auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"],
            _catalog_service__WEBPACK_IMPORTED_MODULE_27__["CatalogService"],
          ],
          imports: [
            [
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                "BrowserModule"
              ],
              _app_routing_module__WEBPACK_IMPORTED_MODULE_2__[
                "AppRoutingModule"
              ],
              _angular_common_http__WEBPACK_IMPORTED_MODULE_4__[
                "HttpClientModule"
              ],
              _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            ],
          ],
        });
        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              "ɵɵsetNgModuleScope"
            ](AppModule, {
              declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_5__[
                  "CatalogPageComponent"
                ],
                _modules_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_6__[
                  "ItemCardComponent"
                ],
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__[
                  "HomePageComponent"
                ],
                _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_8__[
                  "CartPageComponent"
                ],
                _modules_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__[
                  "NavBarComponent"
                ],
                _modules_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_10__[
                  "CartItemComponent"
                ],
                _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__[
                  "FooterComponent"
                ],
                _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_12__[
                  "ProfilePageComponent"
                ],
                _modules_login_card_login_card_component__WEBPACK_IMPORTED_MODULE_13__[
                  "LoginCardComponent"
                ],
                _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_15__[
                  "RegisterPageComponent"
                ],
                _pages_records_page_records_page_component__WEBPACK_IMPORTED_MODULE_16__[
                  "RecordsPageComponent"
                ],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__[
                  "LoginComponent"
                ],
                _home_test_home_test_component__WEBPACK_IMPORTED_MODULE_19__[
                  "HomeTESTComponent"
                ],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_22__[
                  "LogoutComponent"
                ],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__[
                  "DashboardComponent"
                ],
                _register_register_component__WEBPACK_IMPORTED_MODULE_24__[
                  "RegisterComponent"
                ],
                _modules_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_25__[
                  "SearchBarComponent"
                ],
                _pages_item_page_item_page_component__WEBPACK_IMPORTED_MODULE_26__[
                  "ItemPageComponent"
                ],
                _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_28__[
                  "SearchPageComponent"
                ],
              ],
              imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                  "BrowserModule"
                ],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__[
                  "AppRoutingModule"
                ],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__[
                  "HttpClientModule"
                ],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
              ],
            });
        })();
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
            AppModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
                args: [
                  {
                    declarations: [
                      _app_component__WEBPACK_IMPORTED_MODULE_3__[
                        "AppComponent"
                      ],
                      _pages_catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_5__[
                        "CatalogPageComponent"
                      ],
                      _modules_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_6__[
                        "ItemCardComponent"
                      ],
                      _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__[
                        "HomePageComponent"
                      ],
                      _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_8__[
                        "CartPageComponent"
                      ],
                      _modules_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__[
                        "NavBarComponent"
                      ],
                      _modules_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_10__[
                        "CartItemComponent"
                      ],
                      _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__[
                        "FooterComponent"
                      ],
                      _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_12__[
                        "ProfilePageComponent"
                      ],
                      _modules_login_card_login_card_component__WEBPACK_IMPORTED_MODULE_13__[
                        "LoginCardComponent"
                      ],
                      _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_15__[
                        "RegisterPageComponent"
                      ],
                      _pages_records_page_records_page_component__WEBPACK_IMPORTED_MODULE_16__[
                        "RecordsPageComponent"
                      ],
                      _login_login_component__WEBPACK_IMPORTED_MODULE_18__[
                        "LoginComponent"
                      ],
                      _home_test_home_test_component__WEBPACK_IMPORTED_MODULE_19__[
                        "HomeTESTComponent"
                      ],
                      _logout_logout_component__WEBPACK_IMPORTED_MODULE_22__[
                        "LogoutComponent"
                      ],
                      _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__[
                        "DashboardComponent"
                      ],
                      _register_register_component__WEBPACK_IMPORTED_MODULE_24__[
                        "RegisterComponent"
                      ],
                      _modules_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_25__[
                        "SearchBarComponent"
                      ],
                      _pages_item_page_item_page_component__WEBPACK_IMPORTED_MODULE_26__[
                        "ItemPageComponent"
                      ],
                      _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_28__[
                        "SearchPageComponent"
                      ],
                    ],
                    imports: [
                      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__[
                        "BrowserModule"
                      ],
                      _app_routing_module__WEBPACK_IMPORTED_MODULE_2__[
                        "AppRoutingModule"
                      ],
                      _angular_common_http__WEBPACK_IMPORTED_MODULE_4__[
                        "HttpClientModule"
                      ],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_14__[
                        "FormsModule"
                      ],
                    ],
                    providers: [
                      _records_service__WEBPACK_IMPORTED_MODULE_17__[
                        "RecordsService"
                      ],
                      _user_service__WEBPACK_IMPORTED_MODULE_21__[
                        "UserService"
                      ],
                      _auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"],
                      _catalog_service__WEBPACK_IMPORTED_MODULE_27__[
                        "CatalogService"
                      ],
                    ],
                    bootstrap: [
                      _app_component__WEBPACK_IMPORTED_MODULE_3__[
                        "AppComponent"
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ ccyI:
      /*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
      /*! exports provided: AuthService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AuthService",
          function () {
            return AuthService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */ "tk/3"
        );

        class AuthService {
          constructor(http) {
            this.http = http;
            this.loggedInStatus = false;
            //method handling login
            this.getUserDetails = (email, password) => {
              localStorage.setItem("email", email);
              //declare string containing cookie name
              let cookieName = "authToken";
              let token = this.getCookie(cookieName).toString();
              console.log("Token found in browser when logging in: ", token);
              //checks if token is set by getting cookie storing the token
              if (token != "") {
                return this.http.post("/api/login", {
                  token,
                });
              } else {
                //checks if cookie set in document.cookie
                ///post these details to API server, will return user information if correct
                return this.http.post("/api/login", {
                  email,
                  password,
                });
              }
            };
          }
          setLoggedIn(value) {
            this.loggedInStatus = value;
            if (value) localStorage.setItem("loggedIn", "true");
            else localStorage.setItem("loggedIn", "false");
          }
          getisLoggedIn() {
            if (localStorage.getItem("loggedIn") == "true") {
              this.loggedInStatus = true;
            } else if (localStorage.getItem("loggedIn") == "false") {
              this.loggedInStatus = false;
              localStorage.clear();
            }
            return this.loggedInStatus;
          }
          //function retrieves existing cookie on browser, returns "" if no existing cookie
          getCookie(cookieName) {
            var name = cookieName + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(";");
            for (var i = 0; i < ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == " ") {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
          }
          registerUser(username, name, email, address, password) {
            return this.http.post("/api/register", {
              username,
              name,
              email,
              address,
              password,
            });
          }
          getUser(email) {
            return this.http.get("/api/user/" + email);
          }
        }
        AuthService.ɵfac = function AuthService_Factory(t) {
          return new (t || AuthService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
            )
          );
        };
        AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: AuthService,
          factory: AuthService.ɵfac,
          providedIn: "root",
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AuthService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [
                  {
                    providedIn: "root",
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[
                      "HttpClient"
                    ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ i2XY:
      /*!**************************************************************!*\
  !*** ./src/app/pages/records-page/records-page.component.ts ***!
  \**************************************************************/
      /*! exports provided: RecordsPageComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "RecordsPageComponent",
          function () {
            return RecordsPageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var src_app_records_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! src/app/records.service */ "68BK"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */ "ofXK"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );

        function RecordsPageComponent_tr_8_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "tr"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "td"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              3,
              "td"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              5,
              "td"
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const record_r1 = ctx.$implicit;
            const myIndex_r2 = ctx.index;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              myIndex_r2 + 1
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              record_r1.name
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              record_r1.mad
            );
          }
        }
        class RecordsPageComponent {
          constructor(myFirstService) {
            this.myFirstService = myFirstService;
            this.records = [];
          }
          ngOnInit() {
            this.myFirstService.getData().subscribe((data) => {
              this.records = data.obj;
            });
          }
        }
        RecordsPageComponent.ɵfac = function RecordsPageComponent_Factory(t) {
          return new (t || RecordsPageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              src_app_records_service__WEBPACK_IMPORTED_MODULE_1__[
                "RecordsService"
              ]
            )
          );
        };
        RecordsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: RecordsPageComponent,
          selectors: [["app-records-page"]],
          decls: 11,
          vars: 1,
          consts: [
            [4, "ngFor", "ngForOf"],
            ["routerLink", "/"],
          ],
          template: function RecordsPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "table"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "tr"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "td"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "S No.");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "td"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Value1");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "td"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Value2");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                8,
                RecordsPageComponent_tr_8_Template,
                7,
                3,
                "tr",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "a",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                10,
                "GO BACK"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngForOf",
                ctx.records
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"],
          ],
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY29yZHMtcGFnZS9yZWNvcmRzLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            RecordsPageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-records-page",
                    templateUrl: "./records-page.component.html",
                    styleUrls: ["./records-page.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    src_app_records_service__WEBPACK_IMPORTED_MODULE_1__[
                      "RecordsService"
                    ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ jpLA:
      /*!**************************************************!*\
  !*** ./src/app/home-test/home-test.component.ts ***!
  \**************************************************/
      /*! exports provided: HomeTESTComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HomeTESTComponent",
          function () {
            return HomeTESTComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );

        class HomeTESTComponent {
          constructor() {}
          ngOnInit() {}
        }
        HomeTESTComponent.ɵfac = function HomeTESTComponent_Factory(t) {
          return new (t || HomeTESTComponent)();
        };
        HomeTESTComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: HomeTESTComponent,
          selectors: [["app-home-test"]],
          decls: 9,
          vars: 0,
          consts: [
            ["id", "buttons"],
            ["routerLink", "/login", 1, "button"],
            ["routerLink", "/register-test", 1, "button"],
            ["routerLink", "/dashboard", 1, "button"],
          ],
          template: function HomeTESTComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "h1"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                1,
                "MadCatter Test area"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "a",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                4,
                " Login "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "a",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                6,
                " Register"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "a",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                8,
                " Dashboard"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"],
          ],
          styles: [
            "h1[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  border-bottom: 1px solid #eee;\n}\n\n#buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 500px;\n}\n\n.button[_ngcontent-%COMP%] {\n  padding: 20px;\n  color: white;\n  font-size: 30px;\n  border-radius: 10px;\n  background: black;\n  border: 1px solid black;\n  text-decoration: none;\n  margin: 20px;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS10ZXN0L2hvbWUtdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUtdGVzdC9ob21lLXRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cblxuI2J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            HomeTESTComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-home-test",
                    templateUrl: "./home-test.component.html",
                    styleUrls: ["./home-test.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ lmRq:
      /*!****************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.ts ***!
  \****************************************************************/
      /*! exports provided: RegisterPageComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "RegisterPageComponent",
          function () {
            return RegisterPageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../auth.service */ "ccyI"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */ "3Pt+"
        );

        class RegisterPageComponent {
          constructor(auth, router) {
            this.auth = auth;
            this.router = router;
            this.customer = {
              username: "",
              cartItems: [],
              cartTotal: 0,
              name: "",
              email: "",
              address: "",
              password: "",
            };
            this.cpassword = "";
          }
          ngOnInit() {}
          registerUser(registerForm) {
            const errors = [];
            if (this.customer.password != this.cpassword) {
              errors.push("Passwords do not match.");
              window.alert("Passwords do not match.");
            }
            console.log(errors);
            console.log(this.customer);
            if (errors.length == 0) {
              this.auth
                .registerUser(
                  this.customer.username,
                  this.customer.name,
                  this.customer.email,
                  this.customer.address,
                  this.customer.password
                )
                .subscribe((data) => {
                  console.log(data);
                  if (data.success) {
                    console.log("User registered.");
                    window.alert(data.message);
                    this.router.navigate(["login"]);
                  } else window.alert(data.message);
                });
            }
            console.log(this.customer.username, this.customer.password);
          }
        }
        RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) {
          return new (t || RegisterPageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
            )
          );
        };
        RegisterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: RegisterPageComponent,
          selectors: [["app-register-page"]],
          decls: 54,
          vars: 6,
          consts: [
            [1, "container", "py-3", "text-center"],
            [1, "display-4"],
            [
              "href",
              "//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css",
              "rel",
              "stylesheet",
            ],
            [1, "col-md-7", "col-lg-6", "ml-auto"],
            ["action", "#", 3, "ngSubmit"],
            ["UserRegistrationForm", "ngForm"],
            [1, "row"],
            [1, "input-group", "col-lg-12", "mb-4"],
            [1, "input-group-prepend"],
            [
              1,
              "input-group-text",
              "bg-white",
              "px-4",
              "border-md",
              "border-right-0",
            ],
            [1, "fa", "fa-user", "text-muted"],
            [
              "id",
              "name",
              "type",
              "text",
              "name",
              "name",
              "placeholder",
              "Name",
              1,
              "form-control",
              "bg-white",
              "border-left-0",
              "border-md",
              3,
              "ngModel",
              "ngModelChange",
            ],
            ["Name", "ngModel"],
            [1, "fa", "fa-home", "text-muted"],
            [
              "id",
              "address",
              "type",
              "text",
              "name",
              "address",
              "placeholder",
              "Street Address (i.e. Address, City, State, Zipcode)",
              1,
              "form-control",
              "bg-white",
              "border-left-0",
              "border-md",
              3,
              "ngModel",
              "ngModelChange",
            ],
            ["Address", "ngModel"],
            [
              "id",
              "username",
              "type",
              "text",
              "name",
              "username",
              "placeholder",
              "Username",
              1,
              "form-control",
              "bg-white",
              "border-left-0",
              "border-md",
              3,
              "ngModel",
              "ngModelChange",
            ],
            ["Username", "ngModel"],
            [1, "fa", "fa-envelope", "text-muted"],
            [
              "id",
              "email",
              "type",
              "email",
              "name",
              "email",
              "placeholder",
              "Email",
              "required",
              "",
              1,
              "validate",
              "form-control",
              "bg-white",
              "border-left-0",
              "border-md",
              3,
              "ngModel",
              "ngModelChange",
            ],
            ["Email", "ngModel"],
            [1, "input-group", "col-lg-6", "mb-4"],
            [1, "fa", "fa-lock", "text-muted"],
            [
              "id",
              "password",
              "type",
              "password",
              "name",
              "password",
              "placeholder",
              "Password",
              "required",
              "",
              1,
              "validate",
              "form-control",
              "bg-white",
              "border-left-0",
              "border-md",
              3,
              "ngModel",
              "ngModelChange",
            ],
            ["Password", "ngModel"],
            [
              "id",
              "cpassword",
              "type",
              "password",
              "name",
              "cpassword",
              "placeholder",
              "Confirm Password",
              "required",
              "",
              1,
              "validate",
              "form-control",
              "bg-white",
              "border-left-0",
              "border-md",
              3,
              "ngModel",
              "ngModelChange",
            ],
            ["CPassword", "ngModel"],
            [1, "form-group", "col-lg-12", "mx-auto", "mb-0"],
            [
              "type",
              "submit",
              1,
              "btn",
              "btn-primary",
              "btn-block",
              "py-2",
              "font-weight-bold",
            ],
            [1, "text-center", "w-100"],
            [1, "text-muted", "font-weight-bold"],
            ["href", "#", 1, "text-primary", "ml-2"],
          ],
          template: function RegisterPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵgetCurrentView"
              ]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "body"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "h1",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                4,
                "Account Registration"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                5,
                "link",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "div",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "form",
                4,
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "ngSubmit",
                function RegisterPageComponent_Template_form_ngSubmit_7_listener() {
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                    _r7
                  );
                  const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                    "ɵɵreference"
                  ](8);
                  return ctx.registerUser(_r0);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "div",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "div",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "div",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                12,
                "span",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                13,
                "i",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                14,
                "input",
                11,
                12
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "ngModelChange",
                function RegisterPageComponent_Template_input_ngModelChange_14_listener(
                  $event
                ) {
                  return (ctx.customer.name = $event);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "div",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                17,
                "div",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                18,
                "span",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                19,
                "i",
                13
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                20,
                "input",
                14,
                15
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "ngModelChange",
                function RegisterPageComponent_Template_input_ngModelChange_20_listener(
                  $event
                ) {
                  return (ctx.customer.address = $event);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                22,
                "div",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                23,
                "div",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                24,
                "span",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                25,
                "i",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                26,
                "input",
                16,
                17
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "ngModelChange",
                function RegisterPageComponent_Template_input_ngModelChange_26_listener(
                  $event
                ) {
                  return (ctx.customer.username = $event);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                28,
                "div",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                29,
                "div",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                30,
                "span",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                31,
                "i",
                18
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                32,
                "input",
                19,
                20
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "ngModelChange",
                function RegisterPageComponent_Template_input_ngModelChange_32_listener(
                  $event
                ) {
                  return (ctx.customer.email = $event);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                34,
                "div",
                21
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                35,
                "div",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                36,
                "span",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                37,
                "i",
                22
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                38,
                "input",
                23,
                24
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "ngModelChange",
                function RegisterPageComponent_Template_input_ngModelChange_38_listener(
                  $event
                ) {
                  return (ctx.customer.password = $event);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                40,
                "div",
                21
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                41,
                "div",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                42,
                "span",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                43,
                "i",
                22
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                44,
                "input",
                25,
                26
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "ngModelChange",
                function RegisterPageComponent_Template_input_ngModelChange_44_listener(
                  $event
                ) {
                  return (ctx.cpassword = $event);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                46,
                "div",
                27
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                47,
                "button",
                28
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                48,
                " Create Your Account "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                49,
                "div",
                29
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                50,
                "p",
                30
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                51,
                " Already Registered? "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                52,
                "a",
                31
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Login");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngModel",
                ctx.customer.name
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngModel",
                ctx.customer.address
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngModel",
                ctx.customer.username
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngModel",
                ctx.customer.email
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngModel",
                ctx.customer.password
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngModel",
                ctx.cpassword
              );
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
              "ɵangular_packages_forms_forms_y"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"],
          ],
          styles: [
            'h1[_ngcontent-%COMP%] {\n  font-family: "Alice", serif;\n}\n\nheader[_ngcontent-%COMP%] {\n  align-content: center;\n  text-align: center;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #00b09b;\n  background: linear-gradient(to right, #00b084, #43e085);\n  min-height: 100vh;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #5d3980;\n}\n\n.ccontainer[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 2px 2px #888888;\n}\n\n.form-control[_ngcontent-%COMP%]:not(select) {\n  padding: 1.5rem 0.5rem;\n}\n\nselect.form-control[_ngcontent-%COMP%] {\n  height: 52px;\n  padding-left: 0.5rem;\n}\n\n.form-control[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #ccc;\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #ccc;\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #b3a4c4;\n  border: none;\n  padding: 15px 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBRW5CLHVEQUF1RDtFQUN2RCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBSkE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsaWNlXCIsIHNlcmlmO1xufVxuXG5oZWFkZXIge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICMwMGIwOWI7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBiMDliLCAjOTZjOTNkKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBiMDg0LCAjNDNlMDg1KTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDM5ODA7XG59XG5cbi5jY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICM4ODg4ODg7XG59XG5cbi5mb3JtLWNvbnRyb2w6bm90KHNlbGVjdCkge1xuICBwYWRkaW5nOiAxLjVyZW0gMC41cmVtO1xufVxuXG5zZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cblxuLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjYztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2E0YzQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xufVxuIl19 */',
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            RegisterPageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-register-page",
                    templateUrl: "./register-page.component.html",
                    styleUrls: ["./register-page.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ n1B2:
      /*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
      /*! exports provided: LogoutComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "LogoutComponent",
          function () {
            return LogoutComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../user.service */ "xdv0"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );
        /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../auth.service */ "ccyI"
        );

        class LogoutComponent {
          constructor(user, router, auth) {
            this.user = user;
            this.router = router;
            this.auth = auth;
          }
          ngOnInit() {
            this.user.logout().subscribe((data) => {
              if (data.success) {
                this.router.navigate([""]);
                this.auth.setLoggedIn(false);
              } else {
                window.alert("Some problem");
              }
            });
          }
        }
        LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
          return new (t || LogoutComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
            )
          );
        };
        LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: LogoutComponent,
          selectors: [["app-logout"]],
          decls: 2,
          vars: 0,
          template: function LogoutComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                1,
                "Logging you out!"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            LogoutComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-logout",
                    templateUrl: "./logout.component.html",
                    styleUrls: ["./logout.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                },
                {
                  type:
                    _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ oC4s:
      /*!****************************************************!*\
  !*** ./src/app/modules/footer/footer.component.ts ***!
  \****************************************************/
      /*! exports provided: FooterComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FooterComponent",
          function () {
            return FooterComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );

        class FooterComponent {
          constructor() {}
          ngOnInit() {}
        }
        FooterComponent.ɵfac = function FooterComponent_Factory(t) {
          return new (t || FooterComponent)();
        };
        FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: FooterComponent,
          selectors: [["app-footer"]],
          decls: 7,
          vars: 0,
          consts: [
            [1, "page-footer", "font-small"],
            [1, "footer-copyright", "text-center", "py-3"],
            ["href", "/"],
          ],
          template: function FooterComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "footer",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                2,
                " \u00A9 2020 Copyright: "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "a",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                4,
                "Mad Hatter and Co."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                6,
                "UWF CEN4053 Semester Project"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [
            'footer[_ngcontent-%COMP%] {\n  background-color: #b3a4c4;\n}\np[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\n  font-family: "Alice", serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTs7O0VBR0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNhNGM0O1xufVxucCxcbmEsXG5kaXYge1xuICBmb250LWZhbWlseTogXCJBbGljZVwiLCBzZXJpZjtcbn1cbiJdfQ== */',
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            FooterComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-footer",
                    templateUrl: "./footer.component.html",
                    styleUrls: ["./footer.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ rY3q:
      /*!**************************************************************!*\
  !*** ./src/app/pages/catalog-page/catalog-page.component.ts ***!
  \**************************************************************/
      /*! exports provided: CatalogPageComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CatalogPageComponent",
          function () {
            return CatalogPageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var src_app_catalog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! src/app/catalog.service */ "8ZFQ"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */ "ofXK"
        );
        /* harmony import */ var _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../modules/footer/footer.component */ "oC4s"
        );
        /* harmony import */ var _modules_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../modules/item-card/item-card.component */ "4dcm"
        );

        function CatalogPageComponent_div_10_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              7
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
              1,
              "app-item-card",
              8
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const item_r1 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "items",
              item_r1
            );
          }
        }
        class CatalogPageComponent {
          constructor(Catalog) {
            this.Catalog = Catalog;
            this.pageItems = [];
            this.list = [];
            this.Catalog.getCatalog().subscribe((data) => {
              if (data.success) {
                this.list = data.data;
                let initialList = [];
                this.list.forEach((item) => {
                  initialList.push({
                    itemName: item.title,
                    itemPrice: item.price.toFixed(2),
                    itemID: item._id,
                    itemDescription: item.description,
                    itemQuantity: item.quantity,
                    itemImg: item.img,
                  });
                });
                this.pageItems = initialList;
              } else {
                alert(
                  "The catalog has not been successfully retrieved from the database."
                );
              }
            });
          }
          ngOnInit() {}
        }
        CatalogPageComponent.ɵfac = function CatalogPageComponent_Factory(t) {
          return new (t || CatalogPageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              src_app_catalog_service__WEBPACK_IMPORTED_MODULE_1__[
                "CatalogService"
              ]
            )
          );
        };
        CatalogPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: CatalogPageComponent,
          selectors: [["app-catalog-page"]],
          decls: 13,
          vars: 1,
          consts: [
            [
              "src",
              "../../../assets/cats.png",
              "alt",
              "cats walking across the page",
              1,
              "header-img",
            ],
            [1, "display-4"],
            [1, "pb-5"],
            [1, "container"],
            [1, "row"],
            [
              "id",
              "pageItems",
              1,
              "d-flex",
              "flex-wrap",
              "justify-content-start",
              "align-items-start",
              "p-5",
              "bg-white",
              "rounded",
              "shadow-lg",
              "mb-5",
            ],
            ["class", "item p-2 flex-fill bd-highlight", 4, "ngFor", "ngForOf"],
            [1, "item", "p-2", "flex-fill", "bd-highlight"],
            [3, "items"],
          ],
          template: function CatalogPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "header"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                2,
                "img",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "h1",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                4,
                "Cat Hat Catalog"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "main"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "div",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "div",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "div",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "div",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                10,
                CatalogPageComponent_div_10_Template,
                2,
                1,
                "div",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "footer"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                12,
                "app-footer"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngForOf",
                ctx.pageItems
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"],
            _modules_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__[
              "FooterComponent"
            ],
            _modules_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__[
              "ItemCardComponent"
            ],
          ],
          styles: [
            'h1[_ngcontent-%COMP%] {\n  font-family: "Alice", serif;\n}\n\nheader[_ngcontent-%COMP%] {\n  align-content: center;\n  text-align: center;\n}\n\n.header-img[_ngcontent-%COMP%] {\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0YWxvZy1wYWdlL2NhdGFsb2ctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGFsb2ctcGFnZS9jYXRhbG9nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgZm9udC1mYW1pbHk6IFwiQWxpY2VcIiwgc2VyaWY7XG59XG5cbmhlYWRlciB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWltZyB7XG4gIHdpZHRoOiA3NSU7XG59XG4iXX0= */',
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            CatalogPageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-catalog-page",
                    templateUrl: "./catalog-page.component.html",
                    styleUrls: ["./catalog-page.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    src_app_catalog_service__WEBPACK_IMPORTED_MODULE_1__[
                      "CatalogService"
                    ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ sdyP:
      /*!************************************************************!*\
  !*** ./src/app/pages/search-page/search-page.component.ts ***!
  \************************************************************/
      /*! exports provided: SearchPageComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SearchPageComponent",
          function () {
            return SearchPageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );
        /* harmony import */ var src_app_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! src/app/catalog.service */ "8ZFQ"
        );

        class SearchPageComponent {
          constructor(route, Catalog) {
            this.route = route;
            this.Catalog = Catalog;
            this.items = [];
            const itemsToDisplay = this.route.snapshot.paramMap.get(
              "searchTerm"
            );
            console.log(itemsToDisplay);
            this.Catalog.searchItem(itemsToDisplay).subscribe((data) => {
              if (data.success) {
                alert("Found items");
                console.log(data.data);
              } else {
                alert("This item could not be retrieved from the catalog.");
              }
            });
          }
          ngOnInit() {}
        }
        SearchPageComponent.ɵfac = function SearchPageComponent_Factory(t) {
          return new (t || SearchPageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              src_app_catalog_service__WEBPACK_IMPORTED_MODULE_2__[
                "CatalogService"
              ]
            )
          );
        };
        SearchPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: SearchPageComponent,
          selectors: [["app-search-page"]],
          decls: 2,
          vars: 0,
          template: function SearchPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                1,
                "search-page works!"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1wYWdlL3NlYXJjaC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            SearchPageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-search-page",
                    templateUrl: "./search-page.component.html",
                    styleUrls: ["./search-page.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                      "ActivatedRoute"
                    ],
                },
                {
                  type:
                    src_app_catalog_service__WEBPACK_IMPORTED_MODULE_2__[
                      "CatalogService"
                    ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ tIkO:
      /*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
      /*! exports provided: AuthGuard */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AuthGuard",
          function () {
            return AuthGuard;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */ "kU1M"
        );
        /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./auth.service */ "ccyI"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );
        /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./user.service */ "xdv0"
        );

        class AuthGuard {
          constructor(auth, router, user) {
            this.auth = auth;
            this.router = router;
            this.user = user;
          }
          canActivate(route, state) {
            if (this.auth.loggedInStatus) {
              return true;
            }
            return this.user.isLoggedIn().pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(
                (res) => {
                  if (res.status) {
                    this.auth.setLoggedIn(true);
                    return true;
                  } else {
                    this.router.navigate(["login"]);
                  }
                  return false;
                }
              )
            );
          }
        }
        AuthGuard.ɵfac = function AuthGuard_Factory(t) {
          return new (t || AuthGuard)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
            )
          );
        };
        AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: "root" });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AuthGuard,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [
                  {
                    providedIn: "root",
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
                },
                {
                  type:
                    _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ vY5A:
      /*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
      /*! exports provided: AppRoutingModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppRoutingModule",
          function () {
            return AppRoutingModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );
        /* harmony import */ var _pages_catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./pages/catalog-page/catalog-page.component */ "rY3q"
        );
        /* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./pages/home-page/home-page.component */ "JFIp"
        );
        /* harmony import */ var _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./pages/cart-page/cart-page.component */ "2TiI"
        );
        /* harmony import */ var _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./pages/profile-page/profile-page.component */ "A5xL"
        );
        /* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./pages/register-page/register-page.component */ "lmRq"
        );
        /* harmony import */ var _pages_records_page_records_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./pages/records-page/records-page.component */ "i2XY"
        );
        /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./login/login.component */ "vtpD"
        );
        /* harmony import */ var _home_test_home_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./home-test/home-test.component */ "jpLA"
        );
        /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./auth.guard */ "tIkO"
        );
        /* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./logout/logout.component */ "n1B2"
        );
        /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./dashboard/dashboard.component */ "QX6l"
        );
        /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./register/register.component */ "1W4x"
        );
        /* harmony import */ var _pages_item_page_item_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./pages/item-page/item-page.component */ "w+21"
        );
        /* harmony import */ var _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./pages/search-page/search-page.component */ "sdyP"
        );

        const routes = [
          {
            path: "",
            component:
              _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__[
                "HomePageComponent"
              ],
          },
          {
            path: "catalog",
            component:
              _pages_catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_2__[
                "CatalogPageComponent"
              ],
          },
          {
            path: "catalog/:item",
            component:
              _pages_item_page_item_page_component__WEBPACK_IMPORTED_MODULE_14__[
                "ItemPageComponent"
              ],
          },
          {
            path: "cart",
            component:
              _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_4__[
                "CartPageComponent"
              ],
          },
          {
            path: "profile",
            component:
              _pages_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__[
                "ProfilePageComponent"
              ],
            canActivate: [
              _auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
            ],
          },
          {
            path: "register",
            component:
              _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_6__[
                "RegisterPageComponent"
              ],
          },
          {
            path: "records",
            component:
              _pages_records_page_records_page_component__WEBPACK_IMPORTED_MODULE_7__[
                "RecordsPageComponent"
              ],
          },
          {
            path: "search/:searchTerm",
            component:
              _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_15__[
                "SearchPageComponent"
              ],
          },
          {
            path: "login",
            component:
              _login_login_component__WEBPACK_IMPORTED_MODULE_8__[
                "LoginComponent"
              ],
          },
          {
            path: "logout",
            component:
              _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__[
                "LogoutComponent"
              ],
          },
          {
            path: "home-test",
            component:
              _home_test_home_test_component__WEBPACK_IMPORTED_MODULE_9__[
                "HomeTESTComponent"
              ],
          },
          {
            path: "dashboard",
            component:
              _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__[
                "DashboardComponent"
              ],
            canActivate: [
              _auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
            ],
          },
          {
            path: "register-test",
            component:
              _register_register_component__WEBPACK_IMPORTED_MODULE_13__[
                "RegisterComponent"
              ],
          },
          { path: "**", redirectTo: "" },
        ];
        class AppRoutingModule {}
        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({ type: AppRoutingModule });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          imports: [
            [
              _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                "RouterModule"
              ].forRoot(routes),
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
          ],
        });
        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              "ɵɵsetNgModuleScope"
            ](AppRoutingModule, {
              imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
              ],
              exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
              ],
            });
        })();
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AppRoutingModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                args: [
                  {
                    imports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                        "RouterModule"
                      ].forRoot(routes),
                    ],
                    exports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                        "RouterModule"
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ vtpD:
      /*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
      /*! exports provided: LoginComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "LoginComponent",
          function () {
            return LoginComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../auth.service */ "ccyI"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */ "3Pt+"
        );

        class LoginComponent {
          constructor(Auth, router) {
            this.Auth = Auth;
            this.router = router;
            if (this.Auth.getisLoggedIn()) {
              this.router.navigate(["/"]);
            }
          }
          ngOnInit() {}
          loginUser(event) {
            event.preventDefault();
            const target = event.target;
            const username = target.querySelector("#email").value;
            const password = target.querySelector("#password").value;
            this.Auth.getUserDetails(username, password).subscribe((data) => {
              if (data.success) {
                this.Auth.setLoggedIn(true);
                location.reload();
              } else {
                window.alert(data.message);
              }
            });
            console.log("Log in with: ", username, password);
          }
        }
        LoginComponent.ɵfac = function LoginComponent_Factory(t) {
          return new (t || LoginComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
            )
          );
        };
        LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: LoginComponent,
          selectors: [["app-login"]],
          decls: 12,
          vars: 0,
          consts: [
            [3, "submit"],
            [1, "container"],
            [
              "type",
              "text",
              "autocomplete",
              "off",
              "placeholder",
              "Email",
              "id",
              "email",
            ],
            [
              "type",
              "password",
              "autocomplete",
              "off",
              "placeholder",
              "Password",
              "id",
              "password",
            ],
            ["type", "submit", "id", "submit"],
            ["href", "/register"],
          ],
          template: function LoginComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "form",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "submit",
                function LoginComponent_Template_form_submit_1_listener(
                  $event
                ) {
                  return ctx.loginUser($event);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "div",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                4,
                "input",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                6,
                "input",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "div"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "button",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Submit");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "a",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                11,
                "Register Here"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
              "ɵangular_packages_forms_forms_y"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"],
          ],
          styles: [
            "form[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  background: #eee;\n  border-radius: 20px;\n}\n\ninput#email[_ngcontent-%COMP%], input#password[_ngcontent-%COMP%] {\n  outline: 0;\n  font-size: 20px;\n  padding: 5px 10px;\n  margin: 5px;\n  min-width: 300px;\n}\n\nbutton#submit[_ngcontent-%COMP%] {\n  margin: 20px;\n  padding: 20px;\n  border-radius: 10px;\n  font-size: 20px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuaW5wdXQjZW1haWwsXG5pbnB1dCNwYXNzd29yZCB7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG5idXR0b24jc3VibWl0IHtcbiAgbWFyZ2luOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            LoginComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-login",
                    templateUrl: "./login.component.html",
                    styleUrls: ["./login.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ "w+21":
      /*!********************************************************!*\
  !*** ./src/app/pages/item-page/item-page.component.ts ***!
  \********************************************************/
      /*! exports provided: ItemPageComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ItemPageComponent",
          function () {
            return ItemPageComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );
        /* harmony import */ var src_app_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! src/app/catalog.service */ "8ZFQ"
        );

        class ItemPageComponent {
          constructor(route, Catalog) {
            this.route = route;
            this.Catalog = Catalog;
            this.item = {
              itemName: "null",
              itemPrice: 0,
              itemID: 0,
              itemDescription: "null",
              itemQuantity: 0,
              itemImg: "./../../../assets/Hat_200x200.png",
            };
            const itemToDisplay = this.route.snapshot.paramMap.get("item");
            this.Catalog.getItem(itemToDisplay).subscribe((data) => {
              if (data.success) {
                this.item = {
                  itemName: data.data.title,
                  itemPrice: data.data.price.toFixed(2),
                  itemID: data.data._id,
                  itemDescription: data.data.description,
                  itemQuantity: data.data.quantity,
                  itemImg: data.data.img,
                };
              } else {
                alert("This item could not be retrieved from the catalog.");
              }
            });
          }
          ngOnInit() {}
        }
        ItemPageComponent.ɵfac = function ItemPageComponent_Factory(t) {
          return new (t || ItemPageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              src_app_catalog_service__WEBPACK_IMPORTED_MODULE_2__[
                "CatalogService"
              ]
            )
          );
        };
        ItemPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: ItemPageComponent,
          selectors: [["app-item-page"]],
          decls: 40,
          vars: 5,
          consts: [
            [1, "pb-12"],
            [1, "container"],
            [1, "row", "d-flex", "justify-content-center"],
            [1, "column"],
            [1, "card"],
            [1, "card-body"],
            [1, "card-img-top", 3, "src", "alt"],
            [1, "card", 2, "width", "50rem"],
            [1, "card-title"],
            [1, "card-price"],
            [1, "card-text"],
            ["href", "/catalog", 1, "btn", "btn-primary"],
            [1, "card", "card-outline-secondary", "my-4"],
            [1, "card-header"],
            [1, "text-muted"],
          ],
          template: function ItemPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "main"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                2,
                "div",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "div",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "div",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "div",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "div",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                7,
                "img",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "div",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "div",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "div",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "h5",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                14,
                "p",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "p",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                19,
                "a",
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                20,
                "Add To Cart"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                21,
                "div",
                12
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                22,
                "div",
                13
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                23,
                " Product Reviews "
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                24,
                "div",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                25,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                26,
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                27,
                "small",
                14
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                28,
                "Posted by Anonymous on 3/1/17"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                30,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                31,
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                32,
                "small",
                14
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                33,
                "Posted by Anonymous on 3/1/17"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                35,
                "p"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                36,
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus."
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                37,
                "small",
                14
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                38,
                "Posted by Anonymous on 3/1/17"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵpropertyInterpolate"
              ](
                "src",
                ctx.item.itemImg,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵpropertyInterpolate"
              ]("alt", ctx.item.itemName);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                ctx.item.itemName
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](
                "$ ",
                ctx.item.itemPrice,
                ""
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
                ctx.item.itemDescription
              );
            }
          },
          styles: [
            'h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  font-family: "Alice", serif;\n}\n\n.card-price[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: larger;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #5d3980;\n}\n\n.container[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXRlbS1wYWdlL2l0ZW0tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tcGFnZS9pdGVtLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg1LCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiQWxpY2VcIiwgc2VyaWY7XG59XG5cbi5jYXJkLXByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMzk4MDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbiJdfQ== */',
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            ItemPageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-item-page",
                    templateUrl: "./item-page.component.html",
                    styleUrls: ["./item-page.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                      "ActivatedRoute"
                    ],
                },
                {
                  type:
                    src_app_catalog_service__WEBPACK_IMPORTED_MODULE_2__[
                      "CatalogService"
                    ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ xBqr:
      /*!******************************************************!*\
  !*** ./src/app/modules/nav-bar/nav-bar.component.ts ***!
  \******************************************************/
      /*! exports provided: NavBarComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "NavBarComponent",
          function () {
            return NavBarComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */ "ofXK"
        );
        /* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../search-bar/search-bar.component */ "zsl1"
        );
        /* harmony import */ var _login_card_login_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../login-card/login-card.component */ "4h5o"
        );

        const _c0 = function (a0) {
          return { show: a0 };
        };
        class NavBarComponent {
          constructor() {
            this.isShown = false;
          }
          ngOnInit() {}
        }
        NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
          return new (t || NavBarComponent)();
        };
        NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: NavBarComponent,
          selectors: [["app-nav-bar"]],
          decls: 17,
          vars: 4,
          consts: [
            [1, "navbar", "navbar-expand-lg", "navbar-light"],
            [
              "routerLink",
              "/",
              "routerLinkActive",
              "active-link",
              1,
              "navbar-brand",
            ],
            [
              "src",
              "../../../assets/madCatter_sketch_05_small.png",
              "alt",
              "Mad Hatter logo with a cat",
              1,
              "logo",
            ],
            [
              "type",
              "button",
              "data-toggle",
              "collapse",
              "data-target",
              ".navbar-collapse",
              "aria-controls",
              "navbarNavAltMarkup",
              "aria-expanded",
              "false",
              "aria-label",
              "Toggle navigation",
              1,
              "navbar-toggler",
              3,
              "click",
            ],
            [1, "navbar-toggler-icon"],
            [
              "id",
              "navbarNavAltMarkup",
              1,
              "collapse",
              "navbar-collapse",
              "justify-content-between",
              3,
              "ngClass",
            ],
            [1, "navbar-nav"],
            [
              "routerLink",
              "/",
              "routerLinkActive",
              "active-link",
              1,
              "nav-item",
              "nav-link",
            ],
            [1, "sr-only"],
            [
              "routerLink",
              "/catalog",
              "routerLinkActive",
              "active-link",
              1,
              "nav-item",
              "nav-link",
            ],
            [
              "routerLink",
              "/cart",
              "routerLinkActive",
              "active-link",
              1,
              "nav-item",
              "nav-link",
            ],
          ],
          template: function NavBarComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "nav",
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "a",
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                2,
                "img",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "button",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function NavBarComponent_Template_button_click_3_listener() {
                  return (ctx.isShown = !ctx.isShown);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                4,
                "span",
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "div",
                5
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                6,
                "div",
                6
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "a",
                7
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "span",
                8
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                10,
                "(current)"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "a",
                9
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                12,
                "Catalog"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                13,
                "a",
                10
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cart");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                15,
                "app-search-bar"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                16,
                "app-login-card"
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"](
                "aria-expanded",
                ctx.isShown
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngClass",
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](
                  2,
                  _c0,
                  ctx.isShown
                )
              );
            }
          },
          directives: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"],
            _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__[
              "SearchBarComponent"
            ],
            _login_card_login_card_component__WEBPACK_IMPORTED_MODULE_4__[
              "LoginCardComponent"
            ],
          ],
          styles: [
            '.logo[_ngcontent-%COMP%] {\n  width: 75%;\n  height: auto;\n}\n\n.nav-link[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  font-family: "Alice", serif;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n\nnav[_ngcontent-%COMP%] {\n  z-index: 6;\n}\n\n.navbar-light[_ngcontent-%COMP%] {\n  background-color: #b3a4c4;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #b3a4c4;\n  border: none;\n  padding: 15px 32px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  min-width: 100%;\n  padding: 15px 32px;\n}\n\np[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm5hdi1saW5rLFxuYnV0dG9uLFxucCB7XG4gIGZvbnQtZmFtaWx5OiBcIkFsaWNlXCIsIHNlcmlmO1xufVxuXG4ubmF2LWxpbmsge1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxubmF2IHtcbiAgei1pbmRleDogNjtcbn1cblxuLm5hdmJhci1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2E0YzQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2E0YzQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xufVxuXG5wIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuIl19 */',
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            NavBarComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-nav-bar",
                    templateUrl: "./nav-bar.component.html",
                    styleUrls: ["./nav-bar.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ xdv0:
      /*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
      /*! exports provided: UserService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "UserService",
          function () {
            return UserService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! src/app/auth.service */ "ccyI"
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common/http */ "tk/3"
        );

        class UserService {
          constructor(auth, http) {
            this.auth = auth;
            this.http = http;
            this.updateUser = (
              oldEmail,
              username,
              name,
              email,
              address,
              password
            ) => {
              let cookieName = "authToken";
              let token = this.auth.getCookie(cookieName);
              return this.http.post("/api/user/:email", {
                oldEmail,
                username,
                name,
                email,
                address,
                password,
                token,
              });
            };
          }
          getData() {
            return this.http.get("/api/data");
          }
          updateTotal(value) {
            return this.http.post("/api/total", {
              value,
            });
          }
          isLoggedIn() {
            return this.http.get("/api/isloggedin");
          }
          logout() {
            localStorage.setItem("loggedIn", "false");
            return this.http.get("/api/logout");
          }
        }
        UserService.ɵfac = function UserService_Factory(t) {
          return new (t || UserService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
            )
          );
        };
        UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: UserService,
          factory: UserService.ɵfac,
          providedIn: "root",
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            UserService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [
                  {
                    providedIn: "root",
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__[
                      "AuthService"
                    ],
                },
                {
                  type:
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
                      "HttpClient"
                    ],
                },
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ zUnb:
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./environments/environment */ "AytR"
        );
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app/app.module */ "ZAI4"
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/platform-browser */ "jhN1"
        );

        if (
          _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]
            .production
        ) {
          Object(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"]
          )();
        }
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[
          "platformBrowser"
        ]()
          .bootstrapModule(
            _app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]
          )
          .catch((err) => console.error(err));

        /***/
      },

    /***/ zn8P:
      /*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          });
        }
        webpackEmptyAsyncContext.keys = function () {
          return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = "zn8P";

        /***/
      },

    /***/ zsl1:
      /*!************************************************************!*\
  !*** ./src/app/modules/search-bar/search-bar.component.ts ***!
  \************************************************************/
      /*! exports provided: SearchBarComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SearchBarComponent",
          function () {
            return SearchBarComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ "fXoL"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ "tyNb"
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */ "3Pt+"
        );

        class SearchBarComponent {
          constructor(router) {
            this.router = router;
          }
          ngOnInit() {}
          onSubmit(search) {
            const searchTerm = search.value.searchTerm;
            this.router
              .navigateByUrl("/", { skipLocationChange: true })
              .then(() => {
                this.router.navigate(["search/" + searchTerm]);
              });
          }
        }
        SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) {
          return new (t || SearchBarComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
            )
          );
        };
        SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: SearchBarComponent,
          selectors: [["app-search-bar"]],
          decls: 5,
          vars: 1,
          consts: [
            [1, "form-inline", 3, "ngSubmit"],
            ["search", "ngForm"],
            [
              "name",
              "searchTerm",
              "type",
              "search",
              "placeholder",
              "Search",
              "aria-label",
              "Search",
              "ngModel",
              "",
              1,
              "form-control",
              "mr-sm-2",
            ],
            [
              "type",
              "submit",
              1,
              "btn",
              "btn-outline-success",
              "my-2",
              "my-sm-0",
              3,
              "disabled",
            ],
          ],
          template: function SearchBarComponent_Template(rf, ctx) {
            if (rf & 1) {
              const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵgetCurrentView"
              ]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "form",
                0,
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "ngSubmit",
                function SearchBarComponent_Template_form_ngSubmit_0_listener() {
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                    _r1
                  );
                  const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                    "ɵɵreference"
                  ](1);
                  return ctx.onSubmit(_r0);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                2,
                "input",
                2
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "button",
                3
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search");
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
              const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                "ɵɵreference"
              ](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "disabled",
                !_r0.form.valid
              );
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
              "ɵangular_packages_forms_forms_y"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"],
          ],
          styles: [
            ".form-inline[_ngcontent-%COMP%] {\n    color: #f48fb1;\n}\n\n.btn[_ngcontent-%COMP%] {\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWlubGluZSB7XG4gICAgY29sb3I6ICNmNDhmYjE7XG59XG5cbi5idG4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */",
          ],
        });
        /*@__PURE__*/ (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            SearchBarComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-search-bar",
                    templateUrl: "./search-bar.component.html",
                    styleUrls: ["./search-bar.component.css"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
                },
              ];
            },
            null
          );
        })();

        /***/
      },
  },
  [[0, "runtime", "vendor"]],
]);
//# sourceMappingURL=main-es2015.js.map
