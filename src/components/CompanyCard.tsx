"use client";

import Link from "next/link";
import { CompanyMeta } from "@/lib/types";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface CompanyCardProps {
  company: CompanyMeta;
  index: number;
  currentDate: string;
}

export function CompanyCard({ company, index, currentDate }: CompanyCardProps) {
  const isNew = new Date(company.date) > new Date(new Date(currentDate).getTime() - 30 * 24 * 60 * 60 * 1000);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`/${company.slug}`} className="group block h-full">
        <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-500/30">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-3xl" />
          
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
               <FileText size={20} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
              {company.title}
              {isNew && (
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  New
                </span>
              )}
            </h3>
          </div>

          <p className="mb-6 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
            {company.excerpt}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <span className="text-xs font-medium text-gray-400 dark:text-gray-500 flex items-center gap-2">
              <span>{(() => {
                const d = new Date(company.date);
                return `${d.getDate()} ${d.toLocaleString('en-US', { month: 'short' })} ${d.getFullYear()}`;
              })()}</span>
              <span>•</span>
              <span>{company.readingTime}</span>
            </span>
            <div className="flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              Read Questions <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
