import { cn } from "@/lib/utils";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { backButton } from "@telegram-apps/sdk-react";

export function Page({
  back,
  className,
  children,
}: PropsWithChildren<{ back?: boolean; className?: string }>) {
  const navigate = useNavigate();

  useEffect(() => {
    if (back) {
      backButton.show();
      return backButton.onClick(() => {
        navigate(-1);
      });
    }
    backButton.hide();
  }, [back]);

  return <main className={cn(className, "mb-20")}>{children}</main>;
}
