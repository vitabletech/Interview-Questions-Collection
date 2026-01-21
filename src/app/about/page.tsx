import Link from "next/link";
import { ArrowRight, Code, Heart, Users } from "lucide-react";

export const metadata = {
  title: "About VitableTech | Interview Prep",
  description: "Learn about VitableTech, our mission to create open-source tools, and our commitment to the developer community.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl mb-6">
          Empowering Developers <span className="text-blue-600">Everywhere</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We believe high-quality interview preparation resources should be accessible to everyone.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
        <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
            <Heart size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Community Driven</h3>
          <p className="text-gray-600 dark:text-gray-400">
             Our open source work is supported by donations from the community, allowing us to continue creating valuable tools for everyone.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="h-12 w-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
            <Code size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Open Source</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We develop free, open-source products that anyone can use and contribute to. Our mission is to make quality software accessible.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm md:col-span-2 lg:col-span-1">
          <div className="h-12 w-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
            <Users size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">About VitableTech</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Founded in 2018 in Gwalior, India, dedicated to creating innovative digital solutions that empower businesses and individuals.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 md:p-12 text-center border border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
           Need Custom Solutions?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Through <strong>enterprise.vitabletech.in</strong>, we provide professional development services for businesses needing custom solutions and dedicated support.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <a 
             href="https://enterprise.vitabletech.in" 
             target="_blank" 
             rel="noreferrer"
             className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
           >
             Enterprise Services <ArrowRight className="ml-2 h-4 w-4" />
           </a>
           <a 
             href="https://github.com/vitabletech" 
             target="_blank" 
             rel="noreferrer"
             className="inline-flex h-12 items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-8 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
           >
             Explore GitHub
           </a>
        </div>
      </div>
    </div>
  );
}
