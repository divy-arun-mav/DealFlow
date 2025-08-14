"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getMatches, getBuyer, type Match, type Buyer } from "@/lib/storage";

type Row = {
  match: Match;
  buyer: Buyer | null;
};

export default function AcquisitionList() {
  const [rows, setRows] = useState<Row[]>([]);

  const load = () => {
    const matches = getMatches();
    const rs: Row[] = matches.map((m) => ({ match: m, buyer: getBuyer(m.buyerId) || null }));
    setRows(rs);
  };

  useEffect(() => {
    load();
    const onStorage = (e: StorageEvent) => {
      if (e.key && ["df:matches", "df:buyers"].includes(e.key)) {
        load();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (rows.length === 0) {
    return (
      <div className="bg-card rounded-2xl shadow p-6 border border-border">
        <p className="text-gray-600">You have no active deals yet.</p>
        <p className="text-sm text-gray-500 mt-2">When you match with a buyer, your workflow will appear here.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {rows.map(({ match, buyer }) => (
        <div key={match.id} className="flex items-center justify-between gap-4 p-4 border border-border rounded-xl bg-card">
          <div className="flex items-center gap-3 min-w-0">
            {buyer?.avatar ? (
              <Image src={buyer.avatar} alt={buyer.name} width={40} height={40} className="rounded-full border" />
            ) : (
              <div className="h-10 w-10 rounded-full bg-muted" />
            )}
            <div className="min-w-0">
              <div className="font-medium truncate">{buyer?.name ?? `Buyer ${match.buyerId}`}</div>
              <div className="text-xs text-muted-foreground truncate">
                {buyer?.preferredIndustry ? `${buyer.preferredIndustry} • ` : ""}
                {buyer?.budget ? `${buyer.budget} • ` : ""}
                {buyer?.location ?? "Location N/A"}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs px-2 py-0.5 rounded-full border"
              style={{
                backgroundColor: match.status === "accepted" ? "#ECFDF5" : match.status === "pending" ? "#EFF6FF" : "#FEF2F2",
                color: match.status === "accepted" ? "#065F46" : match.status === "pending" ? "#1E3A8A" : "#991B1B",
                borderColor: match.status === "accepted" ? "#A7F3D0" : match.status === "pending" ? "#BFDBFE" : "#FECACA",
              }}
            >
              {match.status}
            </span>
            <div className="text-xs text-muted-foreground hidden sm:block">{new Date(match.createdAt).toLocaleString()}</div>
            <Link href={`/acquisition/${match.id}`} className="text-sm text-primary hover:underline">Open</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
