interface OsbaLogoProps {
  size?: number;
  color?: string;
}

export function OsbaLogo({ size = 60, color = "#1d3461" }: OsbaLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bintang bulan sabit di atas */}
      <path
        d="M50 4 C44 4 39 9 39 15 C39 21 44 26 50 26 C44 26 40 22 40 17 C40 12 44 8 50 8 C53 8 56 9 58 11 C56 7 53 4 50 4 Z"
        fill={color}
        opacity="0.7"
      />
      <circle cx="55" cy="13" r="2" fill={color} opacity="0.7" />

      {/* Minaret kiri */}
      <rect x="10" y="42" width="8" height="35" rx="1" fill={color} />
      <path d="M10 42 L14 30 L18 42 Z" fill={color} />
      <rect x="12" y="27" width="4" height="5" rx="1" fill={color} />
      <circle cx="14" cy="26" r="2" fill={color} />

      {/* Minaret kanan */}
      <rect x="82" y="42" width="8" height="35" rx="1" fill={color} />
      <path d="M82 42 L86 30 L90 42 Z" fill={color} />
      <rect x="84" y="27" width="4" height="5" rx="1" fill={color} />
      <circle cx="86" cy="26" r="2" fill={color} />

      {/* Badan masjid tengah */}
      <rect x="22" y="55" width="56" height="22" rx="2" fill={color} />

      {/* Kubah besar tengah */}
      <path d="M28 55 Q50 28 72 55 Z" fill={color} />

      {/* Kubah kecil kiri */}
      <path d="M22 55 Q31 43 40 55 Z" fill={color} opacity="0.85" />

      {/* Kubah kecil kanan */}
      <path d="M60 55 Q69 43 78 55 Z" fill={color} opacity="0.85" />

      {/* Pintu masjid */}
      <path d="M44 77 L44 65 Q50 60 56 65 L56 77 Z" fill="white" opacity="0.9" />

      {/* Jendela kiri */}
      <rect x="28" y="63" width="8" height="8" rx="4" fill="white" opacity="0.6" />
      {/* Jendela kanan */}
      <rect x="64" y="63" width="8" height="8" rx="4" fill="white" opacity="0.6" />

      {/* Alas / podium */}
      <rect x="8" y="77" width="84" height="5" rx="1" fill={color} />

      {/* Buku terbuka di bawah */}
      <path d="M20 84 Q50 80 80 84 L80 95 Q50 91 20 95 Z" fill={color} opacity="0.5" />
      <line x1="50" y1="82" x2="50" y2="95" stroke={color} strokeWidth="1" />
    </svg>
  );
}
