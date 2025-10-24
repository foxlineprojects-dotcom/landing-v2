import groq from "groq";

export const POSTS_LIST = groq`
*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  coverImage,
  "author": author->{name, "slug": slug.current, avatar},
  "categories": categories[]->{title, "slug": slug.current},
}`;

export const POST_BY_SLUG = groq`
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  coverImage,
  body,
  seo,
  "author": author->{name, "slug": slug.current, avatar, bio},
  "categories": categories[]->{title, "slug": slug.current},
}`;

export const SLUGS = groq`
*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`;
