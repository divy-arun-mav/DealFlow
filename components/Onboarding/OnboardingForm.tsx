"use client";
import React, { useState } from "react";

interface QuestionConfig {
    id: string;
    type: 'text' | 'number' | 'textarea' | 'select' | 'range';
    label: string;
    options?: string[];
    rows?: number;
}

interface StepConfig {
    title: string;
    description?: string;
    questions: QuestionConfig[];
}

type FormDataMap = Record<string, string | number | undefined>;

interface Props {
    steps: StepConfig[];
    onFinish: (data: FormDataMap) => void;
    primaryColor?: string;
}

export const OnboardingForm: React.FC<Props> = ({ steps, onFinish, primaryColor = "bg-primary" }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<FormDataMap>({});

    const step = steps[currentStep];
    const totalSteps = steps.length;

    const handleChange = (id: string, value: string | number) => {
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleNext = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(s => s + 1);
        } else {
            onFinish(formData);
        }
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleNext();
            }}
            className="mx-auto my-8 max-w-lg bg-card rounded-3xl shadow-lg p-10 space-y-6"
        >
            <h2 className="text-2xl font-semibold">{step.title}</h2>
            {step.description && <p className="text-gray-600">{step.description}</p>}

            {step.questions.map(q => (
                <label key={q.id} className="block font-medium">
                    {q.label}
                    {q.type === "textarea" ? (
                        <textarea
                            rows={q.rows || 3}
                            value={formData[q.id] || ""}
                            onChange={(e) => handleChange(q.id, e.target.value)}
                            className="block w-full mt-2 border rounded-lg p-3"
                        />
                    ) : q.type === "select" ? (
                        <select
                            value={formData[q.id] || ""}
                            onChange={(e) => handleChange(q.id, e.target.value)}
                            className="block w-full mt-2 border rounded-lg p-3"
                        >
                            <option value="">Select…</option>
                            {q.options?.map(option => <option key={option}>{option}</option>)}
                        </select>
                    ) : (
                        <input
                            type={q.type}
                            value={formData[q.id] || ""}
                            onChange={(e) => handleChange(q.id, e.target.value)}
                            className="block w-full mt-2 border rounded-lg p-3"
                        />
                    )}
                </label>
            ))}

            <div className="flex justify-between pt-4">
                <button
                    type="button"
                    disabled={currentStep === 0}
                    onClick={() => setCurrentStep(s => s - 1)}
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
                >
                    Back
                </button>
                <button
                    type="submit"
                    className={`px-6 py-2 text-white ${primaryColor} rounded-xl font-semibold`}
                >
                    {currentStep < totalSteps - 1 ? "Next" : "Finish Onboarding"}
                </button>
            </div>
        </form>
    );
};
