"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState, use } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

interface Props {
  params: Promise<{ id: string }>;
}

const ProductDetails = ({ params }: Props) => {
  const { id } = use(params); 

  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => setData(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="container my-5 w-100">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <Image
            src={data.image}
            className="img-fluid rounded w-100"
            alt={data.title}
            style={{
              maxWidth: "400px",  
              objectFit: "contain", 
            }}
          />
        </div>
        <div className="col-12 col-md-6">
          <h2 className="mb-3" style={{ fontSize: "clamp(24px, 6vw, 32px)" }}>
            {data.title}
          </h2>
          <p className="mb-2" style={{ fontSize: "clamp(16px, 4vw, 20px)" }}>
            {data.description}
          </p>
          <p className="mb-2" style={{ fontSize: "clamp(16px, 4vw, 20px)" }}>
            {data.category}
          </p>
          <p className="mb-2" style={{ fontSize: "clamp(16px, 4vw, 20px)" }}>
            ${data.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
