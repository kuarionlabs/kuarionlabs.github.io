interface LogoProps {
  className?: string;
  /** Cor do K. O ponto é sempre laranja. */
  color?: string;
}

/** Símbolo da Kuarion Labs: K em pé com o sol. */
export function Logo({ className, color = "currentColor" }: LogoProps) {
  return (
    <svg className={className} viewBox="22 18 90 92" aria-hidden="true">
      <g
        fill={color}
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
        transform="translate(-7 0)"
      >
        <rect x="26" y="22" width="18" height="84" />
        <polygon points="51,60 77,60 108,24 86,24" />
        <polygon points="51,68 77,68 108,104 86,104" />
      </g>
      <circle cx="90" cy="64" r="10" fill="#E8821A" />
    </svg>
  );
}
