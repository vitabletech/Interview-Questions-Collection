import { getCompanyData, getCompanySlugs } from "@/lib/api";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, FileText, Github } from "lucide-react";

export async function generateStaticParams() {
  const fileNames = getCompanySlugs();
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }));
}

// Correct type for App Router page props
type Props = {
  params: Promise<{ slug: string }>;
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const company = await getCompanyData(slug);
  return {
    title: `${company.title} Interview Questions | Interview Prep`,
    description: `Read real interview questions and experiences for ${company.title}. ${company.excerpt}`,
  };
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params;
  const company = await getCompanyData(slug);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:px-6">
      <Link
        href="/"
        className="mb-8 inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Companies
      </Link>

      <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-12">
        <header className="mb-10 border-b border-gray-100 pb-10 dark:border-gray-800">
          <div className="flex items-center gap-4 mb-6">
             <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                <FileText size={32} />
             </div>
             <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 md:text-4xl">
                  {company.title}
                </h1>
                <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">Interview Experience</p>
             </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(company.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{company.readingTime}</span>
            </div>
            <a 
              href={`https://github.com/vitabletech/Interview-Questions-Collection/blob/main/content/${encodeURIComponent(company.slug)}.md`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors ml-auto"
            >
              <Github className="h-4 w-4" />
              <span>Edit on GitHub</span>
            </a>
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 prose-img:rounded-xl prose-hr:border-gray-200 dark:prose-hr:border-gray-800"
          dangerouslySetInnerHTML={{ __html: company.content }} 
        />
      </article>
      
      <div className="mt-12 text-center">
         <Link href="/" className="text-blue-600 font-semibold hover:underline">
            View all companies
         </Link>
      </div>
    </div>
  );
}
