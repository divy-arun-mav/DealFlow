"use client";
import React, { useEffect, useState } from "react";
import { Navigation } from "@/components/UI/Navigation";
import { BuyerCard, type Buyer } from "@/components/Profiles/BuyerCard";
import Link from "next/link";
import { seedBuyersIfEmpty, getBuyers } from "@/lib/storage";


const BuyersPage = () => {
    return (
        <>
            <Navigation />
            <div className="pt-20 min-h-screen bg-background flex flex-col items-center gap-6 p-8">
                <div className="max-w-3xl text-center">
                    <h1 className="text-2xl font-bold mb-2">Buyer Directory</h1>
                    <p className="text-gray-600 text-sm">Sellers can accept or reject. Click a card to view full profile.</p>
                </div>
                <BuyersGrid />
                <div className="bg-card rounded-2xl shadow p-6 border border-border text-sm text-gray-600">
                    After accepting a buyer, your deal appears in <Link className="text-primary hover:underline" href="/acquisition">Acquisitions</Link>.
                </div>
            </div>
        </>
    );
};

function BuyersGrid() {
    const [buyers, setBuyers] = useState<Buyer[]>([]);
    useEffect(() => {
        seedBuyersIfEmpty();
        setBuyers(getBuyers());
    }, []);

    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {buyers.map((buyer) => (
                <BuyerCard key={buyer.id} buyer={buyer} />
            ))}
        </div>
    );
}

export default BuyersPage;
