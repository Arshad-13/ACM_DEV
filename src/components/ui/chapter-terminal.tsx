'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const BANNER = `
    ___   ________  ___       ______ _    ___   _ ___ ______
   /   | / ____/  |/  /      / ___/| |  / / | / /  _/_  __/
  / /| |/ /   / /|_/ /______ \\__ \\ | | / /  |/ // /  / /   
 / ___ / /___/ /  / /_____/ ___/ / | |/ / /|  // /  / /    
/_/  |_\\____/_/  /_/      /____/  |___/_/ |_/___/ /_/     
                                                                      
[ACM SVNIT COMMAND INTERFACE v2.5.6]
Connection established via secure tunnel...
Welcome to the ACM SVNIT Command Center.
Type 'help' to see available protocols.
`;

export default function ChapterTerminal() {
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([])
  const [currentCommand, setCurrentCommand] = useState('')
  const [historyIndex, setHistoryIndex] = useState(-1)
  const bottomRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = {
    'help': () => `
[AVAILABLE_PROTOCOLS]

about       The mission and vision of ACM SVNIT
stats       Chapter growth and impact metrics
dotslash    Detailed logs on our flagship hackathon
events      Upcoming and past technological gatherings
socials     Access digital communication channels
clear       Purge terminal history
help        Display this protocol list
    `,
    'about': () => `
[CHAPTER_MISSION]
ACM SVNIT (Association for Computing Machinery) is a student-led
technological community at SVNIT Surat. Our goal is to foster a
culture of computing and software craftsmanship on campus.

We bridge the gap between theoretical academia and industry-standard
engineering through workshops, bootcamps, and hackathons.
    `,
    'stats': () => `
[IMPACT_METRICS]

• Membership: 500+ Active Student Members
• Flagship Hackathon: DotSlash (9+ Successful Editions)
• Major Events: 12+ Official Protocols Executed (25-26)
• Alumni Network: Placed at Google, Amazon, Microsoft, Meta
• Reach: 2000+ Students impacted across the country
    `,
    'dotslash': () => `
[DOTSLASH_HACKATHON_LOGS]

Current Version: 10.0 (Upcoming)
Edition: Decennial
Date: 2027
Prize Pool: ₹1,00,000+
Focus: The Future of Computing

DotSlash 10.0 marks a decade of innovation. We are preparing 
for our largest and most impactful hackathon yet.
    `,
    'events': () => `
[EVENT_LOGS_25-26]

1. Echelon: National Cybersecurity CTF & Hackathon.
2. ACM ICPC: Regional qualifier for the premier global CP contest.
3. Genesis: Month-long AI/ML & Web Development Bootcamp.
4. n8n Workshop: Automation session for workflow optimization.
5. Summer Challenge: CP competition for sophomores.
    `,
    'socials': () => `
[COMMUNICATION_CHANNELS]

📧 Email: acm@svnit.ac.in
🐙 GitHub: https://github.com/ACM-SVNIT
💼 LinkedIn: https://linkedin.com/company/acm-svnit
📸 Instagram: https://instagram.com/acmsvnit
    `,
    'clear': () => {
      setHistory([])
      return ''
    },
  }

  const handleCommand = () => {
    const cmd = currentCommand.trim().toLowerCase()
    const commandFn = commands[cmd as keyof typeof commands]
    const output = commandFn ? commandFn() : `Protocol Error: Unknown command '${cmd}'
Type 'help' to see available protocols.`

    if (cmd === 'clear') {
      commandFn()
    } else {
      setHistory(prev => [...prev, { command: currentCommand, output }])
    }
    
    setCurrentCommand('')
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHistoryIndex(prev => {
        const newIndex = Math.min(prev + 1, history.length - 1)
        if (history.length > 0) {
          setCurrentCommand(history[history.length - 1 - newIndex]?.command || '')
        }
        return newIndex
      })
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHistoryIndex(prev => {
        const newIndex = Math.max(prev - 1, -1)
        setCurrentCommand(newIndex === -1 ? '' : history[history.length - 1 - newIndex]?.command || '')
        return newIndex
      })
    }
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus()
    }
    
    if (terminalRef.current) {
      terminalRef.current.addEventListener('click', handleClick)
    }
    
    return () => {
      if (terminalRef.current) {
        terminalRef.current.removeEventListener('click', handleClick)
      }
    }
  }, [])

  const renderOutput = (output: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g
    
    let parts = output.split(urlRegex)
    parts = parts.flatMap(part => 
      urlRegex.test(part) ? [part] : part.split(emailRegex)
    )
    
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline opacity-80 hover:opacity-100 transition-all">
            {part}
          </a>
        )
      } else if (emailRegex.test(part)) {
        return (
          <a key={index} href={`mailto:${part}`} className="text-[var(--accent)] hover:underline opacity-80 hover:opacity-100 transition-all">
            {part}
          </a>
        )
      }
      return <span key={index}>{part}</span>
    })
  }

  return (
    <div className="flex items-center justify-center bg-black text-[var(--accent)] font-mono">
      <div className="w-full max-w-5xl bg-black overflow-hidden border border-[#1A1A1A] shadow-[0_0_80px_rgba(0,0,0,1)] relative">
        <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_3px,3px_100%]" />

        <div className="flex items-center gap-2 p-4 bg-[#050505] text-[10px] uppercase tracking-[0.2em] text-zinc-500 border-b border-[#1A1A1A]">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] border border-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] border border-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] border border-zinc-800" />
          </div>
          <div className="flex-1 text-center font-bold opacity-50">SYSTEM_CORE // ACM_SVNIT_OS_v2.5.6</div>
          <div className="flex items-center gap-2 text-[var(--accent)] opacity-80">
            <span className="animate-pulse">●</span> LIVE_LINK
          </div>
        </div>

        <div 
          ref={terminalRef} 
          className="h-[65vh] overflow-y-auto p-8 space-y-6 bg-black cursor-text scrollbar-hide relative z-10"
          style={{
            scrollbarWidth: 'none',
          }}
        >
          <div className="whitespace-pre font-mono text-zinc-400 opacity-90 leading-tight text-xs md:text-sm overflow-x-auto mb-10">
            {BANNER}
          </div>

          {history.map((entry, i) => (
            <div key={i} className="space-y-3">
              <div className="flex gap-3 text-sm">
                <span className="text-[var(--accent)] opacity-40 font-bold">visitor@acm-svnit:~$</span>
                <span className="text-white">{entry.command}</span>
              </div>
              <div className="whitespace-pre font-mono text-zinc-300 pl-4 leading-relaxed text-sm overflow-x-auto">
                {renderOutput(entry.output)}
              </div>
            </div>
          ))}

          <div className="flex gap-3 items-center text-sm">
            <span className="text-[var(--accent)] opacity-40 font-bold">visitor@acm-svnit:~$</span>
            <div className="flex-1 relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={e => setCurrentCommand(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent outline-none text-white caret-transparent"
                spellCheck="false"
                autoComplete="off"
              />
              <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="absolute h-4 w-2 bg-[var(--accent)]"
                style={{ 
                  left: `${currentCommand.length * 0.6}rem`,
                  marginLeft: '2px'
                }}
              />
            </div>
          </div>

          <div ref={bottomRef} />
        </div>
        
        <div className="bg-[#050505] px-6 py-3 text-[10px] text-zinc-600 border-t border-[#1A1A1A] uppercase tracking-[0.3em]">
          <div className="flex justify-between items-center opacity-40">
            <div className="flex gap-8">
              <span>STATUS: NOMINAL</span>
              <span>BUFFER: 4096KB</span>
            </div>
            <span>SVNIT_SURAT // SECTOR_7G</span>
          </div>
        </div>
      </div>
    </div>
  )
}
