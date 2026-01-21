import Link from "next/link";
import Image from "next/image";
import { Github, Globe, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
               <Image src="/icon.png" alt="Interview Prep Logo" width={32} height={32} className="h-8 w-auto rounded-lg" />
               <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                 Interview Prep
               </span>
            </Link>
            <p className="max-w-xs text-sm text-gray-500 dark:text-gray-400">
              A curated collection of interview questions from top tech companies to help you succeed in your next interview.
            </p>
            <div className="mt-6 flex text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                    Powered by <a href="https://vitabletech.in" target="_blank" rel="noreferrer" className="font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">VitableTech</a>
                </span>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Community</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="https://github.com/vitabletech/Interview-Questions-Collection" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contribute on GitHub
                </a>
              </li>
              <li>
                <a href="https://github.com/vitabletech" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Open Source
                </a>
              </li>
              <li>
                 <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    About Us
                 </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="https://enterprise.vitabletech.in" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Enterprise Solutions
                </a>
              </li>
              <li>
                <a href="https://vitabletech.in" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Custom Development
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-100 pt-8 dark:border-gray-800">
           <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-xs text-gray-500 dark:text-gray-500 text-center md:text-left">
                © {new Date().getFullYear()} VitableTech. All rights reserved. Content submitted by community.
              </p>
              <div className="flex items-center gap-4 text-gray-400">
                 <a href="https://github.com/vitabletech" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github size={20} className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" />
                 </a>
                 <a href="https://vitabletech.in" target="_blank" rel="noreferrer" aria-label="Website">
                    <Globe size={20} className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors" />
                 </a>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
