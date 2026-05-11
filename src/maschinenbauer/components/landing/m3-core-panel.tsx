/*
 * Reusable Maschinenbauer 3.0 core panel.
 *
 * Extracted byte-for-byte from the inline implementation that lived in
 * machine-system-visual.tsx (System Architektur section). Section 03 now
 * renders this component instead of the inline SVG — visual output is
 * identical — and the Hero re-uses the same component.
 *
 * The SVG markup is preserved from the Claude static source
 * (Maschinenbauer 3.0 BY CLAUDE/index.html lines 1297–1352), including the
 * SMIL <animateTransform> / <animate> animations on the rotating rings
 * and the breathing inner core. No JS animation needed — the SVG drives
 * its own motion.
 */

import { type CSSProperties } from 'react'
import styles from './m3-core-panel.module.css'

interface M3CorePanelProps {
  /** Optional override for the wrapper className (e.g. to add height) */
  className?: string
  /** Optional inline style on the wrapper */
  style?: CSSProperties
  /** Unique suffix for SVG <defs> id — avoids collisions when more than one
   *  panel mounts on the same page (the Hero and Section 03). */
  idSuffix?: string
}

export function M3CorePanel({
  className = '',
  style,
  idSuffix = 'panel',
}: M3CorePanelProps) {
  const gradientId = `m3-core-${idSuffix}`
  return (
    <div className={`${styles.machineCore} ${className}`} style={style}>
      <div className={styles.machineHeader}>
        <span>Maschinenbauer 3.0</span>
        <span className={styles.led}>aktiv</span>
      </div>
      <div className={styles.machineBody}>
        <svg className={styles.machineSvg} viewBox="0 0 340 320" aria-hidden="true">
          <defs>
            <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c7ff00" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#c7ff00" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="170" cy="160" r="130" fill={`url(#${gradientId})`} />
          {/* outer ring */}
          <circle
            cx="170"
            cy="160"
            r="120"
            fill="none"
            stroke="rgba(199,255,0,.25)"
            strokeDasharray="2 6"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 170 160"
              to="360 170 160"
              dur="60s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="170"
            cy="160"
            r="95"
            fill="none"
            stroke="rgba(199,255,0,.2)"
            strokeDasharray="4 4"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 170 160"
              to="0 170 160"
              dur="40s"
              repeatCount="indefinite"
            />
          </circle>
          {/* modules around core */}
          <g fontFamily="JetBrains Mono" fontSize="8" fill="#c7ff00" letterSpacing="1">
            <g>
              <rect x="140" y="40" width="60" height="22" rx="4" fill="#0a0a0a" stroke="#c7ff00" strokeOpacity="0.5" />
              <text x="170" y="55" textAnchor="middle">POSITION</text>
            </g>
            <g>
              <rect x="246" y="98" width="60" height="22" rx="4" fill="#0a0a0a" stroke="#c7ff00" strokeOpacity="0.5" />
              <text x="276" y="113" textAnchor="middle">REACH</text>
            </g>
            <g>
              <rect x="246" y="200" width="60" height="22" rx="4" fill="#0a0a0a" stroke="#c7ff00" strokeOpacity="0.5" />
              <text x="276" y="215" textAnchor="middle">FORM</text>
            </g>
            <g>
              <rect x="140" y="258" width="60" height="22" rx="4" fill="#0a0a0a" stroke="#c7ff00" strokeOpacity="0.5" />
              <text x="170" y="273" textAnchor="middle">FLOW</text>
            </g>
            <g>
              <rect x="34" y="200" width="60" height="22" rx="4" fill="#0a0a0a" stroke="#c7ff00" strokeOpacity="0.5" />
              <text x="64" y="215" textAnchor="middle">DATA</text>
            </g>
            <g>
              <rect x="34" y="98" width="60" height="22" rx="4" fill="#0a0a0a" stroke="#c7ff00" strokeOpacity="0.5" />
              <text x="64" y="113" textAnchor="middle">SIGNAL</text>
            </g>
          </g>
          {/* center */}
          <circle cx="170" cy="160" r="38" fill="#0a0a0a" stroke="#c7ff00" strokeWidth="1.5" />
          <circle cx="170" cy="160" r="26" fill="none" stroke="#c7ff00" strokeOpacity="0.6">
            <animate attributeName="r" values="26;32;26" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <text
            x="170"
            y="158"
            fontFamily="Inter Tight"
            fontWeight="700"
            fontSize="13"
            fill="#c7ff00"
            textAnchor="middle"
          >
            M3.0
          </text>
          <text
            x="170"
            y="172"
            fontFamily="JetBrains Mono"
            fontSize="6"
            fill="#a0a0a0"
            textAnchor="middle"
            letterSpacing="1"
          >
            CORE
          </text>
          {/* dotted radii */}
          <g stroke="rgba(199,255,0,.3)" strokeWidth="1" strokeDasharray="2 3" fill="none">
            <line x1="170" y1="120" x2="170" y2="62" />
            <line x1="206" y1="148" x2="246" y2="120" />
            <line x1="206" y1="172" x2="246" y2="200" />
            <line x1="170" y1="200" x2="170" y2="258" />
            <line x1="134" y1="172" x2="94" y2="200" />
            <line x1="134" y1="148" x2="94" y2="120" />
          </g>
        </svg>
      </div>
      <div className={styles.machineSteps}>
        {[
          { label: '01 Position', active: true },
          { label: '02 Reach', active: true },
          { label: '03 Form', active: false },
          { label: '04 Flow', active: false },
          { label: '05 Data', active: false },
        ].map((s) => (
          <div
            key={s.label}
            className={`${styles.machineStep} ${s.active ? styles.active : ''}`}
          >
            {s.label}
          </div>
        ))}
      </div>
    </div>
  )
}
