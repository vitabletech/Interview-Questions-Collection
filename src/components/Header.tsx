import Link from "next/link";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
           <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600" />
           <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
             Interview Prep
           </span>
        </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              Companies
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              About
            </Link>
            <a 
              href="https://github.com/vitabletech/Interview-Questions-Collection/issues/new?template=new_interview_question.md&title=New+Interview+Question:+[Company+Name]" 
              target="_blank" 
              rel="noreferrer" 
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Submit Question
            </a>
            <a href="https://github.com/vitabletech/Interview-Questions-Collection" target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              GitHub
            </a>
          </nav>
      </div>
    </header>
  );
}
