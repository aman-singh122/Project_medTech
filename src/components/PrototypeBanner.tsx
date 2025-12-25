import { AlertTriangle } from 'lucide-react';

const PrototypeBanner = () => {
  return (
    <div className="bg-warning text-warning-foreground py-2 px-4 text-center text-sm font-medium flex items-center justify-center gap-2 sticky top-0 z-50">
      <AlertTriangle className="h-4 w-4" />
      <span>⚠ Prototype Mode: This healthcare system uses dummy data for demonstration only. Not for actual medical use.</span>
      <AlertTriangle className="h-4 w-4" />
    </div>
  );
};

export default PrototypeBanner;
