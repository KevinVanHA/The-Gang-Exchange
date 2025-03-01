import MarketplaceProvider from "@/hooks/useMarketplaceContext";
import type { ReactNode } from "react";

export default function MarketplaceLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<any>;
}) {
  return (
    <MarketplaceProvider
      chainId={params.chainId}
      contractAddress={params.contractAddress}
    >
      {children}
    </MarketplaceProvider>
  );
}
