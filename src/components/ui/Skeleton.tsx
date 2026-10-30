"use client";

import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "skeleton-luxury rounded",
        className
      )}
    />
  );
}

export function PropertyCardSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      {/* Image */}
      <Skeleton className="aspect-[16/10] rounded-none" />

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <Skeleton className="h-6 w-3/4" />

        {/* Location */}
        <Skeleton className="h-4 w-1/2" />

        {/* Price */}
        <div className="space-y-2">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="h-3 w-1/3" />
        </div>

        {/* Separator */}
        <div className="h-[1px] bg-gray-100" />

        {/* Specs */}
        <div className="flex gap-4">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}

export function PropertyGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <PropertyCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="relative h-screen bg-gray-200">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-6 px-4">
          <Skeleton className="h-12 w-64 mx-auto" />
          <Skeleton className="h-16 w-96 mx-auto" />
          <Skeleton className="h-6 w-80 mx-auto" />
        </div>
      </div>
    </div>
  );
}

export function GallerySkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="aspect-[16/9] rounded-lg" />
      <div className="flex gap-2 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-20 h-20 rounded flex-shrink-0" />
        ))}
      </div>
    </div>
  );
}
