import sanityClient from "@/sanity/lib/client";
import Image from "next/image";
import { GetStaticPropsContext } from "next";

interface ProductDetailsProps {
  product: {
    title: string;
    price: number;
    quantity: number;
    category: string;
    imageUrl: string;
  } | null;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  if (!product) {
    return (
      <div className="text-center">
        <h1>404 - Product Not Found</h1>
        <p>We could not find the product you were looking for.</p>
      </div>
    );
  }

  return (
    <div style={{ width: "1140px", height: "1073px" }}>
      <section style={{ width: "900px", height: "1125px", top: "106px", left: "120px", position: "absolute" }}>
        <div>
          <Image
            style={{ top: "110px", left: "-22px", position: "absolute" }}
            alt="image"
            width={653}
            height={653}
            src={product.imageUrl || "/shoe5.png"} // Default image if imageUrl is missing
          />
          <div
            style={{
              width: "376px",
              height: "1041px",
              top: "-26px",
              left: "768px",
              position: "absolute",
            }}
          >
            <h1
              className="text-black"
              style={{
                width: "367px",
                fontSize: "48px",
                height: "96px",
                top: "135px",
                position: "absolute",
                lineHeight: "48px",
              }}
            >
              {product.title}
            </h1>
            <p
              style={{
                width: "374.92px",
                fontSize: "15px",
                height: "252px",
                top: "255px",
                position: "absolute",
                lineHeight: "28px",
              }}
            >
              {product.category}
            </p>
            <p
              style={{
                width: "229px",
                fontSize: "36px",
                height: "34px",
                top: "535px",
                position: "absolute",
                lineHeight: "28px",
              }}
            >
              ${product.price}
            </p>
            <div
              className="bg-black flex"
              style={{
                width: "174.42px",
                borderRadius: "30px",
                height: "48px",
                top: "595px",
                position: "absolute",
                paddingTop: "6.5px",
                paddingLeft: "22.5px",
                paddingRight: "23.92",
                paddingBottom: "5.5",
              }}
            >
              <Image
                className="mb-2"
                alt="cart icon"
                width={29}
                height={29}
                src="/cart1.png"
              />
              <button
                className="text-white my-1"
                style={{
                  textAlign: "center",
                  width: "99px",
                  height: "29px",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "500",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Fetch product details and paths
export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const slug = params?.slug as string;

  const query = `*[_type == "product" && slug.current == $slug][0]{
    title,
    price,
    quantity,
    category,
    "imageUrl": image.asset->url
  }`;

  const product = await sanityClient.fetch(query, { slug });

  return {
    props: { product: product || null },
    revalidate: 10, // Regenerate the page every 10 seconds
  };
}

export async function getStaticPaths() {
  const query = `*[_type == "product"] {
    "slug": slug.current
  }`;

  const products = await sanityClient.fetch(query);

  const paths = products.map((product: { slug: string }) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: true, // Enable fallback for on-demand paths
  };
}
