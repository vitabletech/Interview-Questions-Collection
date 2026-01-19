"use client";

import { useState, useEffect } from "react";
import { CompanyMeta } from "@/lib/types";
import { CompanyCard } from "./CompanyCard";
import { Search, X } from "lucide-react";

interface CompanyGridProps {
  initialCompanies: CompanyMeta[];
}

export function CompanyGrid({ initialCompanies }: CompanyGridProps) {
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"a-z" | "z-a" | "newest" | "oldest">("a-z");
  
  /* Pagination State */
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredCompanies = initialCompanies
    .filter((company) =>
      company.title.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "newest") return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortOrder === "oldest") return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortOrder === "z-a") return b.title.localeCompare(a.title);
      return a.title.localeCompare(b.title);
    });

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const currentCompanies = filteredCompanies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to page 1 when search or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [query, sortOrder]);

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div>
      <div className="mx-auto mb-12 max-w-xl space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search companies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-12 text-base shadow-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X size={20} />
            </button>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
             Showing {filteredCompanies.length} result{filteredCompanies.length !== 1 && 's'}
          </div>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as any)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
          >
            <option value="a-z">Name (A-Z)</option>
            <option value="z-a">Name (Z-A)</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentCompanies.map((company, index) => (
          <CompanyCard key={company.slug} company={company} index={index} />
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <div className="text-center py-20">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
             <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">No companies found</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your search query to find what you&apos;re looking for.
          </p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12">
           <button 
             onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
             disabled={currentPage === 1}
             className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors"
           >
             Previous
           </button>
           <span className="text-sm text-gray-600 dark:text-gray-400">
             Page {currentPage} of {totalPages}
           </span>
           <button 
             onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
             disabled={currentPage === totalPages}
             className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors"
           >
             Next
           </button>
        </div>
      )}
    </div>
  );
}
