import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "About",
  description: "Credain About page",
};

export default function AboutPage() {
  return (
    <>
      <div className="container flex-col items-center justify-center">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">
            About Page
          </h2>
          <p className="text-muted-foreground">
            Netting Transactions made easy
          </p>
        </div>
      </div>
    </>
  );
}
