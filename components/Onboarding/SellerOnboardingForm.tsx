"use client";
import React from "react";
import { OnboardingForm } from "./OnboardingForm";
import { sellerSteps } from "@/config/onboardingQuestions";
import { useRouter } from "next/navigation";
import { upsertSellerProfile } from "@/lib/storage";

type SellerFormData = {
    businessName?: string;
    industry?: string;
    askingPrice?: string | number;
    uniqueSellingPoint?: string;
    buyerType?: string;
};

export const SellerOnboardingForm = () => {
    const router = useRouter();
    const handleFinish = (data: SellerFormData) => {
        console.log("Seller Onboarding Data:", data);
        upsertSellerProfile({
            businessName: data.businessName,
            industry: data.industry,
            askingPrice: data.askingPrice ? Number(data.askingPrice) : undefined,
            uniqueSellingPoint: data.uniqueSellingPoint,
            buyerType: data.buyerType,
        });
        router.push("/acquisition");
    };

    return <OnboardingForm steps={sellerSteps} onFinish={handleFinish} primaryColor="bg-secondary" />;
};
