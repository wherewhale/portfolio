import { NOTION_URL, VELOG_URL } from "@/constants/links";
import { FooterMenu } from "@/types/footer";

export const FOOTER_MENUS: FooterMenu[] = [
  {
    title: "Profile",
    links: [
      {
        name: "About Me",
        href: "/about",
      },
    ],
  },
  {
    title: "Projects",
    links: [
      {
        name: "Palette",
        href: "/projects/1",
      },
      {
        name: "GyopoolAI",
        href: "/projects/2",
      },
      {
        name: "KB refit",
        href: "/projects/3",
      },
      {
        name: "DOLDOL",
        href: "/projects/4",
      },
      {
        name: "Copool",
        href: "/projects/5",
      },
    ],
  },
  {
    title: "Articles",
    links: [
      {
        name: "Velog",
        href: VELOG_URL,
      },
      {
        name: "Notion",
        href: NOTION_URL,
      },
    ],
  },
];
