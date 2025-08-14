import React from "react";
import Link from "next/link";

export const Navigation = () => (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-card border-b border-border shadow-lg z-50 px-6 py-3">
        <Link href="/" className="font-extrabold text-xl text-primary tracking-tight">DealFlow</Link>
        <div className="flex gap-6 text-sm">
            <Link href="/profiles/buyers" className="hover:text-accent transition-colors">Buyers</Link>
            <Link href="/acquisition" className="hover:text-accent transition-colors">Acquisitions</Link>
            <Link href="/settings" className="hover:text-accent transition-colors">Settings</Link>
            <Link href="/profile" className="hover:text-accent transition-colors">Profile</Link>
        </div>
    </nav>
);
