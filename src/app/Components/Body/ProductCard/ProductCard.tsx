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
  const itemsPerPage = 10;
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
      <div className={Styles.productGrid}>
        {currentItems.map((item, index) => (
          <Card key={index} className="w-full max-w-sm mb-4">
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div>Price: ${item.price}</div>
              <div>Brand: {item.brand}</div>
              <div>Category: {item.category}</div>
            </CardContent>
            <CardFooter className="flex-row gap-2">
              <Button type="button" className="w-small">Favorite</Button>
              <Button variant="outline" className="w-small">Add To Cart</Button>
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
