/** @type {import('next').NextConfig} */

/**
 * ============================================================================
 * SECURITY CONFIGURATION FOR QUALITY IMPACT OÜ / QA-PAAS
 * ============================================================================
 * Enterprise-grade security headers following OWASP best practices
 * Compliance: ISO 27001, SOC2 Type II, GDPR, OWASP Top 10
 * ============================================================================
 */

// ============================================================================
// CONTENT SECURITY POLICY (CSP) CONFIGURATION
// ============================================================================
// Strict CSP to prevent XSS, data injection, and unauthorized resource loading

const getCSPHeaders = () => {
  const cspDirectives = {
    // ========================================================================
    // Default Directive (Fallback)
    // ========================================================================
    // Only allow resources from the same origin
    'default-src': ["'self'"],

    // ========================================================================
    // Script Directives
    // ========================================================================
    // Strict script-src policy
    'script-src': [
      "'self'", // Same-origin scripts only
      // Analytics and monitoring (Vercel Web Vitals)
      'https://va.vercel-scripts.com',
      // Google Analytics (if enabled)
      'https://www.google-analytics.com',
      'https://googletagmanager.com',
      'https://www.googletagmanager.com',
    ],

    // ========================================================================
    // Style Directives
    // ========================================================================
    // Stylesheet loading policy
    'style-src': [
      "'self'", // Same-origin styles
      // Google Fonts
      'https://fonts.googleapis.com',
      // Unsafe-inline may be needed for CSS-in-JS solutions
      "'unsafe-inline'",
    ],

    // ========================================================================
    // Font Directives
    // ========================================================================
    // Font file loading policy
    'font-src': [
      "'self'", // Same-origin fonts
      'data:', // Data URIs for web fonts
      'https://fonts.gstatic.com', // Google Fonts
    ],

    // ========================================================================
    // Image Directives
    // ========================================================================
    // Image loading policy
    'img-src': [
      "'self'", // Same-origin images
      'data:', // Data URIs (base64 images)
      'https:', // All HTTPS images
      // Specific trusted domains
      'https://www.qa-paas.com',
      'https://cdn.qa-paas.com',
      // Cloud provider logos and assets
      'https://aws.amazon.com',
      'https://marketplace.visualstudio.com',
      'https://console.cloud.google.com',
      // CDNs
      'https://cdn.jsdelivr.net',
      'https://unpkg.com',
    ],

    // ========================================================================
    // Connect Directives (XHR, WebSocket, fetch)
    // ========================================================================
    // API and external connection policy
    'connect-src': [
      "'self'", // Same-origin requests
      // QA-PaaS API endpoints
      'https://api.qa-paas.com',
      'wss://api.qa-paas.com', // WebSocket
      // Analytics and monitoring
      'https://vitals.vercel-insights.com',
      'https://www.google-analytics.com',
      'https://googletagmanager.com',
      // Error tracking (Sentry, etc.)
      'https://*.sentry.io',
    ],

    // ========================================================================
    // Media Directives
    // ========================================================================
    // Video/audio loading policy
    'media-src': ["'self'", 'data:', 'https:'],

    // ========================================================================
    // Object Directives
    // ========================================================================
    // Flash, PDF, and other plugins
    'object-src': ["'none'"],

    // ========================================================================
    // Frame Directives
    // ========================================================================
    // Embedded frame policy (prevent clickjacking)
    'frame-ancestors': ["'none'"], // Prevent embedding in iframes
    'frame-src': [
      "'self'",
      // Allow embedding from own domain
      'https://www.qa-paas.com',
      // Marketplace embeds
      'https://aws.amazon.com',
      'https://marketplace.visualstudio.com',
      'https://console.cloud.google.com',
    ],

    // ========================================================================
    // Form Directive
    // ========================================================================
    // Form submission endpoints
    'form-action': [
      "'self'",
      // Allow forms to submit to own domain
      'https://www.qa-paas.com',
    ],

    // ========================================================================
    // Base URI Directive
    // ========================================================================
    // Prevents base tag from changing base URL
    'base-uri': ["'self'"],

    // ========================================================================
    // Manifest Directive
    // ========================================================================
    // Web app manifest
    'manifest-src': ["'self'"],

    // ========================================================================
    // Worker Directive
    // ========================================================================
    // Service workers and web workers
    'worker-src': ["'self'", 'blob:'],

    // ========================================================================
    // Child Frame Directive
    // ========================================================================
    // Child frames (similar to frame-src)
    'child-src': ["'self'"],

    // ========================================================================
    // Upgrade Insecure Requests
    // ========================================================================
    // Automatically upgrade HTTP to HTTPS
    'upgrade-insecure-requests': [],

    // ========================================================================
    // Block All Mixed Content
    // ========================================================================
    'block-all-mixed-content': [],
  };

  return Object.entries(cspDirectives)
    .filter(([, values]) => values.length > 0 || Array.isArray(values))
    .map(([key, values]) => {
      if (Array.isArray(values) && values.length === 0) {
        return key;
      }
      return `${key} ${values.join(' ')}`;
    })
    .join('; ');
};

// ============================================================================
// ADDITIONAL SECURITY HEADERS
// ============================================================================

const securityHeaders = [
  // ========================================================================
  // HSTS (HTTP Strict Transport Security)
  // ========================================================================
  // Force HTTPS connections for all future requests
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
    // max-age: 1 year (31536000 seconds)
    // includeSubDomains: Apply to all subdomains
    // preload: Allow inclusion in HSTS preload lists
  },

  // ========================================================================
  // X-Frame-Options (Clickjacking Protection)
  // ========================================================================
  // Prevent website from being framed by other sites
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },

  // ========================================================================
  // X-Content-Type-Options (MIME Sniffing Protection)
  // ========================================================================
  // Prevent browser from MIME sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },

  // ========================================================================
  // X-XSS-Protection (Reflected XSS Protection)
  // ========================================================================
  // Enable browser's XSS filter (legacy, CSP is preferred)
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },

  // ========================================================================
  // Referrer-Policy (Referrer Control)
  // ========================================================================
  // Control what referrer information is sent with requests
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },

  // ========================================================================
  // Permissions-Policy (Feature Policy)
  // ========================================================================
  // Control which browser features/APIs can be used
  {
    key: 'Permissions-Policy',
    value: [
      'accelerometer=()',
      'ambient-light-sensor=()',
      'autoplay=()',
      'battery=()',
      'camera=()',
      'cross-origin-isolated=()',
      'display-capture=()',
      'document-domain=()',
      'encrypted-media=()',
      'execution-while-not-rendered=()',
      'execution-while-out-of-viewport=()',
      'fullscreen=()',
      'geolocation=()',
      'gyroscope=()',
      'magnetometer=()',
      'microphone=()',
      'midi=()',
      'navigation-override=()',
      'payment=()',
      'picture-in-picture=()',
      'publickey-credentials-get=()',
      'sync-xhr=()',
      'usb=()',
      'vr=()',
      'xr-spatial-tracking=()',
    ].join(', '),
  },

  // ========================================================================
  // Expect-CT (Certificate Transparency)
  // ========================================================================
  // Enforce Certificate Transparency for HTTPS
  {
    key: 'Expect-CT',
    value: 'max-age=86400, enforce',
  },

  // ========================================================================
  // Content-Security-Policy
  // ========================================================================
  {
    key: 'Content-Security-Policy',
    value: getCSPHeaders(),
  },

  // ========================================================================
  // X-Permitted-Cross-Domain-Policies
  // ========================================================================
  // Control cross-domain policy file requests
  {
    key: 'X-Permitted-Cross-Domain-Policies',
    value: 'none',
  },

  // ========================================================================
  // Cross-Origin-Opener-Policy (COOP)
  // ========================================================================
  // Isolate browsing context from cross-origin documents
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },

  // ========================================================================
  // Cross-Origin-Embedder-Policy (COEP)
  // ========================================================================
  // Require CORS headers for cross-origin resources
  {
    key: 'Cross-Origin-Embedder-Policy',
    value: 'require-corp',
  },

  // ========================================================================
  // Cross-Origin-Resource-Policy (CORP)
  // ========================================================================
  // Control which origins can embed this resource
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'cross-origin',
  },

  // ========================================================================
  // X-UA-Compatible (Legacy IE Support)
  // ========================================================================
  // Force latest IE rendering engine
  {
    key: 'X-UA-Compatible',
    value: 'IE=edge',
  },
];

// ============================================================================
// NEXT.JS CONFIGURATION
// ============================================================================

const nextConfig = {
  reactStrictMode: true,
  compress: true,

  // ========================================================================
  // Disable Server-Powered Header
  // ========================================================================
  // Don't advertise that this is running Next.js
  poweredByHeader: false,

  // ========================================================================
  // Production Source Maps
  // ========================================================================
  // Disable source maps in production for security
  productionBrowserSourceMaps: false,

  // ========================================================================
  // Security Headers Configuration
  // ========================================================================
  async headers() {
    return [
      // Apply to all routes
      {
        source: '/(.*)',
        headers: securityHeaders,
      },

      // API routes specific headers
      {
        source: '/api/:path*',
        headers: [
          ...securityHeaders,
          {
            key: 'Content-Type',
            value: 'application/json',
          },
          {
            key: 'Cache-Control',
            value: 'private, no-cache, no-store, must-revalidate',
          },
        ],
      },

      // Static assets caching policy
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Security-Policy',
            value: getCSPHeaders(),
          },
        ],
      },

      // Font assets with long cache
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },

      // SVG images with security headers
      {
        source: '/:path*\\.svg',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/svg+xml',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },

  // ========================================================================
  // Redirects Configuration
  // ========================================================================
  async redirects() {
    return [
      // Marketplace redirect
      {
        source: '/marketplace',
        destination: '/marketplaces',
        permanent: true,
      },

      // Company info redirect
      {
        source: '/legal/company',
        destination: '/legal/company-info',
        permanent: false,
      },

      // Security.txt location
      {
        source: '/.well-known/security.txt',
        destination: '/security.txt',
        permanent: false,
      },
    ];
  },

  // ========================================================================
  // Rewrites Configuration
  // ========================================================================
  async rewrites() {
    return {
      beforeFiles: [
        // CSP violation reporting
        {
          source: '/api/csp-report',
          destination: '/api/security/csp-report',
        },
      ],
    };
  },

  // ========================================================================
  // Experimental Features
  // ========================================================================
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

module.exports = nextConfig;
