import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, HardDrive, Database, Send, Play, Sparkles } from 'lucide-react';

interface TerminalLine {
  text: string;
  type: 'system' | 'input' | 'output' | 'error' | 'success';
}

const PRESET_COMMANDS = [
  { cmd: '/about', desc: 'Who is Krishi?' },
  { cmd: '/experience', desc: 'Work history' },
  { cmd: '/skills', desc: 'Tech stack' },
  { cmd: '/credentials', desc: 'Education & Certs' },
  { cmd: '/hire', desc: 'Get in touch' },
];

const AITerminal: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { text: 'SYSTEM INTERRUPT // SHAH_AGENT_v1.0.3 READY', type: 'system' },
    { text: 'Initializing neural link models...', type: 'system' },
    { text: 'Models loaded. Type /help or click presets below to prompt the Agent.', type: 'success' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [telemetry, setTelemetry] = useState({
    cpu: 24,
    mem: 58,
    activeTasks: 4,
    networkLoad: 12
  });

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Auto scroll to bottom of terminal
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, isTyping]);

  useEffect(() => {
    // Jitter telemetry values for live feel
    const interval = setInterval(() => {
      setTelemetry({
        cpu: Math.floor(Math.random() * 25) + 15,
        mem: Math.floor(Math.random() * 5) + 55,
        activeTasks: Math.floor(Math.random() * 2) + 3,
        networkLoad: Math.floor(Math.random() * 15) + 5
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const addLineWithTyping = (text: string, type: 'output' | 'success' | 'error', delay = 15) => {
    setIsTyping(true);
    let currentText = '';
    const words = text.split(' ');
    let wordIndex = 0;

    const typeWord = () => {
      if (wordIndex < words.length) {
        currentText += (wordIndex === 0 ? '' : ' ') + words[wordIndex];
        setLines(prev => {
          // Remove the temporary last line if it exists
          const clean = prev.filter(l => l.text !== currentText.slice(0, currentText.lastIndexOf(' ')));
          return [...clean, { text: currentText, type }];
        });
        wordIndex++;
        setTimeout(typeWord, delay);
      } else {
        setIsTyping(false);
      }
    };

    typeWord();
  };

  const handleCommand = (cmd: string) => {
    if (isTyping) return;
    const cleanCmd = cmd.trim().toLowerCase();

    setLines(prev => [...prev, { text: `> ${cmd}`, type: 'input' }]);

    setTimeout(() => {
      switch (cleanCmd) {
        case '/help':
          setLines(prev => [
            ...prev,
            { text: 'Available commands:', type: 'system' },
            { text: '  /about       - Who is Krishi Shah?', type: 'output' },
            { text: '  /experience  - View timeline of professional engagements', type: 'output' },
            { text: '  /skills      - Print structural technology capabilities', type: 'output' },
            { text: '  /credentials - Learn about university study & specifications', type: 'output' },
            { text: '  /hire        - Get in touch to schedule a project or chat', type: 'output' },
            { text: '  /clear       - Flush terminal history buffer', type: 'output' },
          ]);
          break;

        case '/clear':
          setLines([]);
          break;

        case '/about':
          addLineWithTyping(
            "Krishi Shah is a full-stack engineer and MS Computer Science student at UC Davis. He focuses on full-stack application development, complex architectures, and AI integration. Driven by technical innovation, he designs reliable, data-rich applications that solve high-impact, real-world problems.",
            'output'
          );
          break;

        case '/experience':
          setLines(prev => [
            ...prev,
            { text: 'LOGGING EXPERIENCE DIRECTORY...', type: 'system' },
            { text: '---------------------------------------------------', type: 'output' },
            { text: '1. JP MORGAN CHASE & CO // STUDENT TRAINEE (2023-2024)', type: 'success' },
            { text: '   - Deployed ML predictive workflows, raising analytics speed by 15%', type: 'output' },
            { text: '   - Developed responsive client components in React & Python', type: 'output' },
            { text: '2. KENMARK ITAN SOLUTIONS // NEXT.JS DEVELOPER (2023-2024)', type: 'success' },
            { text: '   - Built next-gen Next.js portals linking 5+ high-volume APIs', type: 'output' },
            { text: '   - Engineered cloud CI/CD pipelines, cutting deploy delays by 40%', type: 'output' },
            { text: '---------------------------------------------------', type: 'output' },
          ]);
          break;

        case '/skills':
          setLines(prev => [
            ...prev,
            { text: 'LOADING SKILLS MATRIX...', type: 'system' },
            { text: '  [LANGUAGES]: TypeScript, JavaScript, Python, C++, Java, SQL', type: 'success' },
            { text: '  [FRONTEND ]: React, Next.js, Angular, Tailwind CSS, Redux, Material UI', type: 'success' },
            { text: '  [BACKEND  ]: Node.js, Express, FastAPI, Django, GraphQL, REST APIs', type: 'success' },
            { text: '  [DATASTORE]: MongoDB, PostgreSQL, MySQL, Redis, Supabase, Firebase', type: 'success' },
            { text: '  [CLOUD/OPS]: AWS, Docker, Git, CI/CD pipelines, Linux servers', type: 'success' },
          ]);
          break;

        case '/credentials':
          setLines(prev => [
            ...prev,
            { text: 'RETRIEVING SCHOLASTIC ARCHIVES...', type: 'system' },
            { text: '  - UC DAVIS // MS in Computer Science (Aug 2025 - Present)', type: 'output' },
            { text: '    Fields: Advanced Algorithms, ML, Database Systems, Cloud Computing', type: 'output' },
            { text: '  - DJ SANGHVI // BE in Computer Engineering (2021 - 2025)', type: 'output' },
            { text: '  - CERTIFICATIONS:', type: 'success' },
            { text: '    * Google AI Essentials (AI Agent Workflows)', type: 'output' },
            { text: '    * Google Cybersecurity Professional Specialist', type: 'output' },
            { text: '    * AWS Educate: Machine Learning Foundations', type: 'output' },
          ]);
          break;

        case '/hire':
          addLineWithTyping(
            "Agent connection successful! Contact Krishi directly at krishishah1211@gmail.com, connect via LinkedIn (linkedin.com/in/krishishah1211/), or explore repositories on GitHub (github.com/Krishi1211). Let's collaborate!",
            'success'
          );
          break;

        default:
          if (cleanCmd.length > 0) {
            addLineWithTyping(
              `AI processing custom prompt: "${cmd}"... Initializing local semantic models. Prompt analysis: User interested in Krishi Shah. Result: Krishi is a highly scalable full-stack expert specializing in modern architectures and AI integrations. Try using /hire to connect!`,
              'output',
              10
            );
          }
          break;
      }
    }, 150);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    handleCommand(inputValue);
    setInputValue('');
  };

  return (
    <div className="w-full rounded-2xl border border-blue-500/20 bg-black/60 backdrop-blur-xl shadow-[0_0_35px_rgba(59,130,246,0.15)] overflow-hidden flex flex-col font-mono text-xs text-blue-300">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900/50 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-blue-400 animate-pulse" />
          <span className="font-semibold text-white tracking-wider">PORTFOLIO_AGENT.EXE</span>
          <span className="text-[10px] bg-blue-900/30 text-blue-400 border border-blue-500/30 px-1.5 py-0.5 rounded animate-pulse">LIVE</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        </div>
      </div>

      {/* Telemetry Dashboard Grid */}
      <div className="grid grid-cols-4 border-b border-white/5 bg-gray-950/40 p-2 gap-2 text-[10px] text-gray-400">
        <div className="flex items-center gap-1.5 bg-black/20 p-1.5 rounded border border-white/5">
          <Cpu className="w-3.5 h-3.5 text-blue-400" />
          <div>
            <div className="text-gray-500 font-bold">CPU LOAD</div>
            <div className="text-blue-300 font-semibold">{telemetry.cpu}%</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-black/20 p-1.5 rounded border border-white/5">
          <HardDrive className="w-3.5 h-3.5 text-purple-400" />
          <div>
            <div className="text-gray-500 font-bold">MEM USED</div>
            <div className="text-purple-300 font-semibold">{telemetry.mem}%</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-black/20 p-1.5 rounded border border-white/5">
          <Database className="w-3.5 h-3.5 text-pink-400" />
          <div>
            <div className="text-gray-500 font-bold">TASKS</div>
            <div className="text-pink-300 font-semibold">{telemetry.activeTasks} RUNNING</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-black/20 p-1.5 rounded border border-white/5">
          <Sparkles className="w-3.5 h-3.5 text-green-400" />
          <div>
            <div className="text-gray-500 font-bold">NET LATENCY</div>
            <div className="text-green-300 font-semibold">{telemetry.networkLoad}ms</div>
          </div>
        </div>
      </div>

      {/* Terminal Screen lines */}
      <div 
        ref={scrollRef}
        className="flex-grow p-4 space-y-2 h-[260px] overflow-y-auto terminal-screen-glow bg-black/80 scrollbar-none"
      >
        {lines.map((line, idx) => (
          <div 
            key={idx} 
            className={`whitespace-pre-wrap leading-relaxed ${
              line.type === 'system' ? 'text-purple-400' :
              line.type === 'input' ? 'text-white font-bold' :
              line.type === 'error' ? 'text-red-400' :
              line.type === 'success' ? 'text-green-400' : 'text-blue-300'
            }`}
          >
            {line.text}
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center text-blue-400">
            <span className="animate-pulse">Thinking...</span>
            <span className="terminal-cursor"></span>
          </div>
        )}
      </div>

      {/* Preset Action Tags */}
      <div className="p-2 border-t border-white/5 bg-gray-950/20 flex flex-wrap gap-1.5 items-center">
        <span className="text-[9px] text-gray-500 font-bold uppercase mr-1">Presets:</span>
        {PRESET_COMMANDS.map(preset => (
          <button
            key={preset.cmd}
            onClick={() => handleCommand(preset.cmd)}
            disabled={isTyping}
            className="px-2 py-1 rounded bg-blue-950/40 hover:bg-blue-900/30 border border-blue-500/20 hover:border-blue-400/50 text-[10px] text-blue-400 hover:text-white font-bold transition-all disabled:opacity-50"
          >
            {preset.cmd}
          </button>
        ))}
      </div>

      {/* Command Form Input */}
      <form 
        onSubmit={handleFormSubmit}
        className="flex border-t border-white/5 bg-gray-950/50"
      >
        <span className="flex items-center pl-4 text-blue-400 font-bold select-none">&gt;</span>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isTyping}
          className="flex-grow bg-transparent border-0 outline-none focus:ring-0 px-2 py-3.5 text-xs text-white placeholder-gray-600 disabled:opacity-50"
          placeholder="Type a command, e.g. /help, /skills..."
        />
        <button
          type="submit"
          disabled={isTyping || !inputValue.trim()}
          className="px-4 py-3 bg-blue-950/30 hover:bg-blue-900/20 border-l border-white/5 text-blue-400 hover:text-white transition-colors disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default AITerminal;
