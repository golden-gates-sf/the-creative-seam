import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-10 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5 space-y-6">
          <Logo className="h-54" />
          <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
            A curated network where emerging brands meet the creatives who shape the way
            modern fashion is seen.
          </p>
          <div className="stitch-line w-40" />
          <p className="label-eyebrow">Estd 2026 — Leuven</p>
        </div>

        <div className="md:col-span-2 space-y-4">
          <p className="label-eyebrow">Discover</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/marketplace" className="hover:text-foreground text-muted-foreground">Marketplace</Link></li>
            <li><Link to="/campaigns/new" className="hover:text-foreground text-muted-foreground">Start a Project</Link></li>
            <li><Link to="/dashboard" className="hover:text-foreground text-muted-foreground">For Brands</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <p className="label-eyebrow">Studio</p>
          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-foreground text-muted-foreground" href="#">About</a></li>
            <li><a className="hover:text-foreground text-muted-foreground" href="#">Press</a></li>
            <li><a className="hover:text-foreground text-muted-foreground" href="#">Contact</a></li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-4">
          <p className="label-eyebrow">Newsletter</p>
          <form className="editorial-search">
            <input placeholder="Your email" type="email" />
            <button className="btn-primary !py-2 !px-5" type="submit">Join</button>
          </form>
          <p className="text-xs text-muted-foreground">Editorial drops, no noise.</p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="label-eyebrow">© 2026 The Seam.</p>
          <p className="label-eyebrow">Connecting Creatives and Brands</p>
        </div>
      </div>
    </footer>
  );
}
