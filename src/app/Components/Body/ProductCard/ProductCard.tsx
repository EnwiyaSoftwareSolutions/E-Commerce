"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import productItems from '../../../../products.sample.json'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Styles from './ProductCard.module.css'

export function ProductCard() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 16;
  const totalItems = productItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentItems = productItems.slice(startIdx, endIdx);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
        style={{ width: "100%" }}
      >
        {currentItems.map((item, index) => (
          <Card
            key={index}
            className="bg-white shadow-lg rounded-xl transition-transform hover:scale-102 flex flex-col justify-between"
            style={{ minHeight: "320px" }}
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold mb-1">{item.name}</CardTitle>
              <CardDescription className="mb-2 text-gray-500">{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-2 text-xl font-bold text-pink-600">${item.price}</div>
              <div className="mb-1 text-sm text-gray-700">Brand: {item.brand}</div>
              <div className="mb-1 text-sm text-gray-700">Category: {item.category}</div>
            </CardContent>
            <CardFooter className="flex gap-2 mt-auto">
              <Button type="button" className="w-small" style={{ background: "#f472b6", color: "white" }}>
                Favorite
              </Button>
              <Button variant="outline" className="w-small">
                Add To Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {currentPage > 1 && (
              <PaginationPrevious className="pointer"
                onClick={() => handlePageChange(currentPage - 1)}
              />
            )}
          </PaginationItem>
          {[...Array(totalPages)].map((_, idx) => (
            <PaginationItem key={idx}>
              <PaginationLink
                isActive={currentPage === idx + 1}
                onClick={() => handlePageChange(idx + 1)}
              >
                {idx + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext className="pointer"
                onClick={() => handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </>
  );
}
