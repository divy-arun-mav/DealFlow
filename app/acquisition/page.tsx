import React from "react";
import { Navigation } from "@/components/UI/Navigation";
import Link from "next/link";
import AcquisitionList from "@/components/Acquisition/AcquisitionList";

export default function AcquisitionIndexPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-background p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Acquisitions</h1>
          <Link className="text-sm text-primary hover:underline" href="/profiles/buyers">Find Buyers</Link>
        </div>
  <AcquisitionList />
      </main>
    </>
  );
}
