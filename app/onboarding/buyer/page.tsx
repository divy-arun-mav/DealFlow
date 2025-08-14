import React from "react";
import { BuyerOnboardingForm } from "@/components/Onboarding/BuyerOnboardingForm";
import { Navigation } from "@/components/UI/Navigation";

const BuyerOnboardingPage = () => {
    return (
        <>
            <Navigation />
            <div className="pt-20 min-h-screen bg-background">
                <BuyerOnboardingForm />
            </div>
        </>
    );
};

export default BuyerOnboardingPage;
