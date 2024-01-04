"use client";
import React from "react";
import Link from "next/link";

const MenuItem = ({ label, link, submenu }) => {
	if (submenu) {
		return (
			<li className="nav-item" key={label}>
				<Link href={link} className="nav-link">
					{label} <i className="bx bx-chevron-down"></i>
				</Link>

				<ul className="dropdown-menu">
					{submenu.map((subItem) => (
						<li className="nav-item" key={subItem.label}>
							<Link href={subItem.link} className="nav-link">
								{subItem.label}
							</Link>
						</li>
					))}
				</ul>
			</li>
		);
	}

	return (
		<li className="nav-item" key={label}>
			<Link href={link} className="nav-link">
				{label}
			</Link>
		</li>
	);
};

export default MenuItem;
