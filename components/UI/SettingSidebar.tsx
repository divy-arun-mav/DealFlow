import React from "react";
import Link from "next/link";
export const SettingsSidebar = () => (
    <aside className="w-64 bg-card rounded-xl shadow p-6 space-y-6 border border-border">
        <div className="font-bold text-lg">Settings</div>
        <nav className="flex flex-col gap-4 text-sm">
            <Link href="/settings#account">Account</Link>
            <Link href="/settings#notifications">Notifications</Link>
            <Link href="/settings#security">Security</Link>
            <Link href="/settings#billing">Billing</Link>
        </nav>
    </aside>
);
