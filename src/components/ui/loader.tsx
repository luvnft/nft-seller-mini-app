import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

export function Loader({ className }: { className?: string }) {
  return <LoaderCircle className={cn("animate-spin", className)} />;
}
