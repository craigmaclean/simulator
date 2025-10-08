"use client";

import { useState } from "react";
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
  defaultValues = { firstName: "", lastName: "", email: "" },
  simulationData,
}) {
  const [form, setForm] = useState(defaultValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.email) {
      toast.error("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/simulation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          ...simulationData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save simulation");
      }

      console.log("Simulation saved with ID:", data.id);
      toast.success("Thanks! We'll send your report.");
      onOpenChange(false);

      // Reset form
      setForm({ firstName: "", lastName: "", email: "" });
    } catch (err) {
      console.error("Submission error:", err);
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-1">Send me the report</DialogTitle>
          <DialogDescription className="text-base mb-1">
            Enter your details and we'll email your Profit Acceleration report.
          </DialogDescription>
        </DialogHeader>

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
      </DialogContent>
    </Dialog>
  );
}
