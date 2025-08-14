import React from "react";
import { Navigation } from "@/components/UI/Navigation";
import Link from "next/link";
import ActivityFeed from "@/components/UI/ActivityFeed";

export default function ProfilePage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-background p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <aside className="bg-card rounded-2xl shadow p-6 border border-border">
            <div className="font-bold text-lg mb-4">Your Profile</div>
            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/settings#account">Edit Profile</Link>
              <Link href="/profiles/buyers">Buyer Directory</Link>
              <Link href="/matches">Matches</Link>
            </nav>
          </aside>

          <section className="lg:col-span-2 bg-card rounded-2xl shadow p-6 border border-border">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-gray-600 mt-2">Complete your profile to get better matches.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="p-4 border border-border rounded-xl">
                <div className="font-medium">Profile completeness</div>
                <div className="text-sm text-gray-600">68%</div>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <div className="font-medium">Pending actions</div>
                <div className="text-sm text-gray-600">Upload NDA, verify email</div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-3">Recent activity</h2>
              <ActivityFeed limit={10} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
