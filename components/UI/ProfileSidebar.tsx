import React from "react";
import Link from "next/link";
export const ProfileSidebar = () => (
    <aside className="w-64 bg-card rounded-xl shadow p-6 space-y-6 border border-border">
        <div className="font-bold text-lg">Your Profile</div>
        <nav className="flex flex-col gap-4 text-sm">
            <Link href="/profile">Overview</Link>
            <Link href="/profiles/buyers">Buyer Directory</Link>
            <Link href="/matches">Matches</Link>
            <Link href="/settings">Settings</Link>
        </nav>
    </aside>
);
