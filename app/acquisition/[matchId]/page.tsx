import React from "react";
import { Navigation } from "@/components/UI/Navigation";
import { AcquisitionWorkflow } from "@/components/Acquisition/AcquisitionWorkflow";
import ClientMatchHeader from "@/components/Acquisition/ClientMatchHeader";

export default async function AcquisitionPage({ params }: { params: Promise<{ matchId: string }> }) {
    const { matchId } = await params;

    return (
        <>
            <Navigation />
            <div className="pt-20 min-h-screen bg-background">
                <ClientMatchHeader matchId={matchId} />
                <AcquisitionWorkflow />
            </div>
        </>
    );
}
