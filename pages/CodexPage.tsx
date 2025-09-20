
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { codices } from '../content/codices';
import type { Codex, CodexContentBlock } from '../types';
import VideoEmbed from '../components/VideoEmbed';
import { GlyphIcon } from '../constants';

const CodexRenderer: React.FC<{ block: CodexContentBlock }> = ({ block }) => {
    if (block.type === 'video') {
        return <VideoEmbed videoId={block.en} />;
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="prose prose-lg text-deep-text font-serif" dangerouslySetInnerHTML={{ __html: block.en }} />
            <div className="prose prose-lg text-gray-500 font-serif italic" dangerouslySetInnerHTML={{ __html: block.es }} />
        </div>
    );
};


const CodexPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [codex, setCodex] = useState<Codex | undefined>(undefined);
    const [presenceMode, setPresenceMode] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        const foundIndex = codices.findIndex(c => c.slug === slug);
        if (foundIndex !== -1) {
            setCodex(codices[foundIndex]);
            setCurrentIndex(foundIndex);
        } else {
            navigate('/library');
        }
    }, [slug, navigate]);

    if (!codex) {
        return <div className="text-center py-20">Loading Codex...</div>;
    }

    const prevCodex = currentIndex > 0 ? codices[currentIndex - 1] : null;
    const nextCodex = currentIndex < codices.length - 1 ? codices[currentIndex + 1] : null;
    
    const pageClasses = presenceMode ? 'fixed inset-0 bg-deep-bg z-[100] overflow-y-auto' : 'relative';
    const mainContentClasses = presenceMode ? 'max-w-3xl mx-auto px-4 py-20' : 'max-w-5xl mx-auto';


    return (
        <div className={pageClasses}>
            {/* Side Navigation - Hidden in Presence Mode */}
            {!presenceMode && (
                <div className="fixed left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
                    {prevCodex && (
                        <Link to={`/library/${prevCodex.slug}`} className="block p-4 bg-deep-bg/50 border border-gray-300 rounded-r-lg mb-2 hover:bg-white">
                            &larr;
                        </Link>
                    )}
                </div>
            )}
            {!presenceMode && (
                 <div className="fixed right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
                    {nextCodex && (
                        <Link to={`/library/${nextCodex.slug}`} className="block p-4 bg-deep-bg/50 border border-gray-300 rounded-l-lg hover:bg-white">
                            &rarr;
                        </Link>
                    )}
                </div>
            )}


            <main className={mainContentClasses}>
                <div className="flex justify-between items-center mb-8">
                     <h1 className="text-4xl font-bold">{codex.title}</h1>
                     <button onClick={() => setPresenceMode(!presenceMode)} className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors" title="Toggle Presence Mode">
                         <GlyphIcon className="w-6 h-6" />
                     </button>
                </div>
               
                <div className="mb-12">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-sm mb-8">
                        <p className="font-bold">English</p>
                        <p className="font-bold italic text-gray-500">Español</p>
                    </div>
                     <hr className="border-gray-300 mb-8" />
                    {codex.content.map((block, index) => (
                        <CodexRenderer key={index} block={block} />
                    ))}
                </div>

                {/* Bottom Navigation - Hidden in Presence Mode */}
                {!presenceMode && (
                    <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-300">
                        <div>
                            {prevCodex && (
                                <Link to={`/library/${prevCodex.slug}`} className="text-deep-text hover:text-accent-gold transition-colors">
                                    &larr; {prevCodex.title}
                                </Link>
                            )}
                        </div>
                         <div>
                            {nextCodex && (
                                <Link to={`/library/${nextCodex.slug}`} className="text-deep-text hover:text-accent-gold transition-colors">
                                    {nextCodex.title} &rarr;
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default CodexPage;
