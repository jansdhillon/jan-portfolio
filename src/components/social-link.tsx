import { SocialLinkProps } from "@/lib/types";

export const SocialLink = ({ icon, username, link }: SocialLinkProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="flex w-full gap-4 md:px-4 flex-row items-center  text-sm font-medium text-muted-foreground hover:text-primary active:text-primary  "
  >
    <div>{icon}</div>
    <div className="lg:hidden">{username}</div>
  </a>
);
