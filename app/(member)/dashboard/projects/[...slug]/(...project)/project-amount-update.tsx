"use client";

import React, { useState, useEffect } from "react";
import { Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

interface ProjectAmountUpdateProps {
    currentProjectAmount: number | null;
    onUpdate: (projectAmount: number) => Promise<boolean>;
}

export function ProjectAmountUpdate({
    currentProjectAmount,
    onUpdate,
}: ProjectAmountUpdateProps) {
    const [amount, setAmount] = useState<number | undefined>(
        currentProjectAmount !== null ? currentProjectAmount : undefined
    );
    const [isUpdating, setIsUpdating] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [tempAmount, setTempAmount] = useState<number | undefined>(amount);

    useEffect(() => {
        setTempAmount(amount);
    }, [amount]);

    const handleAmountChange = async () => {
        if (tempAmount === undefined || tempAmount === null) return;

        setIsUpdating(true);
        setIsOpen(false);

        try {
            const success = await onUpdate(tempAmount);
            if (success) {
                toast.success("Amount project updated");
                setAmount(tempAmount);
            } else {
                toast.error("Error during update the project amount");
                setTempAmount(amount);
            }
        } catch (error) {
            console.error("error", error);
            toast.error("Error during update the project amount");
            setTempAmount(amount);
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div className="flex flex-col space-y-2">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className={cn(
                            "w-full justify-start text-left font-normal",
                            !amount && "text-muted-foreground"
                        )}
                        disabled={isUpdating}
                    >
                        <Euro className="mr-2 h-4 w-4" />
                        <span>Update amount</span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-4" align="start">
                    <div className="flex flex-col space-y-4">
                        <div className="relative">
                            <Input
                                type="number"
                                value={tempAmount}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setTempAmount(
                                        value === "" ? undefined : Number(value)
                                    );
                                }}
                                className="pl-7"
                                placeholder="0.00"
                            />
                            <Euro className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                onClick={() => setIsOpen(false)}
                                className="flex-1"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleAmountChange}
                                disabled={
                                    isUpdating || tempAmount === undefined
                                }
                                className="flex-1"
                            >
                                Confirm
                            </Button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
