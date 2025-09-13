import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, HTMLAttributes, ReactNode } from "react";

export type MessageProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof messageContentVariants> & {
    author: "user" | "assistant";
    avatar?: string;
    content?: ReactNode;
  };

export const Message = ({
  className,
  author,
  avatar,
  content,
  variant,
  ...props
}: MessageProps) => (
  <div
    className={cn(
      "group flex w-full items-end gap-2 py-4",
      author === "user" ? "is-user justify-end" : "is-assistant justify-start",
      className,
    )}
    {...props}
  >
    {author === "assistant" && <MessageAvatar name={avatar} />}
    <MessageContent variant={variant}>{content}</MessageContent>
    {author === "user" && <MessageAvatar name={avatar} />}
  </div>
);

const messageContentVariants = cva(
  "is-user:dark flex flex-col gap-2 overflow-hidden rounded-lg text-sm",
  {
    variants: {
      variant: {
        contained: [
          "max-w-[80%] px-4 py-3",
          "group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground",
          "group-[.is-assistant]:bg-secondary group-[.is-assistant]:text-foreground",
        ],
        flat: [
          "group-[.is-user]:max-w-[80%] group-[.is-user]:bg-secondary group-[.is-user]:px-4 group-[.is-user]:py-3 group-[.is-user]:text-foreground",
          "group-[.is-assistant]:text-foreground",
        ],
      },
    },
    defaultVariants: {
      variant: "contained",
    },
  }
);

export type MessageContentProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof messageContentVariants>;

export const MessageContent = ({
  children,
  className,
  variant,
  ...props
}: MessageContentProps) => (
  <div
    className={cn(messageContentVariants({ variant, className }))}
    {...props}
  >
    {children}
  </div>
);

export type MessageAvatarProps = ComponentProps<typeof Avatar> & {
  src?: string;
  name?: string;
};

export const MessageAvatar = ({
  src,
  name,
  className,
  ...props
}: MessageAvatarProps) => (
  <Avatar className={cn("size-8 shrink-0 ring-1 ring-border", className)} {...props}>
    {src && <AvatarImage alt="" className="mt-0 mb-0" src={src} />}
    <AvatarFallback>
      {name ? (name.length > 2 ? name.slice(0, 2) : name) : "ME"}
    </AvatarFallback>
  </Avatar>
);
