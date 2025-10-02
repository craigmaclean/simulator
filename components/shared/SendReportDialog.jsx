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
  onSubmit, // optional override hook for later (e.g., API call)
}) {
  const [form, setForm] = useState(defaultValues);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.email) {
      toast.error?.("Please fill out all fields.");
      return;
    }

    try {
      if (typeof onSubmit === "function") {
        await onSubmit(form);
      } else {
        // stub: replace with your real action later
        console.log("Lead form submitted:", form);
      }
      toast.success?.("Thanks! We’ll send your report.");
      onOpenChange(false);
    } catch (err) {
      console.error(err);
      toast.error?.("Something went wrong. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-1">Send me the report</DialogTitle>
          <DialogDescription className="text-base mb-1">
            Enter your details and we’ll email your Profit Acceleration report.
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
            />
          </div>

          <DialogFooter className="mt-2">
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-navy text-white hover:bg-opacity-85 transition">
              Send report
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
