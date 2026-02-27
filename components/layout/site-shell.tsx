import { BackToTop } from "@/components/layout/back-to-top";
import { Footer } from "@/components/layout/footer";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { Navbar } from "@/components/layout/navbar";
import { TopInfoBar } from "@/components/layout/top-info-bar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopInfoBar />
      <Navbar />
      <main className="overflow-x-hidden pb-28 md:pb-0">{children}</main>
      <Footer />
      <MobileCtaBar />
      <BackToTop />
    </>
  );
}
