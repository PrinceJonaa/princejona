
import React from 'react';
import { Link } from 'react-router-dom';
import { GlyphIcon } from '../constants';

interface GlyphLinkProps {
    isSurface: boolean;
    className?: string;
}

export const GlyphLink: React.FC<GlyphLinkProps> = ({ isSurface, className }) => {
    const colorClass = isSurface ? "text-gray-600 hover:text-accent-emerald" : "text-gray-400 hover:text-accent-gold";
    return (
        <Link 
            to="/philosophy" 
            title="Explore the Philosophy"
            className={`transition-transform duration-300 ease-in-out hover:scale-110 ${colorClass} ${className}`}
        >
            <GlyphIcon className="w-8 h-8" />
        </Link>
    );
};
