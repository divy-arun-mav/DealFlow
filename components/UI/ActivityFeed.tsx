"use client";
import React, { useEffect, useState } from "react";
import { getActivity, type Activity } from "@/lib/storage";

export default function ActivityFeed({ limit = 10 }: { limit?: number }) {
  const [items, setItems] = useState<Activity[]>([]);

  useEffect(() => {
    setItems(getActivity(limit));
  }, [limit]);

  if (!items.length) {
    return (
      <div className="text-sm text-muted-foreground">No recent activity.</div>
    );
  }

  return (
    <ul className="space-y-3">
      {items.map((a) => (
        <li key={a.id} className="text-sm p-3 border border-border rounded-lg bg-card">
          <div className="flex items-center justify-between">
            <span>{renderLabel(a)}</span>
            <span className="text-xs text-muted-foreground">{new Date(a.timestamp).toLocaleString()}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

function renderLabel(a: Activity) {
  switch (a.type) {
    case "buyer_accepted":
      return `Accepted buyer ${getDetail(a, "buyerId")}`;
    case "buyer_rejected":
      return `Rejected buyer ${getDetail(a, "buyerId")}`;
    case "acquisition_created":
      return `Acquisition created for match ${getDetail(a, "matchId")}`;
    case "nda_signed":
      return `NDA signed`;
    case "doc_uploaded":
      return `Document uploaded`;
    default:
      return a.type;
  }
}

function getDetail(a: Activity, key: string) {
  const val = a.details?.[key];
  return typeof val === "string" || typeof val === "number" ? String(val) : "";
}
