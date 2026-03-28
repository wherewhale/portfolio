import { NOTION_URL, VELOG_URL } from "@/constants/links";
import { FooterMenu } from "@/types/footer";

export const FOOTER_MENUS: FooterMenu[] = [
  {
    title: "Profile",
    links: [
      {
        name: "About Me",
        href: "/profile",
      },
    ],
  },
  {
    title: "Projects",
    links: [
      {
        name: "Palette",
        href: "/projects/palette",
      },
      {
        name: "GyopoolAI",
        href: "/projects/gyopool",
      },
      {
        name: "KB refit",
        href: "/projects/kb-refit",
      },
      {
        name: "DOLDOL",
        href: "/projects/doldol",
      },
      {
        name: "Copool",
        href: "/projects/copool",
      },
    ],
  },
  {
    title: "Articles",
    links: [
      {
        name: "Velog",
        href: VELOG_URL,
        isExternal: true,
      },
      {
        name: "Notion",
        href: NOTION_URL,
        isExternal: true,
      },
    ],
  },
];
