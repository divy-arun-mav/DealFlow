import React from "react";
import { SellerOnboardingForm } from "@/components/Onboarding/SellerOnboardingForm";
import { Navigation } from "@/components/UI/Navigation";

const SellerOnboardingPage = () => {
    return (
        <>
            <Navigation />
            <div className="pt-20 min-h-screen bg-background">
                <SellerOnboardingForm />
            </div>
        </>
    );
};

export default SellerOnboardingPage;
