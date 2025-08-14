"use client";
import React, { useEffect, useState } from "react";
import { Navigation } from "@/components/UI/Navigation";
import Link from "next/link";
import { getMatches, getBuyer, type Match } from "@/lib/storage";

export default function MatchesPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  useEffect(() => {
    setMatches(getMatches());
  }, []);

  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-background p-6">
        <h1 className="text-2xl font-bold mb-4">Matches</h1>
        {matches.length === 0 ? (
          <div className="bg-card rounded-2xl shadow p-6 border border-border">
            <p className="text-gray-600">No matches yet.</p>
            <p className="text-sm text-gray-500 mt-2">Browse <Link className="text-primary hover:underline" href="/profiles/buyers">buyers</Link> to get started.</p>
          </div>
        ) : (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {matches.map(m => {
              const buyer = getBuyer(m.buyerId);
              return (
                <li key={m.id} className="bg-card rounded-xl border border-border p-4 shadow">
                  <div className="font-semibold">{buyer?.name ?? `Buyer ${m.buyerId}`}</div>
                  <div className="text-xs text-gray-500">Status: {m.status}</div>
                  <div className="text-xs text-gray-500">Created: {new Date(m.createdAt).toLocaleString()}</div>
                  <div className="mt-2 text-sm">
                    <Link className="text-primary hover:underline" href={`/acquisition/${m.id}`}>Open workflow</Link>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </>
  );
}
