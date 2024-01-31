"use client";
import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const UserMenu = ({ currentUser }) => {
	const isAdmin = currentUser?.role === "ADMIN";
	const currentRoute = usePathname();

	return (
		<>
			{!currentUser && (
				<div className="option-item">
					<Link href="/auth" className="default-btn">
						<i className="flaticon-user"></i> Login/Register{" "}
						<span></span>
					</Link>
				</div>
			)}
			{currentUser && (
				<>
					<div className="option-item">
						<button
							className="default-btn"
							onClick={() => signOut()}
						>
							<i className="flaticon-user"></i> Logout{" "}
							<span></span>
						</button>
					</div>
				</>
			)}
		</>
	);
};

export default UserMenu;
