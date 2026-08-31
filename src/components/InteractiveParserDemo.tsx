import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageSquare, Send, CheckCircle2, FileText, TrendingDown, ArrowRight, ShieldCheck, RefreshCw, Copy, Check } from 'lucide-react';
import { SAMPLE_SIMULATOR_CHATS } from '../data/content';

interface InteractiveParserDemoProps {
  onOpenWaitlist: () => void;
}

export const InteractiveParserDemo: React.FC<InteractiveParserDemoProps> = ({ onOpenWaitlist }) => {
  const [selectedSampleIndex, setSelectedSampleIndex] = useState<number>(0);
  const [inputText, setInputText] = useState<string>(SAMPLE_SIMULATOR_CHATS[0].rawText);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const activeChat = SAMPLE_SIMULATOR_CHATS[selectedSampleIndex];

  const handleSelectSample = (index: number) => {
    setSelectedSampleIndex(index);
    setInputText(SAMPLE_SIMULATOR_CHATS[index].rawText);
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 450);
  };

  const handleRunParser = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 600);
  };

  const handleCopyPO = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo-section" className="py-20 md:py-28 bg-[#0A4A4A] text-[#FDF8F0] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-african-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#D4A747]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4A747]/40 text-[#D4A747] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Live Simulator
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDF8F0] tracking-tight">
            See How Jara Parses African Commerce in Real Time
          </h2>

          <p className="text-base sm:text-lg text-[#FDF8F0]/80 leading-relaxed">
            Test real-world vendor messages from Kano, Lagos, and Alaba markets. Watch how Jara extracts unstructured text into actionable PO line items.
          </p>
        </div>

        {/* Sample Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <span className="text-xs text-[#8BA888] font-bold uppercase tracking-wider mr-2 hidden sm:inline">
            Preset African Scenarios:
          </span>
          {SAMPLE_SIMULATOR_CHATS.map((chat, idx) => (
            <button
              key={chat.id}
              onClick={() => handleSelectSample(idx)}
              className={`text-xs px-3.5 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                selectedSampleIndex === idx
                  ? 'bg-[#D4A747] text-[#0A4A4A] font-bold shadow-md'
                  : 'bg-white/10 hover:bg-white/15 text-[#FDF8F0] border border-white/10'
              }`}
            >
              {chat.vendor.split('(')[0].trim()}
            </button>
          ))}
        </div>

        {/* Two-Column Simulator Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Raw Input (WhatsApp / Email Simulator) */}
          <div className="lg:col-span-6 bg-[#062E2E] rounded-3xl p-6 border border-[#D4A747]/30 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{activeChat.vendor}</div>
                    <div className="text-xs text-[#8BA888]">Channel: {activeChat.platform} • {activeChat.time}</div>
                  </div>
                </div>
                <span className="text-[10px] bg-white/10 text-[#D4A747] px-2 py-1 rounded font-mono">
                  Input Channel
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <label className="text-xs font-semibold text-[#8BA888] uppercase tracking-wider block">
                  Raw Vendor Message (Editable):
                </label>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  rows={6}
                  className="w-full bg-[#041D1D] text-sm text-[#FDF8F0] p-4 rounded-xl border border-white/15 focus:outline-none focus:border-[#D4A747] leading-relaxed resize-none font-sans"
                  placeholder="Paste or type any WhatsApp message, email quotation, or invoice..."
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-[11px] text-[#8BA888]">
                Supports Pidgin, English, & Local abbreviations
              </span>
              <button
                onClick={handleRunParser}
                disabled={isProcessing}
                className="bg-[#D4A747] hover:bg-[#E5B858] text-[#0A4A4A] text-xs font-bold px-4 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer shadow transition-all disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isProcessing ? 'animate-spin' : ''}`} />
                <span>{isProcessing ? 'Parsing with Jara AI...' : 'Re-parse Message'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: AI Extraction & Instant LPO Generation */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#FDF8F0] to-[#F5F0E8] text-[#2C2C2C] rounded-3xl p-6 border border-[#D4A747]/40 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#0A4A4A]/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0A4A4A] text-[#D4A747] flex items-center justify-center font-bold text-sm">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0A4A4A]">Jara Intelligence Extraction</div>
                    <div className="text-[10px] text-gray-500">Confidence Score: 99.6% • Instant LPO Draft</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyPO}
                  className="text-xs bg-[#0A4A4A]/10 hover:bg-[#0A4A4A]/20 text-[#0A4A4A] px-2.5 py-1 rounded flex items-center gap-1 font-medium transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {isProcessing ? (
                <div className="h-64 flex flex-col items-center justify-center space-y-3">
                  <div className="w-8 h-8 border-4 border-[#0A4A4A] border-t-[#D4A747] rounded-full animate-spin"></div>
                  <p className="text-xs text-[#0A4A4A] font-semibold">Running LLM Token Extraction & Price Validation...</p>
                </div>
              ) : (
                <div className="space-y-3 text-xs">
                  {/* Entity Table */}
                  <div className="grid grid-cols-2 gap-2.5 bg-white p-3.5 rounded-xl border border-gray-200">
                    <div>
                      <span className="text-[10px] text-gray-400 font-medium uppercase block">Extracted Item</span>
                      <span className="font-bold text-[#0A4A4A] text-xs">{activeChat.extracted.item}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-medium uppercase block">Quantity</span>
                      <span className="font-bold text-[#0A4A4A] text-xs">{activeChat.extracted.quantity}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-medium uppercase block">Agreed Unit Rate</span>
                      <span className="font-bold text-[#0A4A4A] text-xs">{activeChat.extracted.unitPrice}</span>
                      <span className="text-[10px] text-gray-400 line-through ml-1">{activeChat.extracted.standardMarketRate}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-medium uppercase block">Total Value</span>
                      <span className="font-extrabold text-[#0A4A4A] text-sm">{activeChat.extracted.totalAmount}</span>
                    </div>
                  </div>

                  {/* Delivery & Terms */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] bg-white p-3 rounded-xl border border-gray-200">
                    <div>
                      <span className="text-gray-400 block text-[10px]">SCHEDULED DELIVERY</span>
                      <span className="font-semibold text-gray-800">{activeChat.extracted.deliveryDate}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px]">PAYMENT TERMS</span>
                      <span className="font-semibold text-gray-800">{activeChat.extracted.terms}</span>
                    </div>
                  </div>

                  {/* Savings & Audit Highlight */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-emerald-800">
                      <TrendingDown className="w-4 h-4 text-emerald-600 shrink-0" />
                      <div>
                        <div className="font-bold">Benchmarked Savings: {activeChat.extracted.savings}</div>
                        <div className="text-[10px] text-emerald-700">Verified against recent Lagos/Kano commercial trade data</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded">
                      Passed
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-gray-200 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#0A4A4A] font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                PO automatically prepared for ERP & WhatsApp dispatch.
              </span>
              <button
                onClick={onOpenWaitlist}
                className="w-full sm:w-auto bg-[#0A4A4A] hover:bg-[#135E5E] text-[#D4A747] text-xs font-bold px-4 py-2 rounded-lg flex items-center justify-center gap-1 cursor-pointer transition-colors"
              >
                <span>Deploy for Your Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
