"use client";

import { useState } from "react";
import { STRATEGIES_12, STRATEGIES_DEEPDIVE } from '@/data/strategies';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SendReportDialog({
  open,
  onOpenChange,
  revenue,
  grossMargin,
  netMargin,
  globalImpact,
  currency,
  tableOneResults,
  deepDiveResults,
  showDeepDive,
}) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    currency: 'USD', // Add this
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [savedSimulationId, setSavedSimulationId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.firstName || !form.lastName || !form.email) {
      alert('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    if (!tableOneResults) {
      alert('Calculation results not available. Please try again.');
      setIsSubmitting(false);
      return;
    }

    try {
      const { saveSimulation } = await import('@/lib/db/saveSimulation');
      const { STRATEGIES_12, STRATEGIES_DEEPDIVE } = await import('@/data/strategies'); // ✅ Import here

      const inputs = {
        revenue: parseFloat(revenue),
        grossMargin: parseFloat(grossMargin),
        netMargin: parseFloat(netMargin),
        globalImpact: parseFloat(globalImpact),
        currency: currency,
      };

      const tableOneStrategies = STRATEGIES_12.map(s => ({
        id: s.id,
        name: s.name,
        impact: parseFloat(globalImpact),
      }));

      const metadata = {
        userAgent: navigator.userAgent,
        ipAddress: null,
      };

      const result = await saveSimulation({
        userData: {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
        },
        inputs,
        tableOneResults,
        deepDiveResults: showDeepDive ? deepDiveResults : null,
        tableOneStrategies,
        deepDiveStrategies: showDeepDive ? STRATEGIES_DEEPDIVE : null, // ✅ Now defined
        metadata,
      });

      if (result.success) {
        setSavedSimulationId(result.simulation.id);
        setSubmissionSuccess(true);
        console.log('Simulation saved!', result.simulation.id);
      } else {
        alert('Failed to save simulation. Please try again.');
        console.error('Save error:', result.error);
      }

    } catch (error) {
      console.error('Error in handleSubmit:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleReloadSimulator = () => {
    // For iframe - force full page reload
    window.location.reload();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
            <DialogTitle className="text-2xl mb-1">
                {submissionSuccess ? '' : 'Send me the report'}
            </DialogTitle>
            <DialogDescription className="text-base mb-1">
                {submissionSuccess
                ? ''
                : 'Enter your details and we\'ll email your Profit Acceleration report.'
                }
            </DialogDescription>
            </DialogHeader>

            {isSubmitting ? (
            <div className="flex flex-col items-center justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mb-4"></div>
                <p className="text-lg text-gray-600">Saving your simulation...</p>
            </div>
            ) : submissionSuccess ? (
            <>
                <div className="text-center py-6">
                <div className="mb-4">
                    <svg
                    className="w-16 h-16 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                    Your Simulation Has Been Saved!
                </h3>
                <p className="text-gray-600 mb-4">
                    A detailed report has been emailed to you..
                </p>
                {savedSimulationId && (
                    <p className="text-sm text-gray-500">
                    Simulation ID: {savedSimulationId.substring(0, 8)}... (temp for development...)
                    </p>
                )}
                </div>
                <DialogFooter className="justify-center">
                <Button
                    onClick={handleReloadSimulator}
                    className="bg-navy text-white hover:bg-opacity-85 transition px-6"
                >
                    Run Another Simulation
                </Button>
                </DialogFooter>
            </>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                <div className="text-left">
                    <Label className="mb-1 text-base" htmlFor="firstName">
                    First Name<small>*</small>
                    </Label>
                    <Input
                    id="firstName"
                    value={form.firstName}
                    autoComplete="given-name"
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="p-4 h-12"
                    required
                    disabled={isSubmitting}
                    />
                </div>
                <div className="text-left">
                    <Label className="mb-1 text-base" htmlFor="lastName">
                    Last Name<small>*</small>
                    </Label>
                    <Input
                    id="lastName"
                    value={form.lastName}
                    autoComplete="family-name"
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="p-4 h-12"
                    required
                    disabled={isSubmitting}
                    />
                </div>
                </div>

                <div className="text-left">
                <Label className="mb-1 text-base" htmlFor="email">
                    Email<small>*</small>
                </Label>
                <Input
                    id="email"
                    type="email"
                    value={form.email}
                    autoComplete="email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="p-4 h-12"
                    required
                    disabled={isSubmitting}
                />
                </div>

                <DialogFooter className="mt-2">
                <Button
                    type="button"
                    variant="outline"
                    className="cursor-pointer"
                    onClick={() => onOpenChange(false)}
                    disabled={isSubmitting}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    className="bg-navy text-white hover:bg-opacity-85 transition"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send report"}
                </Button>
                </DialogFooter>
            </form>
            )}
        </DialogContent>
        </Dialog>
  );
}
