import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <Link href="/">
        <div className="relative z-20 flex items-center text-lg font-medium">
          {/* <Command className="mr-2 h-6 w-6" /> Acme Inc */}
          Credain
        </div>
      </Link>
      <nav
        className={cn(
          "flex h-16 px-4 items-center space-x-4 lg:space-x-6",
          className
        )}
        {...props}
      >
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Transactions
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          About
        </Link>
        <Link
          href="/rates"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Fx Rates
        </Link>
      </nav>
    </>
  );
}
