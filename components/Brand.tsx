import Link from "next/link";
export default function Brand({compact = false}: {compact?: boolean}) {
  return <Link href="/" className={compact ? "brand brand-compact" : "brand"} aria-label="BLEZOLAD, home">
    <span className="brand-mark" aria-hidden="true"><span>b</span><i>.</i></span>
    <span className="brand-type">BLEZOLAD<span>FULL STACK WEB DEVELOPER</span></span>
  </Link>;
}
