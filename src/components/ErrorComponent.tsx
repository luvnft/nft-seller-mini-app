import { cn } from "@/lib/utils";

export function ErrorComponent({ className }: { className?: string }) {
  return (
    <p className={cn("text-center text-tg-hint-foreground", className)}>
      {"Error :("}
    </p>
  );
}
