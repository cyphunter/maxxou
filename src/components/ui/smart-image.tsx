"use client";

import Image, { type ImageProps } from "next/image";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type SmartImageProps = ImageProps;

/**
 * Wrapper autour de `next/image` qui pose un overlay shimmer animé pendant
 * le chargement et le fait disparaître quand l'image est prête.
 *
 * À utiliser dans un parent en `position: relative`. Si `priority` (image LCP),
 * pas de shimmer.
 */
export function SmartImage({ className, priority, onLoad, ...props }: SmartImageProps) {
  const [loaded, setLoaded] = useState<boolean>(Boolean(priority));
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (priority) return;
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, [priority]);

  return (
    <>
      <Image
        {...props}
        ref={imgRef}
        priority={priority}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={className}
      />
      {!priority ? (
        <span
          aria-hidden
          className={cn(
            "skeleton-shimmer rounded-[inherit] transition-opacity duration-500 ease-out",
            loaded ? "pointer-events-none opacity-0" : "opacity-100",
          )}
        />
      ) : null}
    </>
  );
}
