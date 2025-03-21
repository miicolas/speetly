import { Project, Step } from "./project-type";
import { Payment } from "./payment-type";
import { LucideIcon } from "lucide-react";


export interface StatusInfo {
  label: string;
  variant: "default" | "secondary" | "destructive" | "outline";
  icon: LucideIcon;
  color: string;
}

export interface PaymentStatusInfo {
  label: string;
  variant: string;
}

export interface PaymentMethodInfo {
  label: string;
  variant: "default" | "secondary" | "destructive" | "outline";
}

export interface ProjectHeaderProps {
  project: Project;
  statusInfo: StatusInfo;
}

export interface ProjectProgressProps {
  progressPercentage: number;
  statusInfo: {
    label: string;
    color: string;
  };
  formattedEndDate: string;
  timeDistance: string;
}

export interface ProjectDetailsProps {
  project: Project;
  paymentStatusInfo: PaymentStatusInfo;
}

export interface ProjectStepsProps {
  steps: Step[];
}

export interface ProjectPaymentProps {
  project: Project;
  payments: Payment[];
  paymentMethodInfo: PaymentMethodInfo;
} 

export interface ProjectContact {
  name: string;
  email: string;
}