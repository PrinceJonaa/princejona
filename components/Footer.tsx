import React from 'react';
import { GlyphLink } from './GlyphLink';

interface FooterProps {
    isSurface: boolean;
}

const Footer: React.FC<FooterProps> = ({ isSurface }) => {
    const borderClass = isSurface ? 'border-gray-800' : 'border-gray-300';
    const textClass = isSurface ? 'text-gray-400' : 'text-gray-600';

    return (
        <footer className={`mt-24 pb-8 ${textClass}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* FIX: The className was using double quotes, preventing variable interpolation. Switched to backticks to create a proper template literal. */}
                <div className={`flex flex-col items-center border-t pt-8 ${borderClass}`}>
                    <GlyphLink isSurface={isSurface} />
                    <p className="text-sm mt-4">© {new Date().getFullYear()} Prince Jona. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;