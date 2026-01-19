import { getAllCompanies } from "@/lib/api";
import { CompanyGrid } from "@/components/CompanyGrid";

export default function Home() {
  const companies = getAllCompanies();

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl mb-4">
          Real Interview Questions
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Browse real-world interview experiences and questions from top tech companies.
          Prepare smarter with actual data.
        </p>
      </div>

      <CompanyGrid initialCompanies={companies} />
    </div>
  );
}
