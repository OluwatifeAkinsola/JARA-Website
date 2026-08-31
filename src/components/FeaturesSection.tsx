import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquareText, 
  FileCheck, 
  BarChart3, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  ArrowUpRight,
  AlertTriangle,
  Clock,
  Download,
  Building,
  RefreshCw,
  Share2,
  Lock
} from 'lucide-react';
import { FEATURES } from '../data/content';

export const FeaturesSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>('parsing');
  const [inventoryLevel, setInventoryLevel] = useState<number>(18);
  const [isGeneratingPO, setIsGeneratingPO] = useState<boolean>(false);
  const [poGenerated, setPoGenerated] = useState<boolean>(true);

  return (
    <section id="features" className="py-20 md:py-28 bg-[#F5F0E8] relative overflow-hidden">
      {/* Background grids */}
      <div className="absolute inset-0 bg-grid-teal opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A4A4A]/10 border border-[#0A4A4A]/20 text-[#0A4A4A] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A747]" />
            Core Technology
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A4A4A] tracking-tight">
            Meet Jara. Your AI Procurement Partner.
          </h2>

          <p className="text-base sm:text-lg text-[#2C2C2C]/80 leading-relaxed">
            We turn everyday chaos into clear, actionable intelligence—automating the repetitive manual drudgery so your team can focus on negotiating better terms and growing your bottom line.
          </p>
        </div>

        {/* Feature Cards Grid (4 Key Features) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FEATURES.map((feature, idx) => {
            const isSelected = selectedFeature === feature.id;
            const Icon = 
              feature.iconName === 'MessageSquareText' ? MessageSquareText :
              feature.iconName === 'FileCheck' ? FileCheck :
              feature.iconName === 'BarChart3' ? BarChart3 : ShieldCheck;

            // Palette icon background colors
            const iconBgClass = 
              idx === 0 ? 'bg-[#8BA888]/20 text-[#0A4A4A]' :
              idx === 1 ? 'bg-[#D4A747]/20 text-[#0A4A4A]' :
              idx === 2 ? 'bg-[#C77D4A]/20 text-[#0A4A4A]' : 'bg-[#0A4A4A]/10 text-[#0A4A4A]';

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setSelectedFeature(feature.id)}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-300 flex flex-col justify-between relative group ${
                  isSelected
                    ? 'bg-[#0A4A4A] text-[#FDF8F0] shadow-xl ring-2 ring-[#D4A747] scale-[1.02]'
                    : 'bg-white text-[#2C2C2C] border border-[#0A4A4A]/5 shadow-sm hover:shadow-md hover:border-[#D4A747]/40'
                }`}
              >
                <div>
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105 ${
                    isSelected ? 'bg-[#D4A747] text-[#0A4A4A]' : iconBgClass
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className={`font-serif-title text-lg font-bold mb-2 ${isSelected ? 'text-[#FDF8F0]' : 'text-[#0A4A4A]'}`}>
                    {feature.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-6 ${isSelected ? 'text-[#FDF8F0]/85' : 'text-[#2C2C2C]/70'}`}>
                    {feature.shortDesc}
                  </p>
                </div>

                <div className="mt-auto pt-3 border-t border-current/10 flex items-center justify-between text-xs font-bold">
                  <span className={isSelected ? 'text-[#D4A747]' : 'text-[#D4A747] group-hover:underline flex items-center gap-1.5'}>
                    {isSelected ? 'ACTIVE PREVIEW' : 'LEARN MORE'}
                  </span>
                  <span className={`text-xs ${isSelected ? 'text-[#D4A747]' : 'text-[#D4A747] group-hover:translate-x-1 transition-transform'}`}>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Feature Deep-Dive & Live Interactive Mockup Container */}
        <div className="bg-[#FDF8F0] border border-[#0A4A4A]/15 rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden">
          {selectedFeature === 'parsing' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A4A4A] bg-[#0A4A4A]/10 px-3 py-1 rounded-full">
                  <MessageSquareText className="w-3.5 h-3.5 text-[#D4A747]" />
                  <span>Natural Language Extraction</span>
                </div>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#0A4A4A]">
                  Smart Communication Parsing
                </h3>
                <p className="text-sm sm:text-base text-[#2C2C2C]/80 leading-relaxed">
                  Nigerian trade happens on WhatsApp and in local market phrasing. Jara reads natural conversation messages, informal invoices, and email quotations in English, Pidgin, and local commerce terms to extract structured order tables instantly.
                </p>
                <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#2C2C2C]/90">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8BA888] font-bold" />
                    <span>Extracts SKU, Qty, Negotiated Price (₦), and Delivery Terms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8BA888] font-bold" />
                    <span>Detects promised payment schedules (Net-7, Net-15, COD)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8BA888] font-bold" />
                    <span>Supports WhatsApp voice note speech-to-text extraction</span>
                  </div>
                </div>
              </div>

              {/* Mockup Display */}
              <div className="lg:col-span-7 bg-[#0A4A4A] rounded-2xl p-5 sm:p-6 text-[#FDF8F0] shadow-2xl border border-[#D4A747]/30">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] font-bold text-xs">
                      WA
                    </div>
                    <div>
                      <div className="text-xs font-bold">Supplier Chat: Premier Cement & Building Materials</div>
                      <div className="text-[10px] text-[#8BA888]">Active 2m ago • WhatsApp Business API</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-[#D4A747] text-[#0A4A4A] px-2 py-0.5 rounded font-bold uppercase">
                    AI Parsed
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Incoming WhatsApp message */}
                  <div className="bg-[#062E2E] p-3.5 rounded-xl rounded-tl-none border-l-4 border-[#25D366] text-xs text-[#FDF8F0]/90 leading-relaxed">
                    <p className="font-mono text-[11px] text-[#8BA888] mb-1">Incoming Message // 09:42 AM</p>
                    "Good day Alhaji! As agreed on phone, we have 400 bags of Dangote 42.5R Cement ready at ₦9,400 per bag. Delivery to your Epe site will be ₦120,000 flat. We can dispatch Friday morning."
                  </div>

                  {/* AI Extraction Box */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-[#D4A747]/40 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-[#D4A747]">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4" />
                        Extracted Entities (Confidence: 99.8%)
                      </span>
                      <span className="text-emerald-400">Validated</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1">
                      <div className="bg-black/30 p-2 rounded">
                        <span className="text-[10px] text-[#8BA888] block">Product / SKU</span>
                        <span className="font-semibold text-white">Dangote 42.5R (50kg)</span>
                      </div>
                      <div className="bg-black/30 p-2 rounded">
                        <span className="text-[10px] text-[#8BA888] block">Quantity</span>
                        <span className="font-semibold text-white">400 bags</span>
                      </div>
                      <div className="bg-black/30 p-2 rounded">
                        <span className="text-[10px] text-[#8BA888] block">Unit Rate</span>
                        <span className="font-semibold text-[#D4A747]">₦9,400 / bag</span>
                      </div>
                      <div className="bg-black/30 p-2 rounded">
                        <span className="text-[10px] text-[#8BA888] block">Total Order</span>
                        <span className="font-semibold text-[#D4A747]">₦3,880,000</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between text-[11px] text-[#FDF8F0]/80 pt-2 border-t border-white/10">
                      <span>📍 Destination: Epe Construction Site</span>
                      <span className="text-[#8BA888]">🚚 Delivery: Friday Morning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedFeature === 'po-gen' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A4A4A] bg-[#0A4A4A]/10 px-3 py-1 rounded-full">
                  <FileCheck className="w-3.5 h-3.5 text-[#D4A747]" />
                  <span>Instant Purchase Order</span>
                </div>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#0A4A4A]">
                  Automated PO Generation
                </h3>
                <p className="text-sm sm:text-base text-[#2C2C2C]/80 leading-relaxed">
                  Eliminate 45 minutes of manual copy-pasting into spreadsheets. Jara validates price caps, compares with historical rates, and generates an official, standardized digital LPO with tax and discount breakdowns.
                </p>
                <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#2C2C2C]/90">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8BA888] font-bold" />
                    <span>Automatic 3-way matching between Quotation, LPO, and Delivery Note</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8BA888] font-bold" />
                    <span>One-click digital signature authorization via mobile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8BA888] font-bold" />
                    <span>Instant export to PDF, WhatsApp Dispatch, and ERP</span>
                  </div>
                </div>
              </div>

              {/* PO Preview Mockup */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-6 text-[#2C2C2C] shadow-2xl border border-[#0A4A4A]/20">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-[#0A4A4A] text-[#D4A747] font-serif font-bold flex items-center justify-center">
                      J
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0A4A4A]">Local Purchase Order (LPO)</div>
                      <div className="text-[10px] text-gray-500">PO #JR-2026-9042 • Status: Approved</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-xs bg-gray-100 hover:bg-gray-200 text-[#0A4A4A] px-2.5 py-1 rounded flex items-center gap-1">
                      <Download className="w-3 h-3" /> PDF
                    </button>
                    <button className="text-xs bg-[#25D366] text-white px-2.5 py-1 rounded flex items-center gap-1">
                      <Share2 className="w-3 h-3" /> Send
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs mb-4 bg-gray-50 p-3 rounded-lg">
                  <div>
                    <span className="text-gray-400 block text-[10px]">VENDOR</span>
                    <span className="font-bold text-[#0A4A4A]">Kano Grains & Agro Mills</span>
                    <span className="block text-gray-500 text-[10px]">TIN: 22091844-0001</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px]">DELIVERY DESTINATION</span>
                    <span className="font-bold text-[#0A4A4A]">Lagos Central Silos, Ikeja</span>
                    <span className="block text-gray-500 text-[10px]">Expected: 28 Aug 2026</span>
                  </div>
                </div>

                <table className="w-full text-left text-xs mb-3">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-400 text-[10px]">
                      <th className="pb-1">ITEM DESCRIPTION</th>
                      <th className="pb-1 text-center">QTY</th>
                      <th className="pb-1 text-right">RATE (₦)</th>
                      <th className="pb-1 text-right">TOTAL (₦)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-2 font-medium">Premium Yellow Maize (50kg Bag)</td>
                      <td className="py-2 text-center">300</td>
                      <td className="py-2 text-right">₦43,000</td>
                      <td className="py-2 text-right font-semibold">₦12,900,000</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Interstate Heavy Haulage Logistics</td>
                      <td className="py-2 text-center">1</td>
                      <td className="py-2 text-right">₦450,000</td>
                      <td className="py-2 text-right font-semibold">₦450,000</td>
                    </tr>
                  </tbody>
                </table>

                <div className="border-t border-gray-200 pt-2 flex justify-between items-center text-xs">
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                    <Check className="w-3 h-3" /> ₦750,000 (5.6%) Below Market Average
                  </span>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 block">TOTAL LPO AMOUNT</span>
                    <span className="text-sm font-extrabold text-[#0A4A4A]">₦13,350,000.00</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedFeature === 'stock-monitor' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A4A4A] bg-[#0A4A4A]/10 px-3 py-1 rounded-full">
                  <BarChart3 className="w-3.5 h-3.5 text-[#D4A747]" />
                  <span>Automated Inventory Health</span>
                </div>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#0A4A4A]">
                  Real-time Stock Monitoring
                </h3>
                <p className="text-sm sm:text-base text-[#2C2C2C]/80 leading-relaxed">
                  Stop losing revenue from empty shelves. Jara tracks depletion velocity, predicts upcoming stockouts, and prepares automatic replenishment PO drafts before your business runs dry.
                </p>
                
                {/* Interactive slider */}
                <div className="bg-[#F5F0E8] p-4 rounded-xl space-y-2 border border-[#0A4A4A]/10">
                  <div className="flex justify-between text-xs font-bold">
                    <span>Simulate Stock Level:</span>
                    <span className={inventoryLevel < 25 ? 'text-red-600' : 'text-emerald-700'}>
                      {inventoryLevel}% ({inventoryLevel < 25 ? 'CRITICAL LOW' : 'HEALTHY'})
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    value={inventoryLevel}
                    onChange={(e) => setInventoryLevel(Number(e.target.value))}
                    className="w-full accent-[#D4A747] cursor-pointer"
                  />
                  <span className="text-[11px] text-[#2C2C2C]/70 block">
                    Drag to test auto-replenishment trigger threshold (Trigger at &lt; 25%).
                  </span>
                </div>
              </div>

              {/* Stock Dashboard Mockup */}
              <div className="lg:col-span-7 bg-[#0A4A4A] rounded-2xl p-5 sm:p-6 text-[#FDF8F0] shadow-2xl border border-[#D4A747]/30">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div>
                    <div className="text-xs font-bold">Lagos Central Hub // Inventory Telemetry</div>
                    <div className="text-[10px] text-[#8BA888]">Warehouse A • 1,420 Active SKUs</div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-white/10 px-2.5 py-1 rounded text-[#D4A747] font-mono">Live Sync</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Item 1 */}
                  <div className="bg-[#062E2E] p-3.5 rounded-xl border border-white/5 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-xs font-bold text-white">Golden Penny Vegetable Oil (25L Jerrycan)</div>
                        <div className="text-[10px] text-[#8BA888]">SKU: GP-VO-25L • Burn rate: 14 units/day</div>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                        inventoryLevel < 25 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-emerald-500/20 text-emerald-400'
                      }`}>
                        {inventoryLevel < 25 ? 'Reorder Triggered' : 'Normal'}
                      </span>
                    </div>

                    <div className="w-full bg-black/40 h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          inventoryLevel < 25 ? 'bg-red-500' : 'bg-[#D4A747]'
                        }`}
                        style={{ width: `${inventoryLevel}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-[11px] text-[#8BA888] pt-1">
                      <span>Available: {Math.round(inventoryLevel * 2.8)} units remaining</span>
                      <span>Estimated {Math.max(1, Math.round(inventoryLevel / 7))} days left</span>
                    </div>

                    {inventoryLevel < 25 && (
                      <div className="mt-2 bg-[#D4A747]/20 border border-[#D4A747]/50 rounded-lg p-2.5 flex items-center justify-between text-xs animate-in fade-in">
                        <div className="flex items-center gap-2 text-[#D4A747]">
                          <AlertTriangle className="w-4 h-4 shrink-0" />
                          <span>Auto-Drafted PO to Top Distributor (₦1.2M)</span>
                        </div>
                        <button className="bg-[#D4A747] text-[#0A4A4A] font-bold px-2.5 py-1 rounded text-[11px]">
                          Approve PO
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Item 2 */}
                  <div className="bg-[#062E2E] p-3.5 rounded-xl border border-white/5 space-y-2 opacity-80">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-xs font-bold text-white">Paracetamol 500mg (Pack of 100)</div>
                        <div className="text-[10px] text-[#8BA888]">SKU: MED-PCM-500 • Burn rate: 45 packs/day</div>
                      </div>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold uppercase">
                        Optimal
                      </span>
                    </div>
                    <div className="w-full bg-black/40 h-2.5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#8BA888] rounded-full w-[78%]"></div>
                    </div>
                    <div className="flex justify-between text-[11px] text-[#8BA888] pt-1">
                      <span>Available: 780 packs</span>
                      <span>17 days safety buffer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedFeature === 'audit-trail' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A4A4A] bg-[#0A4A4A]/10 px-3 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4A747]" />
                  <span>Tamper-Proof Compliance</span>
                </div>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#0A4A4A]">
                  Transparency & Audit Trails
                </h3>
                <p className="text-sm sm:text-base text-[#2C2C2C]/80 leading-relaxed">
                  Eliminate ghost vendors, duplicate invoices, and off-book markups. Every quotation received, manager authorization, and delivery slip is cryptographically sealed with verifiable timestamps.
                </p>
                <div className="space-y-2 pt-2 text-xs sm:text-sm text-[#2C2C2C]/90">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8BA888] font-bold" />
                    <span>Real-time anomaly & kickback detection radar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8BA888] font-bold" />
                    <span>Open Contracting Data Standard (OCDS) compliance for public audits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8BA888] font-bold" />
                    <span>Zero duplicate invoices across multiple business units</span>
                  </div>
                </div>
              </div>

              {/* Audit Ledger Mockup */}
              <div className="lg:col-span-7 bg-[#0A4A4A] rounded-2xl p-5 sm:p-6 text-[#FDF8F0] shadow-2xl border border-[#D4A747]/30">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#D4A747]" />
                    <span className="text-xs font-bold">Cryptographic Audit Trail // Transaction #TX-7789</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                    SHA-256 Verified
                  </span>
                </div>

                <div className="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#D4A747]/30">
                  {/* Step 1 */}
                  <div className="relative pl-8 text-xs">
                    <div className="absolute left-1.5 top-1 w-3 h-3 rounded-full bg-[#D4A747]"></div>
                    <div className="bg-[#062E2E] p-2.5 rounded-lg border border-white/5">
                      <div className="flex justify-between font-semibold text-white">
                        <span>1. WhatsApp Quote Received & Parsed</span>
                        <span className="text-[10px] text-[#8BA888]">10:14:02 AM</span>
                      </div>
                      <p className="text-[11px] text-[#8BA888] mt-0.5">
                        Vendor: Alhaji Musa • Hash: <span className="font-mono text-[#D4A747]">0x8f2a...c4b1</span>
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative pl-8 text-xs">
                    <div className="absolute left-1.5 top-1 w-3 h-3 rounded-full bg-[#8BA888]"></div>
                    <div className="bg-[#062E2E] p-2.5 rounded-lg border border-white/5">
                      <div className="flex justify-between font-semibold text-white">
                        <span>2. Price Benchmark Check & Budget Match</span>
                        <span className="text-[10px] text-emerald-400">Passed (7.3% under avg)</span>
                      </div>
                      <p className="text-[11px] text-[#8BA888] mt-0.5">
                        Compared against 42 regional grain transactions in Kano & Lagos.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative pl-8 text-xs">
                    <div className="absolute left-1.5 top-1 w-3 h-3 rounded-full bg-[#D4A747]"></div>
                    <div className="bg-[#062E2E] p-2.5 rounded-lg border border-white/5">
                      <div className="flex justify-between font-semibold text-white">
                        <span>3. Multi-Level Digital Authorization</span>
                        <span className="text-[10px] text-[#8BA888]">11:05:18 AM</span>
                      </div>
                      <p className="text-[11px] text-[#8BA888] mt-0.5">
                        Signed by: C. Okafor (Procurement Lead) & T. Adeleke (Finance VP)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 bg-white/5 rounded-xl p-3 text-xs text-[#8BA888] flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[#FDF8F0]">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Zero anomalies detected. External audit export ready.
                  </span>
                  <span className="text-[10px] text-[#D4A747] font-mono">OCDS-NG-2026</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
