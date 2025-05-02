"use client"; // 👈 أضف هذا السطر في أول الملف

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import EditProduct from "../Componants/Dashboard/edit/EditProduct"; 
import Swal from "sweetalert2";
import Image from "next/image";
import CreateProduct from "../Componants/Dashboard/add/CreateProduct";


// ✅ تعريف نوع المنتج
type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  isLoading?: boolean; // إضافة حالة تحميل لكل منتج
};

function Product() {
  const [data, setData] = useState<Product[]>([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("product");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editProductId, setEditProductId] = useState<number | null>(null);
  const itemsPerPage = 10;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const categories = Array.from(new Set(data.map((item) => item.category)));

  const filteredData = data.filter(({ title, category }) => {
    const titleMatch = title.toLowerCase().includes(searchTitle.toLowerCase());
    const categoryMatch =
      selectedCategory === "" || category === selectedCategory;
    return titleMatch && categoryMatch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const toggleDrawer = (productId: number | null = null) => {
    setEditProductId(productId);
    setIsDrawerOpen((prev) => !prev);
  };

  const handleDelete = (productId: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedData = data.map((product) =>
          product.id === productId ? { ...product, isLoading: true } : product
        );
        setData(updatedData);

        axios
          .delete(`https://fakestoreapi.com/products/${productId}`)
          .then(() => {
            setData((prevData) =>
              prevData.filter((product) => product.id !== productId)
            );
            Swal.fire("Deleted!", "Your product has been deleted.", "success");
          })
          .catch(() => {
            setData(updatedData); // إعادة حالة البيانات في حالة حدوث خطأ
            Swal.fire(
              "Error!",
              "There was an issue deleting the product.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div>
      <div className="flex space-x-2 items-center justify-between">
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab("product")}
            className={`px-4 py-2 text-sm font-medium rounded transition duration-200  
            ${
              activeTab === "product"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Product
          </button>
          <button
            onClick={() => setActiveTab("customer")}
            className={`px-4 py-2 text-sm font-medium rounded transition duration-200  
            ${
              activeTab === "customer"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Customer
          </button>
        </div>

        <button
          onClick={() => toggleDrawer()}
          className="flex items-center gap-2 px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition"
        >
          <span className="text-lg">+</span>
          Add Product
        </button>
      </div>

      <div className="min-h-screen flex flex-col items-center px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 text-center">
          List of Products
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-6 w-full max-w-6xl">
          <input
            type="text"
            placeholder="Search by Title"
            className="w-full md:w-1/2 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <select
            className="w-full md:w-1/2 px-4 py-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto w-full max-w-6xl bg-white rounded-2xl shadow-lg p-6">
          <table className="w-full table-auto border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-blue-600 text-white text-left">
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-4">Image</th>
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((d) => (
                <tr
                  key={d.id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-4">{d.id}</td>
                  <td className="py-3 px-4">
                    <Image
                      src={d.image}
                      alt={d.title}
                      width={56} // 14 * 4 = 56px
                      height={56}
                      className="object-contain"
                    />
                  </td>
                  <td className="py-3 px-4">{d.title}</td>
                  <td className="py-3 px-4 capitalize">{d.category}</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">
                    ${d.price}
                  </td>
                  <td className="py-3 px-4 space-x-2 flex gap-2">
                    <Link
                      href={`/details/${d.id}`}
                      className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
                    >
                      Read
                    </Link>
                    <button
                      onClick={() => toggleDrawer(d.id)}
                      className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(d.id)}
                      className={`px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition ${
                        d.isLoading ? "cursor-not-allowed opacity-50" : ""
                      }`}
                      disabled={d.isLoading}
                    >
                      {d.isLoading ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-3 py-2 text-sm font-medium rounded-full transition duration-200  
                ${
                  pageNumber === currentPage
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-50 overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && toggleDrawer()}
        >
          <div className="absolute top-0 right-0 w-full md:w-[350px] h-full transform transition-transform duration-300 ease-in-out z-50 bg-white shadow-xl">
            <button
              onClick={() => toggleDrawer()}
              className="absolute left-4 top-4 text-xl font-bold text-red-500 bg-white p-2 rounded-full"
            >
              X
            </button>

            {editProductId ? (
              <EditProduct onClose={toggleDrawer} />
            ) : (
              <CreateProduct onClose={toggleDrawer} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
