import supabase from "@/config/supabase-client";
import DefaultPerson from "@images/boy.png";

export const getAvatar = (path: string | null | undefined) => {
  if (!path) return DefaultPerson;
  if (path.startsWith("http")) return path;
  return supabase.storage.from("portfolio").getPublicUrl(path).data.publicUrl;
};

export const convertDate = (date: string | Date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred";
};
