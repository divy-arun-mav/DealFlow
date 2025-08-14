"use client";
import React, { useEffect, useState } from "react";
import { BuyerProfile } from "./BuyerProfile";
import { getBuyer, type Buyer } from "@/lib/storage";

export default function BuyerProfileClient({ buyerId }: { buyerId: string }) {
  const [buyer, setBuyer] = useState<Buyer | null>(null);

  useEffect(() => {
    const b = getBuyer(buyerId) || null;
    setBuyer(b);
  }, [buyerId]);

  if (!buyer) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="rounded-lg border border-border bg-card p-6 text-muted-foreground">
          Buyer not found.
        </div>
      </div>
    );
  }

  return <BuyerProfile buyer={buyer} />;
}
