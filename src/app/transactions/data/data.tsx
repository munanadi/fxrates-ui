import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Ban,
  CheckCircleIcon,
  Loader,
} from "lucide-react";

export const statuses = [
  {
    value: "in progress",
    label: "In Progress",
    icon: Loader,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircleIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: Ban,
  },
];

export const transactionType = [
  {
    label: "Sent",
    value: "sent",
    icon: ArrowRightIcon,
  },
  {
    label: "Received",
    value: "received",
    icon: ArrowLeftIcon,
  },
];
