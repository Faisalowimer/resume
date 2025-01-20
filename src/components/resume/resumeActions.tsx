'use client';

import { Button } from "@/components/ui/button";
import { Printer } from 'lucide-react';

export function ResumeActions() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed top-8 right-4 flex gap-2 print:hidden z-50">
            <Button
                variant="outline"
                size="icon"
                className="flex items-center gap-1 w-12 bg-white hover:bg-gray-100"
                onClick={handlePrint}
                title="Print"
            >
                <Printer className="h-8 w-8 font-bold" />
            </Button>
        </div>
    );
}; 