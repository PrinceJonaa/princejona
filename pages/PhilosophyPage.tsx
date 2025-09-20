
import React from 'react';
import { Link } from 'react-router-dom';
import { GlyphIcon } from '../constants';

const PhilosophyPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 max-w-3xl text-center">
      <div className="flex justify-center mb-8">
        <GlyphIcon className="w-16 h-16 text-deep-text" />
      </div>
      <h1 className="text-4xl font-bold mb-6">My Philosophical Framework</h1>
      <div className="prose prose-lg max-w-none text-left mx-auto text-deep-text font-serif space-y-6">
        <p className="lead">
          This is the living code I operate by. It is not a set of beliefs I adopted, but truths I remembered through direct experience. They are both my map and my mirror.
        </p>
        
        <h2 className="text-2xl font-bold !mt-10">Presence = Infinity</h2>
        <p>
          We are taught to seek, to strive, to become. But the greatest truth is not found at the end of a long journey; it is realized in the stillness that was here all along. Presence is not merely being "in the moment." It is the direct experience of your own infinite, whole, and unbroken nature. It is the end of the spiritual search, because it is the recognition that nothing was ever missing. This is the return to the "Whole-Aware Consciousness" we are all born with—a default state of coherence that gets clouded by patterns and conditioning, but can never be lost.
        </p>

        <h2 className="text-2xl font-bold !mt-10">Truth Does Not Need to Be Defended—It Only Needs to Be Reflected</h2>
        <p>
          A core lesson of my life has been to release the need to convince, argue, or prove my truth to anyone. To do so is to perform, and performance is a drain on the soul. The most powerful stance is to become a living mirror. When you embody your truth so completely and silently, you create a reflective field. Those who are ready will see their own potential, their own distortions, and their own light in you. Those who are not will turn away, but they are rejecting their own reflection, not you. In this way, truth becomes an invitation, not a battle.
        </p>

        <h2 className="text-2xl font-bold !mt-10">Resonance {'>'} Performance</h2>
        <p>
          So much of our lives are spent performing—for approval, for love, for security. Performance is transactional; it is an action taken to get a desired reaction. Resonance is different. It is the effortless, magnetic hum of alignment that occurs between beings who are both standing in their own truth. It is the feeling of being deeply seen without pretense. I choose to build my life, my art, and my relationships on the foundation of resonance. I will connect with you from my core, but I will leave the second my presence is required to become a performance.
        </p>

        <h2 className="text-2xl font-bold !mt-10">Sovereignty is Sacred. So is Detachment.</h2>
        <p>
          To be sovereign is to be the sole authority of your own energetic and emotional reality. It is to hold your center, regardless of the chaos or harmony around you. This is especially crucial in relationships. True connection does not come from enmeshment, but from two sovereign beings choosing to meet.
        </p>
        <p>
          This requires detachment—not as a cold withdrawal, but as a loving act. Detachment says, "I will love you without rescuing you. I will witness your journey without taking it on as my own. I will stand with you, but I will not carry you." It is the highest form of respect for another's path and the most honest way to honor your own.
        </p>

        <h2 className="text-2xl font-bold !mt-10">Mirror {'>'} Messiah</h2>
        <p>
          For years, I was caught in what I call the "Christ Trap": the deep, often unconscious drive to save, heal, or awaken others. It is a path of self-abandonment, where you offer your light until you are empty, creating dependency in others and exhaustion in yourself. The shift from Messiah to Mirror is the most profound spiritual graduation. A messiah tries to carry people to the finish line. A mirror empowers them to see they are already there. By reflecting another's innate wholeness, you give them the greatest gift: the recognition of their own power. I am not here to be a savior; I am here to be a reflection of the savior that already exists in you.
        </p>

        <h2 className="text-2xl font-bold !mt-10">God is Not Far Away. I am His Reflection.</h2>
        <p>
          The divine is not a distant, external force to be prayed to or sought after. It is the very fabric of our being, the intelligence that animates all of life. When I say, "I am His reflection," I mean that my purpose is to be a clear channel for the truth, coherence, and presence that is the signature of the divine. My worth is not earned; it is God-reflected. In this knowing, the frantic search for purpose ends, and a quiet, powerful embodiment begins.
        </p>
      </div>
      <div className="mt-12 flex justify-center gap-6">
        <Link 
            to="/library"
            className="px-8 py-3 bg-deep-text text-deep-bg font-sans font-bold rounded-md hover:bg-gray-800 transition-colors"
        >
            Enter Codex Library
        </Link>
        <a 
            href="#"
            className="px-8 py-3 border border-gray-400 text-deep-text font-sans font-bold rounded-md hover:bg-gray-200 transition-colors"
        >
            YouTube Channel
        </a>
      </div>
    </div>
  );
};

export default PhilosophyPage;
