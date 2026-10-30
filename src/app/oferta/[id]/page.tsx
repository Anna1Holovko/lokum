import { notFound } from "next/navigation";
import { getPropertyById, sampleProperties } from "@/data/properties";
import { PropertyDetailClient } from "./PropertyDetailClient";

// Allow blocking route for dynamic params
export const instant = false;

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return sampleProperties.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  // Get similar properties
  const similarProperties = sampleProperties
    .filter(
      (p) =>
        p.id !== property.id &&
        p.transactionType === property.transactionType &&
        p.propertyType === property.propertyType &&
        p.location.city === property.location.city
    )
    .slice(0, 3);

  return (
    <PropertyDetailClient
      property={property}
      similarProperties={similarProperties}
    />
  );
}
