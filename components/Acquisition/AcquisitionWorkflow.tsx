import React from "react";

const steps = [
    { label: "NDA Stage", desc: "Sign and exchange agreement" },
    { label: "Data Room", desc: "Upload key documents" },
    { label: "Q&A", desc: "Clarify details, ask questions" },
    { label: "Offer", desc: "Seller reviews & responds" },
    { label: "Due Diligence", desc: "Analyze financial/operational data (AI-powered summaries)" },
    { label: "Final Agreement", desc: "E-sign, close deal" }
];

export const AcquisitionWorkflow = () => (
    <div className="max-w-3xl bg-card rounded-3xl shadow-xl p-10 mx-auto mt-10 space-y-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">Acquisition Process</h2>
        <ol className="space-y-3">
            {steps.map((step, idx) => (
                <li key={idx} className="flex items-center gap-3">
                    <span className={`text-white px-3 py-1 rounded-full font-bold ${idx === 4 ? "bg-accent" : "bg-primary"}`}>{idx + 1}</span>
                    <div>
                        <div className="font-bold">{step.label}</div>
                        <div className="text-xs text-gray-500">{step.desc}</div>
                    </div>
                </li>
            ))}
        </ol>

        <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Upload & Analyze Financial Docs (AI-powered)</h3>
            <div className="border border-dashed border-accent rounded-lg p-5 text-center">
                <input type="file" className="block mx-auto" />
                <button className="mt-4 bg-accent text-white px-6 py-2 rounded-lg font-semibold shadow">Summarize & Flag Risks</button>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-400 italic">AI summary of financials, flagging risks and major KPIs...</span>
                </div>
            </div>
        </div>
        <div className="mt-8 text-right">
            <button className="bg-primary text-white px-6 py-2 rounded-2xl font-semibold shadow">Advance to Next Step</button>
        </div>
    </div>
);
