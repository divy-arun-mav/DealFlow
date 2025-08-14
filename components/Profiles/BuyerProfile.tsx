import React from "react";
import { Buyer } from "./BuyerCard";
import Image from "next/image";

export const BuyerProfile = ({ buyer }: { buyer: Buyer }) => (
    <div className="max-w-2xl bg-card rounded-3xl shadow-xl p-10 space-y-6 mx-auto border border-border">
        <div className="flex gap-8 items-center">
            <Image src={buyer.avatar} alt={`${buyer.name} avatar`} width={112} height={112} className="rounded-full border-4 border-primary" />
            <div>
                <div className="text-2xl font-bold">{buyer.name}</div>
                <div className="text-sm font-medium text-gray-500">Location: {buyer.location}</div>
            </div>
        </div>
        <div>
            <h4 className="font-semibold">Acquisition Budget</h4>
            <div>{buyer.budget}</div>
        </div>
        <div>
            <h4 className="font-semibold">Industry Preferences</h4>
            <div>{buyer.preferredIndustry}</div>
        </div>
        <div>
            <h4 className="font-semibold">Involvement Level</h4>
            <div>{buyer.involvement}</div>
        </div>
        <div>
            <h4 className="font-semibold">Acquisition Experience</h4>
            <div>{buyer.experience}</div>
        </div>
    </div>
);
