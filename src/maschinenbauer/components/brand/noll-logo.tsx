import Image from 'next/image'

interface NollLogoProps {
  /**
   * Pass *only* a height class (e.g. "h-10"). Width is auto so the original
   * aspect ratio is preserved — the logo can never be stretched or squished.
   */
  className?: string
  /**
   * "wordmark" = full stacked mark + "noll media" lettering (default).
   * "icon" = circular "n" mark only.
   */
  variant?: 'wordmark' | 'icon'
  priority?: boolean
}

/**
 * Real client asset. Renders the white-on-transparent version of the noll.media
 * wordmark/icon. Aspect ratio is locked by next/image's intrinsic width/height.
 * Sizing happens only on the height axis (w-auto) so the proportions are
 * always preserved per the client revision rule.
 */
export function NollLogo({
  className = 'h-10 w-auto',
  variant = 'wordmark',
  priority = false,
}: NollLogoProps) {
  if (variant === 'icon') {
    // Square icon — original is black on white. Invert into white-on-transparent
    // via CSS so it works on the dark background without touching the asset.
    return (
      <Image
        src="/noll-media-icon.jpg"
        alt="noll.media"
        width={400}
        height={400}
        priority={priority}
        className={`${className} object-contain invert mix-blend-screen`}
      />
    )
  }
  // Wordmark — already white-on-transparent (perfect for dark bg, no inversion).
  // Intrinsic ratio ≈ 1080 × 720; w-auto keeps it true.
  return (
    <Image
      src="/noll-media-wordmark-white.png"
      alt="noll.media"
      width={1080}
      height={720}
      priority={priority}
      className={`${className} object-contain`}
    />
  )
}
