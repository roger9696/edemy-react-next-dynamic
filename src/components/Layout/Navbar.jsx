"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { menus } from "../../../libs/menus";
import MenuItem from "./MenuItem";
import MegaMenu from "./MegaMenu";
import { usePathname } from "next/navigation";
import UserMenu from "./UserMenu";

const Navbar = ({ currentUser }) => {
	const [menu, setMenu] = React.useState(true);
	const pathname = usePathname();

	React.useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("is-sticky");
			} else {
				elementId.classList.remove("is-sticky");
			}
		});
	});

	const classOne = menu
		? "collapse navbar-collapse"
		: "collapse navbar-collapse show";
	const classTwo = menu
		? "navbar-toggler navbar-toggler-right collapsed"
		: "navbar-toggler navbar-toggler-right";

	if (pathname === "/coming-soon") {
		return;
	}

	return (
		<>
			<div id="navbar" className="navbar-area">
				<div className="edemy-nav">
					<div className="container-fluid">
						<div className="navbar navbar-expand-lg navbar-light">
							<Link href="/" className="navbar-brand">
								<Image
									src="/images/logo.png"
									width={87}
									height={24}
									alt="logo"
								/>
							</Link>

							<button
								className={classTwo}
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="icon-bar top-bar"></span>
								<span className="icon-bar middle-bar"></span>
								<span className="icon-bar bottom-bar"></span>
							</button>

							<div
								className={classOne}
								id="navbarSupportedContent"
							>
								<form className="search-box">
									<input
										type="text"
										className="input-search"
										placeholder="Search for anything"
									/>
									<button type="submit">
										<i className="flaticon-search"></i>
									</button>
								</form>

								<ul className="navbar-nav">
									{menus.map((menuItem) => (
										<MenuItem
											key={menuItem.label}
											{...menuItem}
										/>
									))}

									<MegaMenu />
								</ul>

								<div className="others-option d-flex align-items-center">
									<div className="option-item">
										<div className="cart-btn">
											<Link href="/cart">
												<i className="flaticon-shopping-cart"></i>{" "}
												<span>3</span>
											</Link>
										</div>
									</div>

									<UserMenu currentUser={currentUser} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
