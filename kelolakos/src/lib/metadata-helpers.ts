import { Metadata } from "next";

interface MetadataParams {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const DEFAULT_METADATA: MetadataParams = {
  title: "Ketuju - Qlola",
  description:
    "Qlola Kebutuhan kamu",
  image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/social-media.png`,
  url: process.env.NEXT_PUBLIC_SITE_URL || "",
};

export function makeMetadata(metadata: MetadataParams): Metadata {
  const { title, description, image, url } = metadata;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image,
    },
  };
}

export function makeMetadataUrl(path: string): string {
  return `${process.env.NEXT_PUBLIC_SITE_URL}${path}`;
}