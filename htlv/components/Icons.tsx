export function TruckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 26 26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="1" y="12" width="14" height="10" rx="2" />
      <path d="M15 15h5l3 4v3h-3" />
      <circle cx="5" cy="23" r="2.2" />
      <circle cx="12" cy="23" r="2.2" />
      <circle cx="22" cy="23" r="2.2" />
      <path d="M5 12V7h5" />
      <path d="M15 17l5-8" strokeDasharray="2 2" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.4 2.1L8.1 9.9a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7a2 2 0 011.7 2z" />
    </svg>
  );
}

export function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2a8 8 0 018 8c0 6-8 14-8 14S4 16 4 10a8 8 0 018-8z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function TrophyIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 4h14v10a7 7 0 01-14 0V4z" />
      <path d="M7 8H4a3 3 0 003 3h.5M21 8h3a3 3 0 01-3 3h-.5" />
      <path d="M14 21v4M10 25h8" />
    </svg>
  );
}

export function MapPinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14 2a8 8 0 018 8c0 6-8 16-8 16S6 16 6 10a8 8 0 018-8z" />
      <circle cx="14" cy="10" r="3" />
    </svg>
  );
}

export function BoltIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 2L6 16h10l-4 10L26 12H16L16 2z" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14 2l10 4v8c0 7-10 12-10 12S4 21 4 14V6l10-4z" />
      <path d="M9 14l3 3 7-7" />
    </svg>
  );
}

export function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className}>
      <path d="M10 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.4l-4.8 2.5.9-5.4L2.2 7.7l5.4-.8L10 2z" />
    </svg>
  );
}

export function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className}>
      <path d="M5 28V16c0-6 4-10 12-12l2 4c-5 1.5-7 4-7 8h6v12H5zM23 28V16c0-6 4-10 12-12l2 4c-5 1.5-7 4-7 8h6v12H23z" />
    </svg>
  );
}

export function VerifiedIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <circle cx="8" cy="8" r="8" fill="#3ddb7a" />
      <path
        d="M4.5 8l2.5 2.5 4.5-5"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LightTowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="16" width="22" height="12" rx="2" />
      <path d="M24 20h8l2 5v3H30" />
      <circle cx="8" cy="31" r="3" />
      <circle cx="18" cy="31" r="3" />
      <circle cx="30" cy="31" r="3" />
      <path d="M13 16V10h8" />
    </svg>
  );
}

export function HeavyTowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="14" width="18" height="14" rx="2" />
      <path d="M20 18h6l6 5v5h-4" />
      <rect x="2" y="9" width="10" height="5" rx="1" />
      <circle cx="7" cy="31" r="3" />
      <circle cx="17" cy="31" r="3" />
      <circle cx="30" cy="31" r="3" />
    </svg>
  );
}

export function ParkingIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="30" height="30" rx="6" />
      <path d="M13 10v16M13 10h7a5 5 0 010 10h-7" />
      <line x1="5" y1="5" x2="31" y2="31" />
    </svg>
  );
}

export function LockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="7" y="17" width="22" height="16" rx="3" />
      <path d="M12 17v-4a6 6 0 0112 0v4" />
      <circle cx="18" cy="25" r="2" />
      <line x1="18" y1="27" x2="18" y2="30" />
    </svg>
  );
}

export function BatteryIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4" y="14" width="24" height="14" rx="2" />
      <path d="M28 19h2a2 2 0 012 2v2a2 2 0 01-2 2h-2" />
      <path d="M13 10v4M21 10v4" />
      <path d="M14 24l4-6v3l4-5" />
    </svg>
  );
}

export function KeyIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="14" cy="16" r="8" />
      <circle cx="14" cy="16" r="3" />
      <path d="M21 22l10 10M30 26l-3 3M33 29l-3 3" />
    </svg>
  );
}

export function TireIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="18" cy="22" r="12" />
      <circle cx="18" cy="22" r="5" />
      <path d="M6 10l4 5M9 4l1.5 6M2 17l6 2M4 25l5-2" />
    </svg>
  );
}

export function FuelIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 32V10a2 2 0 012-2h12a2 2 0 012 2v16h2a2 2 0 012 2v2" />
      <rect x="10" y="11" width="9" height="7" rx="1" />
      <line x1="7" y1="32" x2="23" y2="32" />
      <path d="M29 10l2 4" />
    </svg>
  );
}

export function RoadIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 6v24" strokeDasharray="3 3" />
      <path d="M6 32c3-9 3-17 0-26M30 32c-3-9-3-17 0-26" />
      <line x1="10" y1="6" x2="26" y2="6" />
      <line x1="8" y1="32" x2="28" y2="32" />
    </svg>
  );
}

export function SirenIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M10 28a9 9 0 1116 0H10z" />
      <line x1="18" y1="19" x2="18" y2="15" />
      <path d="M7 22c1-6 5-10 8-12M29 22c-1-6-5-10-8-12" />
      <line x1="10" y1="28" x2="26" y2="28" />
      <rect x="14" y="31" width="8" height="3" rx="1" />
    </svg>
  );
}
