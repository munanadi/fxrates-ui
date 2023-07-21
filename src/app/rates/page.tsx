import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { currencyMap } from "./data/data";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard showing FX Rates.",
};

async function fetchLatestRates() {
  const { data: prices, error } = await supabase
    .from("fx-rates")
    .select("*")
    .order("timestamp", { ascending: false })
    .limit(8); // fetching 8 rates right now, change if added more countries

  if (error || prices.length == 0) {
    // Error fetching stattes or empty
    return { rates: null, error: true };
  }

  return { rates: prices, error: false };
}

export default async function DashboardPage() {
  const { rates, error } = await fetchLatestRates();

  return error ? (
    <div>Something went wrong</div>
  ) : (
    rates && (
      <>
        <div className="flex-col md:flex">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex mb-3">
              <h2 className="text-4xl font-bold tracking-tight">
                Latest FX Rates
              </h2>
              <p className="text-xs text-muted-foreground">
                * Rates in terms of USD($)
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {rates.map(
                  (curr) =>
                    curr.quote && (
                      <Link
                        key={curr.id}
                        href={`/rates/${curr.quote.toLowerCase()}`}
                        className="cursor-pointer border rounded-lg border-gray-600 hover:translate-y-0.5 hover:translate-x-0.5"
                      >
                        <Card>
                          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                              {
                                currencyMap.get(
                                  curr.quote.toLowerCase()
                                )?.name
                              }
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">
                              {
                                currencyMap.get(
                                  curr.quote.toLowerCase()
                                )?.symbol
                              }{" "}
                              {curr.price!.toFixed(2)}
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}
