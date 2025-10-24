// lib/sanity.previewClient.ts
import { createClient } from "next-sanity";
import { dataset, projectId, apiVersion } from "./sanity.client";

export const sanityPreviewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN, // server-side only
});
