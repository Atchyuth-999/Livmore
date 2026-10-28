import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white border border-[#B59A70] max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="p-6 bg-[#F4F0E9] border-b border-[#E8E1D6] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#B59A70]" />
            <h3 className="text-xl font-serif text-[#1C1A18] font-normal">
              {isPrivacy ? 'Privacy & Non-Disclosure Policy' : 'Terms & Architectural Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#1C1A18] hover:text-[#B59A70] cursor-pointer bg-white border border-[#E8E1D6]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8 space-y-4 text-xs sm:text-sm text-[#1C1A18]/80 font-sans leading-relaxed">
          {isPrivacy ? (
            <>
              <p className="font-medium text-[#1C1A18]">
                Last Updated: October 2026 · LivMore Luxury Interior Architecture LLP
              </p>
              <h4 className="font-serif text-base text-[#1C1A18] font-medium pt-2">
                1. High-Net-Worth Residence Confidentiality
              </h4>
              <p>
                LivMore Luxury maintains strict non-disclosure safeguards. Floor plans, architectural blueprints, family security layouts, and location coordinates are stored in encrypted client vaults and never publicly disclosed without written consent.
              </p>
              <h4 className="font-serif text-base text-[#1C1A18] font-medium pt-2">
                2. Information Collection & Usage
              </h4>
              <p>
                Contact parameters collected during consultation bookings (name, verified mobile number, email, property tier) are utilized exclusively by our Senior Principal Architects for project feasibility analysis and scheduling. We never sell, lease, or monetize client data.
              </p>
              <h4 className="font-serif text-base text-[#1C1A18] font-medium pt-2">
                3. On-Site Staff Security
              </h4>
              <p>
                All on-site contractors, site supervisors, and MEP specialists undergo verified identity background checks before entering private residential premises.
              </p>
            </>
          ) : (
            <>
              <p className="font-medium text-[#1C1A18]">
                Last Updated: October 2026 · LivMore Luxury Interior Architecture LLP
              </p>
              <h4 className="font-serif text-base text-[#1C1A18] font-medium pt-2">
                1. Turnkey Scope of Engagement
              </h4>
              <p>
                All interior architecture, modular joinery, and civil alterations are governed by a signed Master Services Agreement detailing an itemized Bill of Quantities (BOQ), certified material specifications, and milestone execution schedules.
              </p>
              <h4 className="font-serif text-base text-[#1C1A18] font-medium pt-2">
                2. 10-Year Craftsmanship Warranty
              </h4>
              <p>
                Modular cabinetry and marine-grade carcass structures carry a comprehensive 10-year warranty against manufacturing defects and termite degradation, subject to standard domestic care guidelines.
              </p>
              <h4 className="font-serif text-base text-[#1C1A18] font-medium pt-2">
                3. Milestone-Linked Payments
              </h4>
              <p>
                Commercial disbursements are linked directly to verified physical on-site milestones. Handover is preceded by a joint 7-stage quality audit and civil snag checklist.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#F4F0E9] border-t border-[#E8E1D6] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#1C1A18] text-[#F4F0E9] text-xs uppercase tracking-widest font-medium cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
