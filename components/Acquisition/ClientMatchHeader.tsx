"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getMatches, getBuyer, type Match, type Buyer } from "@/lib/storage";

type Props = { matchId: string };

export default function ClientMatchHeader({ matchId }: Props) {
  const [match, setMatch] = useState<Match | null>(null);
  const [buyer, setBuyer] = useState<Buyer | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    try {
      const m = getMatches().find((x) => x.id === matchId) || null;
      if (!m) {
        setNotFound(true);
        return;
      }
      setMatch(m);
      const b = getBuyer(m.buyerId) || null;
      setBuyer(b);
    } catch {
      setNotFound(true);
    }
  }, [matchId]);

  if (notFound) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link href="/matches" className="text-primary hover:underline">← Back to matches</Link>
        </div>
        <div className="mt-6 rounded-lg border border-border bg-card p-6 text-red-600">
          Match not found.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between">
        <Link href="/matches" className="text-primary hover:underline">← Back to matches</Link>
        <div className="text-xs text-muted-foreground">Match ID: {matchId}</div>
      </div>

      <div className="mt-6 rounded-lg border border-border bg-card p-6">
        <div className="flex items-center gap-4">
          {buyer?.avatar ? (
            <Image
              src={buyer.avatar}
              alt={buyer.name}
              width={56}
              height={56}
              className="rounded-full border"
            />
          ) : (
            <div className="h-14 w-14 rounded-full bg-muted" />
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl font-semibold truncate">
                Acquisition with {buyer?.name ?? "Unknown Buyer"}
              </h1>
              {match?.status && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {match.status}
                </span>
              )}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              {buyer?.preferredIndustry ? `${buyer.preferredIndustry} • ` : ""}
              {buyer?.budget ? `${buyer.budget} • ` : ""}
              {buyer?.location ?? "Location N/A"}
            </div>
          </div>
          {match?.createdAt && (
            <div className="text-xs text-muted-foreground">
              Created {new Date(match.createdAt).toLocaleString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
