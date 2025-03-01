import MarketplaceProvider from "@/hooks/useMarketplaceContext";
import React from 'react';

export default async function MarketplaceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  // Await the params Promise to get the actual values
  const resolvedParams = await params;
  
  return (
    <MarketplaceProvider
      chainId={resolvedParams.chainId}
      contractAddress={resolvedParams.contractAddress}
    >
      {children}
    </MarketplaceProvider>
  );
}