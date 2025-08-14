import React from "react";
import Link from "next/link";
import { Navigation } from "@/components/UI/Navigation";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-background flex flex-col items-center justify-center px-6">
        <section className="max-w-3xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">DealFlow</h1>
          <p className="text-lg text-gray-600">
            An approachable platform where sellers reach out to buyers first. Guided workflows and integrated AI reduce friction from first hello to final handshake.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link href="/onboarding/buyer">
              <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow hover:opacity-90">
                I’m a Buyer
              </button>
            </Link>
            <Link href="/onboarding/seller">
              <button className="bg-secondary text-white px-6 py-3 rounded-xl font-semibold shadow hover:opacity-90">
                I’m a Seller
              </button>
            </Link>
          </div>
        </section>

        <section className="mt-16 max-w-4xl grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-card rounded-2xl shadow p-6 border border-border">
            <h3 className="font-bold text-lg mb-2">Smart Matching</h3>
            <p className="text-gray-600 text-sm">
              Sellers initiate contact with targeted buyers based on preferences
              and investment goals.
            </p>
          </div>
          <div className="bg-card rounded-2xl shadow p-6 border border-border">
            <h3 className="font-bold text-lg mb-2">Guided Process</h3>
            <p className="text-gray-600 text-sm">
              Step-by-step workflows to take the stress out of acquisitions.
            </p>
          </div>
          <div className="bg-card rounded-2xl shadow p-6 border border-border">
            <h3 className="font-bold text-lg mb-2">AI Assistance</h3>
            <p className="text-gray-600 text-sm">
              Financial document analysis, risk flags, and smart suggestions to
              close deals faster.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
