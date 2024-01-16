"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CartList = () => {
	return (
		<tr>
			<td className="product-thumbnail">
				<Link href="#">
					<Image
						src="/images/products/product1.jpg"
						width={670}
						height={800}
						alt="item"
					/>
				</Link>
			</td>

			<td className="product-name">
				<Link href="#">Note Book Mockup</Link>
			</td>

			<td className="product-price">
				<span className="unit-amount">$250.00</span>
			</td>

			<td className="product-quantity">
				<div className="input-counter">
					<span className="minus-btn">
						<i className="bx bx-minus"></i>
					</span>
					<input type="text" min="1" defaultValue="1" />
					<span className="plus-btn">
						<i className="bx bx-plus"></i>
					</span>
				</div>
			</td>

			<td className="product-subtotal">
				<span className="subtotal-amount">$250.00</span>

				<Link href="#" className="remove">
					<i className="bx bx-trash"></i>
				</Link>
			</td>
		</tr>
	);
};

export default CartList;
