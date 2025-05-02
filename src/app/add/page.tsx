"use client";

import { useRouter } from "next/navigation";
import CreateProduct from "../Componants/Dashboard/add/CreateProduct"; 

export default function AddPage() {
  const router = useRouter();
  
  const handleClose = (productId?: number | null) => {
    if (productId) {
      router.push(`/details/${productId}`);
    } else {
      router.push('/dashboard-products');
    }
  };

  return <CreateProduct onClose={handleClose} />;
}