// @ts-nocheck
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "../../lib/sanity.image";

const components = {
  types: {
    image: ({ value }) => {
      const src = urlFor(value).width(1200).height(800).auto("format").url();
      return (
        <div className="relative w-full h-auto my-6">
          <Image
            src={src}
            alt={value?.alt || "Blog Image"}
            width={1200}
            height={800}
            className="rounded-lg object-cover"
          />
        </div>
      );
    },
  },

  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-6 dark:text-white text-slate-900">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold my-5 dark:text-white text-slate-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold my-4 dark:text-white text-slate-900">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-lg leading-relaxed dark:text-slate-300 text-slate-700 my-4">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-600 pl-4 italic dark:text-slate-300 text-slate-600 my-6">
        {children}
      </blockquote>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-bold dark:text-white text-slate-900">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic dark:text-slate-300 text-slate-600">{children}</em>
    ),
    link: ({ children, value }) => {
      const href = value?.href || "#";
      return (
        <a
          href={href}
          className="underline text-blue-600 dark:text-blue-400 hover:text-blue-500"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

export default function RichText({ value }) {
  return <PortableText value={value} components={components} />;
}
