import Link from 'next/link';
import toolsData from '@/app/data/tools.json'; // Adjusted path

interface ToolItem {
  id: string;
  name: string;
  description: string;
  link?: string; // Optional link to a live demo or page
  sourceCode?: string; // Optional link to source code
  tags: string[];
}

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">Security Tools</h1>
      
      <p className="text-center text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
        Below is a collection of security-focused tools I have developed or significantly contributed to. These tools range from proof-of-concepts to utilities designed for practical application in cybersecurity operations.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(toolsData as ToolItem[]).map((tool) => (
          <div key={tool.id} className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-100 mb-3">{tool.name}</h2>
            <p className="text-gray-300 leading-relaxed mb-4 flex-grow">{tool.description}</p>
            <div className="mb-4">
              {tool.tags.map(tag => (
                <span key={tag} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2 inline-block">{tag}</span>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-gray-700">
              {tool.link && tool.link !== "#" && (
                <Link 
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors mr-4"
                >
                  View Tool / Demo &rarr;
                </Link>
              )}
              {tool.sourceCode && (
                <Link 
                  href={tool.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                >
                  Source Code &rarr;
                </Link>
              )}
              {(!tool.link || tool.link === "#") && !tool.sourceCode && (
                 <p className="text-sm text-gray-500">No external links available for this tool.</p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {toolsData.length === 0 && (
        <p className="text-center text-gray-400 text-lg mt-8">No tools are currently listed. Please check back later.</p>
      )}
    </div>
  );
}

export async function generateMetadata() {
    return {
        title: "Security Tools - Mohammed Bin Alsheikh",
        description: "A collection of security-focused tools developed by Mohammed Bin Alsheikh.",
    };
}

