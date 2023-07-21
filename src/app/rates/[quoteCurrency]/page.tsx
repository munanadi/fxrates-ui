import { Metadata } from "next";
import { currencyMap } from "../data/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LinePriceChartType,
  PriceChart,
} from "./components/price-chart";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard showing FX Rates.",
};

// Refetch data if older than 1hr
export const revalidate = 3600;

interface PageProps {
  params: any;
}

async function getCountryRates(countryCode: string) {
  const { data: prices, error } = await supabase
    .from("fx-rates")
    .select("*")
    .order("timestamp", { ascending: true })
    .eq("quote", countryCode.toUpperCase());

  if (error || prices.length == 0) {
    // Error fetching stattes or empty
    return { rates: null, error: true };
  }

  return { rates: prices, error: false };
}

export default async function CurrencyDetail({
  params,
}: PageProps) {
  const { error, rates } = await getCountryRates(
    params.quoteCurrency
  );

  const chartData: LinePriceChartType[] =
    rates?.map((rate) => ({
      date: new Date(rate.timestamp!)
        .toTimeString()
        .slice(0, 5),
      price: rate.price || 0.0,
    })) ?? [];

  const quoteCurrency = params.quoteCurrency;
  // Fetch INR by default
  const { code, name, symbol } =
    currencyMap.get(quoteCurrency) ??
    currencyMap.get("INR")!;

  return error ? (
    <div>Something went wrong</div>
  ) : (
    rates && (
      <>
        <div className="flex-col md:flex">
          <div className="flex-1 space-y-4 p-8 pt-6">
            <Link href="/rates" className="inline-flex">
              <ArrowLeftIcon /> Go Back
            </Link>

            <div className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2-xl font-medium">
                    {name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold flex">
                    {symbol}
                    {rates[0]?.price}
                    <p className="text-muted-foreground ml-1 font-light">
                      = 1 $
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="border">
              <PriceChart chartData={chartData} />
            </div>
          </div>
        </div>
      </>
    )
  );
}
