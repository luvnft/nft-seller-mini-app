import { cn } from "@/lib/utils";
import { Loader } from "./ui/loader";

export function LoadingComponent({ className }: { className?: string }) {
  return <Loader className={cn("mx-auto animate-spin", className)} />;
}
