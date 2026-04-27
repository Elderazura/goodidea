// Stub — replace with the real animated SVG/Lottie implementation
interface AnimatedLogoProps {
  className?: string
}

export default function AnimatedLogo({ className }: AnimatedLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 176 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Goodidea"
    >
      <text
        x="0"
        y="30"
        fontFamily="sans-serif"
        fontWeight="700"
        fontSize="28"
        fill="#111f2a"
        letterSpacing="-0.5"
      >
        GOODIDEA
      </text>
    </svg>
  )
}
