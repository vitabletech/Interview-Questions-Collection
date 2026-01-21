import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { CompanyInterview, CompanyMeta } from "./types";

const postsDirectory = path.join(process.cwd(), "content");

export function getCompanySlugs() {
    const fileNames = fs.existsSync(postsDirectory)
        ? fs.readdirSync(postsDirectory)
        : [];
    return fileNames.filter((fileName) => fileName.endsWith(".md") && fileName !== "README.md");
}

export function getAllCompanies(): CompanyMeta[] {
    const fileNames = getCompanySlugs();
    const allCompaniesData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const fileStats = fs.statSync(fullPath);

        // Use gray-matter to parse the post metadata section
        const { content } = matter(fileContents);

        // Extract title from filename or first h1
        const title = slug.replace(/-/g, " "); // Basic cleanup, file names are mostly clean

        // Generate brief excerpt (first 150 chars/first paragraph)
        const excerpt = content.slice(0, 150).replace(/[#*_]/g, "") + "...";

        // Calculate reading time
        const words = content.split(/\s+/).length;
        const readingTime = Math.ceil(words / 200) + " min read";

        return {
            slug,
            title,
            excerpt,
            fileSize: fileStats.size,
            date: fileStats.mtime.toISOString(),
            readingTime,
        };
    });

    // Default sort by title A-Z
    return allCompaniesData.sort((a, b) => a.title.localeCompare(b.title));
}


export async function getCompanyData(slug: string): Promise<CompanyInterview> {
    const decodedSlug = decodeURIComponent(slug);
    const fullPath = path.join(postsDirectory, `${decodedSlug}.md`);

    if (!fs.existsSync(fullPath)) {
        console.error(`File not found: ${fullPath} (slug: ${slug})`);
        throw new Error("File not found");
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const stats = fs.statSync(fullPath);

    // Use gray-matter to parse the post metadata section
    const { content } = matter(fileContents);

    // Use remark and rehype to convert markdown into HTML string
    // allowing raw HTML content (important for iframes/videos)
    const processedContent = await remark()
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeStringify)
        .process(content);
    const contentHtml = processedContent.toString();

    const title = slug.replace(/-/g, " ");
    const date = stats.mtime.toISOString();
    // Very rough reading time estimate
    const words = content.split(/\s+/).length;
    const readingTime = Math.ceil(words / 200) + " min read";

    return {
        slug,
        content: contentHtml,
        title,
        excerpt: content.slice(0, 150) + "...",
        date,
        readingTime,
    };
}
