"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { acceptBuyer, rejectBuyer } from "@/lib/storage";

export type Buyer = {
    id: string;
    name: string;
    avatar: string;
    budget: string;
    experience: string;
    preferredIndustry: string;
    location: string;
    involvement: string;
};

export const BuyerCard = ({ buyer }: { buyer: Buyer }) => {
    const handleAccept = () => {
        acceptBuyer(buyer.id);
        alert(`You accepted ${buyer.name}. Acquisition created.`);
    };
    const handleReject = () => {
        rejectBuyer(buyer.id);
        alert(`You rejected ${buyer.name}.`);
    };
    return (
        <div className="bg-card rounded-2xl shadow p-6 flex flex-col items-center gap-3 w-80 border border-border">
            <Link href={`/profiles/${buyer.id}`} className="flex flex-col items-center gap-3">
                <Image src={buyer.avatar} alt={`${buyer.name} avatar`} width={64} height={64} className="rounded-full border-4 border-primary" />
                <div className="text-lg font-semibold hover:underline">{buyer.name}</div>
            </Link>
            <div className="text-sm">Budget: <span className="font-bold">{buyer.budget}</span></div>
            <div className="text-xs text-gray-500">{buyer.preferredIndustry} — {buyer.location}</div>
            <div className="mt-2 flex gap-2 w-full">
                <button onClick={handleReject} className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg border border-border hover:bg-gray-200">Reject</button>
                <button onClick={handleAccept} className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90">Accept</button>
            </div>
        </div>
    );
};
