import React from 'react';
import { ArrowLeft, Terminal, Code2, Sparkles, Keyboard, Command, Brain, Trophy } from 'lucide-react';

interface DocumentationProps {
    onBack: () => void;
}

export default function Documentation({ onBack }: DocumentationProps) {
    return (
        <div className="h-screen w-full bg-[#0C0C0C] text-gray-300 font-sans selection:bg-purple-500/30 overflow-y-auto overflow-x-hidden">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-[#222] bg-[#0C0C0C]/95 backdrop-blur-md">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <button
                            onClick={onBack}
                            className="p-2 hover:bg-[#1E1F20] rounded-lg transition-colors text-gray-400 hover:text-white"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div className="h-6 w-px bg-[#333]"></div>
                        <span className="font-semibold text-white text-sm sm:text-base">Documentation</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Codvora" className="h-10 sm:h-11 md:h-12 object-contain" />
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8 sm:gap-12">
                    {/* Sidebar */}
                    <aside className="hidden lg:block space-y-8 sticky top-24 h-fit">
                        <div>
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Getting Started</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#introduction" className="block text-blue-400 border-l-2 border-blue-500 pl-4">Introduction</a></li>
                                <li><a href="#features" className="block hover:text-white transition-colors pl-4 border-l-2 border-transparent">Core Features</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Guides</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#editor" className="block hover:text-white transition-colors pl-4 border-l-2 border-transparent">Code Editor</a></li>
                                <li><a href="#ai-learning" className="block hover:text-white transition-colors pl-4 border-l-2 border-transparent">AI Learning Companion</a></li>
                                <li><a href="#quiz-mode" className="block hover:text-white transition-colors pl-4 border-l-2 border-transparent">Quiz Mode</a></li>
                                <li><a href="#shortcuts" className="block hover:text-white transition-colors pl-4 border-l-2 border-transparent">Shortcuts</a></li>
                            </ul>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="space-y-12 sm:space-y-16">
                        <section id="introduction" className="space-y-4 sm:space-y-6">
                            <h1 className="text-3xl sm:text-4xl font-bold text-white">Codvora Documentation</h1>
                            <p className="text-gray-400 text-base sm:text-lg">Master coding with AI-powered guidance. Codvora combines a powerful multi-language editor with an intelligent AI companion.</p>
                            <div className="p-4 sm:p-6 rounded-xl bg-[#1E1F20] border border-[#333]">
                                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-yellow-400" />
                                    Pro Tip
                                </h4>
                                <p className="text-sm">
                                    You can ask the AI Architect to explain code, debug errors, or even conduct a mock interview. Just type your request in the chat panel!
                                </p>
                            </div>
                        </section>

                        <section id="editor" className="space-y-4 sm:space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                                The Code Editor
                            </h2>
                            <p className="leading-relaxed">
                                Our editor supports multiple languages including JavaScript, Python, Java, C++, and React.
                                It features syntax highlighting, auto-completion, and real-time error detection.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-[#131314] border border-[#222]">
                                    <h3 className="text-white font-medium mb-2">Supported Languages</h3>
                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                                        <li>JavaScript / Node.js</li>
                                        <li>React (Live Preview)</li>
                                        <li>Python 3.10</li>
                                        <li>Java / C++</li>
                                        <li>MongoDB Shell</li>
                                    </ul>
                                </div>
                                <div className="p-4 rounded-lg bg-[#131314] border border-[#222]">
                                    <h3 className="text-white font-medium mb-2">Key Features</h3>
                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                                        <li>Split-screen Layout</li>
                                        <li>Resizable Panels</li>
                                        <li>Dark Mode (VS Code Theme)</li>
                                        <li>Instant Execution</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="ai-learning" className="space-y-4 sm:space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                                <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                                AI Learning Companion
                            </h2>
                            <p className="leading-relaxed">
                                CodeLab isn't just for writing code—it's for understanding it. Our AI is trained to be your personal tutor for <strong>any technical topic</strong>.
                                Don't limit yourself to just syntax errors; ask about high-level concepts, architecture, or industry best practices.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-[#131314] border border-[#222]">
                                    <h3 className="text-white font-medium mb-2">Topics You Can Explore</h3>
                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                                        <li>Deep Learning & Neural Networks</li>
                                        <li>System Design & Scalability</li>
                                        <li>Data Structures & Algorithms</li>
                                        <li>Cloud Computing (AWS, GCP, Azure)</li>
                                        <li>Cybersecurity Basics</li>
                                    </ul>
                                </div>
                                <div className="p-4 rounded-lg bg-[#131314] border border-[#222]">
                                    <h3 className="text-white font-medium mb-2">How to Ask</h3>
                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                                        <li>"Explain how a Transformer model works."</li>
                                        <li>"Design a scalable chat application."</li>
                                        <li>"What is the difference between TCP and UDP?"</li>
                                        <li>"Teach me about Big O notation."</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="quiz-mode" className="space-y-4 sm:space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                                Quiz Mode
                            </h2>
                            <p className="leading-relaxed">
                                Test your knowledge with AI-generated quizzes tailored to your current language. Each quiz contains 5 challenging multiple-choice questions designed to assess your understanding.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-[#131314] border border-[#222]">
                                    <h3 className="text-white font-medium mb-2">How It Works</h3>
                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                                        <li>Click the Trophy icon in the editor toolbar</li>
                                        <li>AI generates 5 questions for your selected language</li>
                                        <li>Answer each question by clicking an option</li>
                                        <li>Get instant feedback on your score</li>
                                    </ul>
                                </div>
                                <div className="p-4 rounded-lg bg-[#131314] border border-[#222]">
                                    <h3 className="text-white font-medium mb-2">Question Types</h3>
                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                                        <li>Practical coding scenarios</li>
                                        <li>Best practices and patterns</li>
                                        <li>Language-specific features</li>
                                        <li>Real-world problem solving</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="shortcuts" className="space-y-4 sm:space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                                <Keyboard className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                                Keyboard Shortcuts
                            </h2>
                            <div className="overflow-x-auto rounded-xl border border-[#333]">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-[#1E1F20] text-white">
                                        <tr>
                                            <th className="p-3 sm:p-4 font-medium">Action</th>
                                            <th className="p-3 sm:p-4 font-medium">Shortcut</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#333]">
                                        <tr>
                                            <td className="p-3 sm:p-4">Run Code</td>
                                            <td className="p-3 sm:p-4 font-mono text-white">
                                                <span className="bg-[#333] px-2 py-1 rounded text-xs sm:text-sm">Ctrl</span> + <span className="bg-[#333] px-2 py-1 rounded text-xs sm:text-sm">Enter</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 sm:p-4">Clear Console</td>
                                            <td className="p-3 sm:p-4 font-mono text-white">
                                                <span className="bg-[#333] px-2 py-1 rounded text-xs sm:text-sm">Ctrl</span> + <span className="bg-[#333] px-2 py-1 rounded text-xs sm:text-sm">L</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 sm:p-4">Toggle Chat</td>
                                            <td className="p-3 sm:p-4 font-mono text-white">
                                                <span className="bg-[#333] px-2 py-1 rounded text-xs sm:text-sm">Ctrl</span> + <span className="bg-[#333] px-2 py-1 rounded text-xs sm:text-sm">B</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
            </main >
        </div >
    );
}
