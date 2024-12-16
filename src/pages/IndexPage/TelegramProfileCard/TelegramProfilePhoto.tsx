import { getUserAcronym } from "@/lib/telegram";
import { initData, useSignal } from "@telegram-apps/sdk-react";

export function TelegramProfilePhoto() {
  const user = useSignal(initData.user);

  if (!user) return null;

  if (!user?.photoUrl) {
    return (
      <div className="flex aspect-square size-16 items-center justify-center rounded-full bg-gradient-to-t from-[#F68337] to-[#FEBA5A]">
        <p className="text-xl text-primary-foreground">
          {getUserAcronym(user)}
        </p>
      </div>
    );
  }

  return (
    <img src={user.photoUrl} className="aspect-square size-16 rounded-full" />
  );
}
