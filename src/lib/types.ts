export interface CompanyInterview {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string; // ISO date or file mtime
    readingTime: string;
}

export interface CompanyMeta {
    slug: string;
    title: string;
    excerpt: string;
    fileSize: number;
    date: string;
    readingTime: string;
}
