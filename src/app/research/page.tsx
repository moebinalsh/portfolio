import Link from 'next/link';
import researchItems from '@/app/data/research.json'; // Adjusted path

interface ResearchItem {
  id: string;
  title: string;
  date: string;
  abstract: string;
  filePath: string; // This will be used to link to the full research page
  tags: string[];
}

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">Research Contributions</h1>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
        {(researchItems as ResearchItem[]).map((item) => (
          <div key={item.id} className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-100 mb-2">{item.title}</h2>
            <p className="text-sm text-gray-500 mb-3">Published: {new Date(item.date).toLocaleDateString()}</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              {item.abstract}
            </p>
            <div className="mb-4">
              {item.tags.map(tag => (
                <span key={tag} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2 inline-block">{tag}</span>
              ))}
            </div>
            <Link 
              href={`/research/${item.id}`}
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Read Full Paper &rarr;
            </Link>
          </div>
        ))}
      </div>
      
      {researchItems.length === 0 && (
        <p className="text-center text-gray-400 text-lg">No research papers currently available. Please check back later.</p>
      )}
    </div>
  );
}

