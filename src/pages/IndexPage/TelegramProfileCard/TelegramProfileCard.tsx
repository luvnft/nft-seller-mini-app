import { initData, useSignal } from "@telegram-apps/sdk-react";
import { TelegramProfilePhoto } from "./TelegramProfilePhoto";
import { getUserFullname } from "@/lib/telegram";

export function TelegramProfileCard() {
  const user = useSignal(initData.user);

  if (!user) return null;

  return (
    <div className="flex w-full flex-row items-center gap-4 rounded-lg bg-background p-4">
      <TelegramProfilePhoto />

      <div>
        <h1 className="text-xl font-medium">{getUserFullname(user)}</h1>
        <h2 className="text-base font-medium text-tg-hint-foreground">
          {user.username ? `@${user.username}` : `#${user.id}`}
        </h2>
      </div>
    </div>
  );
}
