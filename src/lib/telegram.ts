import { User } from "@telegram-apps/sdk-react";

export function getUserFullname(user: User) {
  if (!user.lastName) return user.firstName;
  return `${user.firstName} ${user.lastName}`;
}

export function getUserAcronym(user: User) {
  if (!user.lastName) return user.firstName[0];
  return `${user.firstName[0]}${user.lastName[0]}`;
}
