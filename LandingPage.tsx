import React from 'react';
import { Terminal, Code2, Sparkles, BrainCircuit, Rocket, ChevronRight, Zap, Globe, Users } from 'lucide-react';

interface LandingPageProps {
    onStart: () => void;
    onViewDocs: () => void;
}

export default function LandingPage({ onStart, onViewDocs }: LandingPageProps) {
    return (
        <div className="h-screen w-full bg-[#0C0C0C] text-white font-sans selection:bg-purple-500/30 overflow-y-auto overflow-x-hidden">
            {/* Background Gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            {/* Header */}
            <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Codvora" className="h-10 sm:h-11 md:h-12 object-contain" />
                </div>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <a href="#features" className="hover:text-white transition-colors">Features</a>
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <button
                        onClick={onStart}
                        className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition-colors font-semibold"
                    >
                        Open Editor
                    </button>
                </nav>
            </header>

            {/* Hero Section */}
            <main className="relative z-10 pt-10 sm:pt-20 pb-16 sm:pb-32 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-6 sm:mb-8 animate-fade-in">
                        <Sparkles className="w-3 h-3" />
                        <span>Powered by Gemini 2.0 Flash</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 sm:mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        Master Coding with <br />
                        <span className="text-white">AI Intelligence</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
                        Experience the future of development. A split-screen environment combining a powerful multi-language editor with a Senior AI Architect to mentor you in real-time.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                        <button
                            onClick={onStart}
                            className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full font-semibold text-base sm:text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)]"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Start Coding Now
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <button
                            onClick={onViewDocs}
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#1E1F20] hover:bg-[#2A2B2D] border border-[#333] rounded-full font-semibold text-base sm:text-lg transition-all text-gray-300 hover:text-white"
                        >
                            View Documentation
                        </button>
                    </div>
                </div>

                {/* Feature Grid */}
                <div className="max-w-7xl mx-auto mt-16 sm:mt-32 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-4">
                    {[
                        {
                            icon: <Terminal className="w-6 h-6 text-blue-400" />,
                            title: "Multi-Language Support",
                            desc: "Write and run JavaScript, Python, Java, C++, and more instantly in the browser."
                        },
                        {
                            icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
                            title: "AI Architect Companion",
                            desc: "Get real-time code reviews, debugging help, and architectural advice from Gemini."
                        },
                        {
                            icon: <Zap className="w-6 h-6 text-yellow-400" />,
                            title: "Gamified Learning",
                            desc: "Earn XP, take quizzes, and track your progress as you master new concepts."
                        }
                    ].map((feature, i) => (
                        <div key={i} className="p-6 sm:p-8 rounded-2xl bg-[#131314] border border-[#222] hover:border-[#333] transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-[#1E1F20] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-100">{feature.title}</h3>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-[#222] py-8 sm:py-12 px-4 sm:px-6 bg-[#0C0C0C]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Codvora" className="h-8 object-contain" />
                        <span>© 2025 Codvora.</span>
                    </div>
                    <div className="flex gap-4 sm:gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
