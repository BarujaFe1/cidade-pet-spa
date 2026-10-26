import type { MetadataRoute } from "next";

/** Demonstração comercial — sem indexação. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}
