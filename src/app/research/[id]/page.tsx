import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import researchItems from '@/app/data/research.json';

interface ResearchItem {
  id: string;
  title: string;
  date: string;
  abstract: string;
  filePath: string;
  tags: string[];
}

// Helper function to get research data by ID
async function getResearchData(id: string) {
  const researchItem = (researchItems as ResearchItem[]).find(item => item.id === id);
  if (!researchItem) {
    return null;
  }

  // Correctly resolve the file path relative to the project root
  // The filePath in research.json is like "/research-content/automated_secrets_detection.md"
  // It should be relative to the 'src/app' directory or a designated content directory
  // For now, assuming filePath is relative to a 'src/app/research-content' directory
  const fullPath = path.join(process.cwd(), 'src', 'app', researchItem.filePath);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents); // data for frontmatter, content for markdown body

    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkHtml)
      .process(content);
    const contentHtml = processedContent.toString();

    return {
      id,
      contentHtml,
      ...researchItem, // Spread the rest of the research item data (title, date, etc.)
      frontmatter: data
    };
  } catch (error) {
    console.error(`Error reading or processing research file ${fullPath}:`, error);
    return {
        id,
        contentHtml: "<p>Error loading research content. Please check the file path and format.</p>",
        ...researchItem,
        frontmatter: {}
    }
  }
}

export async function generateStaticParams() {
  return (researchItems as ResearchItem[]).map(item => ({
    id: item.id,
  }));
}

export default async function ResearchPostPage({ params }: { params: { id: string } }) {
  const researchData = await getResearchData(params.id);

  if (!researchData) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center text-red-500">Research Not Found</h1>
        <p className="text-center text-gray-400 mt-4">The requested research paper could not be located.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="prose prose-invert lg:prose-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold mb-2 text-blue-400">{researchData.title}</h1>
        <p className="text-sm text-gray-500 mb-6">Published: {new Date(researchData.date).toLocaleDateString()}</p>
        <div dangerouslySetInnerHTML={{ __html: researchData.contentHtml }} />
      </article>
    </div>
  );
}

// Add metadata generation
export async function generateMetadata({ params }: { params: { id: string } }) {
    const researchItem = (researchItems as ResearchItem[]).find(item => item.id === params.id);
    if (!researchItem) {
        return {
            title: "Research Not Found",
            description: "The requested research paper could not be located."
        }
    }
    return {
        title: `${researchItem.title} - Research`,
        description: researchItem.abstract,
    };
}

