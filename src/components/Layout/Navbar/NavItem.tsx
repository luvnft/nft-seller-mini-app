import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

export function NavItem({
  to,
  name,
  icon,
  selected,
}: {
  to: string;
  name: string;
  icon: React.ReactNode;
  selected: boolean;
}) {
  const navigate = useNavigate();

  return (
    <div
      className="flex h-full flex-col items-center gap-1"
      onClick={() => navigate(to)}
    >
      <div
        className={cn(
          "rounded-full px-5 py-1 [&_svg]:size-6 [&_svg]:text-tg-hint-foreground",
          selected &&
            "bg-primary/20 dark:bg-foreground/20 [&_svg]:text-primary [&_svg]:dark:text-foreground",
        )}
      >
        {icon}
      </div>

      <p
        className={cn(
          "text-xs font-medium text-tg-hint-foreground",
          selected && "text-primary dark:text-foreground",
        )}
      >
        {name}
      </p>
    </div>
  );
}
