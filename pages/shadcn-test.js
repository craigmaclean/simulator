import { useState } from 'react';
import { Button } from '@components/ui/button';
import { Label } from '@components/ui/label';
import { Input } from '@components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@components/ui/select';
import { toast } from 'sonner';

export default function ShadcnTest() {
  const [currency, setCurrency] = useState('CAD');
  return (
    <main className="max-w-xl mx-auto p-8 space-y-6">
      <Button onClick={() => toast.success('Sonner working!')}>Show toast</Button>

      <div className="space-y-2">
        <Label>Currency</Label>
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
          <SelectContent>
            <SelectItem value="CAD">CAD</SelectItem>
            <SelectItem value="USD">USD</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="p-3 rounded bg-primary text-primary-foreground">
        If this is navy with white text, token mapping is good.
      </div>
    </main>
  );
}
