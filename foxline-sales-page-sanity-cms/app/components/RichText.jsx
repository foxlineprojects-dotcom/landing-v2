import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "../../lib/sanity.image";

const components = {
  types: {
    image: ({ value }) => {
      const alt = value?.alt || "";
      const src = urlFor(value).width(1200).height(800).auto("format").url();
      return (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingBottom: "56.25%",
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 700px, 100vw"
          />
        </div>
      );
    },
  },
};

export default function RichText({ value }) {
  return <PortableText value={value} components={components} />;
}
