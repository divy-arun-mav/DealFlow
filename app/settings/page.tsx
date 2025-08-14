import React from "react";
import { Navigation } from "@/components/UI/Navigation";

export default function SettingsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-background p-6">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <section className="bg-card rounded-2xl shadow p-6 border border-border">
            <h2 className="font-semibold mb-2">Account</h2>
            <p className="text-sm text-gray-600">Update your name, email, and organization.</p>
          </section>
          <section className="bg-card rounded-2xl shadow p-6 border border-border">
            <h2 className="font-semibold mb-2">Notifications</h2>
            <p className="text-sm text-gray-600">Email alerts for matches and deal updates.</p>
          </section>
          <section className="bg-card rounded-2xl shadow p-6 border border-border">
            <h2 className="font-semibold mb-2">Security</h2>
            <p className="text-sm text-gray-600">Password, 2FA, and device sessions.</p>
          </section>
          <section className="bg-card rounded-2xl shadow p-6 border border-border">
            <h2 className="font-semibold mb-2">Billing</h2>
            <p className="text-sm text-gray-600">Plan, invoices, and payment methods.</p>
          </section>
        </div>
      </main>
    </>
  );
}
