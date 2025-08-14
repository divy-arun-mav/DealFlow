import React from "react";
import { Navigation } from "@/components/UI/Navigation";
import BuyerProfileClient from "../../../components/Profiles/BuyerProfileClient";

export default async function BuyerDetailPage({ params }: { params: Promise<{ buyerId: string }> }) {
    const { buyerId } = await params;
    return (
        <>
            <Navigation />
            <div className="pt-20 min-h-screen bg-background p-8">
                <BuyerProfileClient buyerId={buyerId} />
            </div>
        </>
    );
}
