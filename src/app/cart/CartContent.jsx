"use client";

import React from "react";
import Link from "next/link";
import CartList from "./CartList";

const CartContent = () => {
	return (
		<div className="cart-area ptb-100">
			<div className="container">
				<form>
					<div className="cart-table table-responsive">
						<table className="table table-bordered">
							<thead>
								<tr>
									<th scope="col">Product</th>
									<th scope="col">Name</th>
									<th scope="col">Unit Price</th>
									<th scope="col">Quantity</th>
									<th scope="col">Total</th>
								</tr>
							</thead>

							<tbody>
								<CartList />
								<CartList />
								<CartList />
								<CartList />
							</tbody>
						</table>
					</div>

					<div className="cart-buttons">
						<div className="row align-items-center">
							<div className="col-lg-7 col-sm-7 col-md-7">
								<div className="shopping-coupon-code">
									<input
										type="text"
										className="form-control"
										placeholder="Coupon code"
										name="coupon-code"
										id="coupon-code"
									/>
									<button type="submit">Apply Coupon</button>
								</div>
							</div>

							<div className="col-lg-5 col-sm-5 col-md-5 text-right">
								<Link href="#" className="default-btn">
									<i className="flaticon-history"></i> Update
									Cart <span></span>
								</Link>
							</div>
						</div>
					</div>

					<div className="cart-totals">
						<h3>Cart Totals</h3>

						<ul>
							<li>
								Subtotal <span>$800.00</span>
							</li>
							<li>
								Shipping <span>$30.00</span>
							</li>
							<li>
								Total <span>$830.00</span>
							</li>
						</ul>

						<Link href="#" className="default-btn">
							<i className="flaticon-shopping-cart"></i> Proceed
							to Checkout <span></span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CartContent;
