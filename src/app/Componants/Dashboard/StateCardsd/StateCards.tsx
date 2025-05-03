'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export default function CardsSection() {
  const [totalProducts, setTotalProducts] = useState<number | null>(null);
  const [averagePrice, setAveragePrice] = useState<number | null>(null);
  const [topCategory, setTopCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data: Product[]) => {
        setTotalProducts(data.length);

        const totalPrice = data.reduce((acc: number, product: Product) => acc + product.price, 0);
        setAveragePrice(parseFloat((totalPrice / data.length).toFixed(2)));

        const categoryCount: Record<string, number> = {};
        data.forEach((product: Product) => {
          categoryCount[product.category] = (categoryCount[product.category] || 0) + 1;
        });

        const sortedCategories = Object.entries(categoryCount).sort((a, b) => b[1] - a[1]);
        setTopCategory(sortedCategories[0][0]);
      });
  }, []);

  return (
    <div className="mt-5">
      <div className="All-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        <div className="one-card">
          <div className="logo flex items-center gap-4 bg-white px-5 py-4 rounded max-w-xs w-full mx-auto">
            <div className="icon bg-[#b3c7f0] p-3 w-16 h-16 rounded-full flex items-center justify-center">
              <Image 
                src="/images/Heart (1).svg"   
                alt="Heart Icon"
                width={64}
                height={64}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="text text-sm leading-tight mt-2">
              <p className="text-center sm:text-left">
                <strong className="text-xl font-semibold">
                  {totalProducts !== null ? `${totalProducts} +` : '...'}
                </strong>
                <br />
                <span className="text-gray-600 font-bold">save products</span>
              </p>
            </div>
          </div>
        </div>

        <div className="one-card">
          <div className="logo flex items-center gap-4 bg-white px-5 py-4 rounded max-w-xs w-full mx-auto">
            <div className="icon bg-[#fde9b5] p-3 w-16 h-16 rounded-full flex items-center justify-center">
              <Image 
                src="/images/Game.svg"   
                alt="Game Icon"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text text-sm leading-tight mt-2">
              <p className="text-center sm:text-left">
                <strong className="text-xl font-semibold">
                  {averagePrice !== null ? `$${averagePrice}` : '...'}
                </strong>
                <br />
                <span className="text-gray-600 font-bold">Average Price</span>
              </p>
            </div>
          </div>
        </div>

        <div className="one-card">
          <div className="logo flex items-center gap-4 bg-white px-5 py-4 rounded max-w-xs w-full mx-auto">
            <div className="icon  bg-[#ffd7ca] p-3 w-16 h-16 rounded-full flex items-center justify-center">
              <Image 
                src="/images/CombinedShape.svg"   
                alt="Combined Shape Icon"
                width={64}
                height={64}
                className="block w-full h-full object-cover"
              />
            </div>
            <div className="text text-sm leading-tight mt-2">
              <p className="text-center sm:text-left">
                <strong className="text-xl font-semibold">
                  {topCategory || '...'}
                </strong>
                <br />
                <span className="text-gray-600 font-bold">Top Category</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
