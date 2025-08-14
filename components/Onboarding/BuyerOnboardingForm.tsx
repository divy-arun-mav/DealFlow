"use client";
import React from "react";
import { OnboardingForm } from "./OnboardingForm";
import { buyerSteps } from "@/config/onboardingQuestions";
import { useRouter } from "next/navigation";
import { seedBuyersIfEmpty } from "@/lib/storage";

type BuyerFormData = Record<string, string | number | undefined>;

export const BuyerOnboardingForm = () => {
    const router = useRouter();
    const handleFinish = (data: BuyerFormData) => {
        console.log("Buyer Onboarding Data:", data);
        seedBuyersIfEmpty();
        router.push("/profiles/buyers");
    };

    return <OnboardingForm steps={buyerSteps} onFinish={handleFinish} primaryColor="bg-primary" />;
};
