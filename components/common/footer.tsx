import { FOOTER_MENUS } from "@/constants/footer";
import { GITHUB_URL } from "@/constants/links";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container max-w-7xl  mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <span className="text-2xl font-extrabold tracking-tighter block mb-4">
              WHA1E
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              상상을 현실로 만드는 <br />
              프론트엔드 개발자.
            </p>
          </div>

          {FOOTER_MENUS.map((menu) => (
            <div key={menu.title}>
              <h4 className="font-semibold mb-4">{menu.title}</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {menu.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.isExternal ? "_blank" : "_self"}
                      className="hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Wha1eSon. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href={GITHUB_URL}
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
