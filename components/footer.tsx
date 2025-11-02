export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Brand Section - Larger */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-bold gradient-text mb-3">EliteMinds</h3>
            <p className="text-foreground/60 text-sm leading-relaxed mb-4">
              Showcasing exceptional talent from FAST University. Five outstanding individuals pushing boundaries in entrepreneurship, business leadership, AI/ML, animation, and full-stack development.
            </p>
            <div className="flex gap-2 text-xs text-foreground/50">
              <span className="px-2 py-1 bg-primary/10 rounded">Innovation</span>
              <span className="px-2 py-1 bg-primary/10 rounded">Excellence</span>
              <span className="px-2 py-1 bg-primary/10 rounded">Collaboration</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li>
                <a href="/" className="hover:text-primary transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-primary transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Our Team
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="font-semibold mb-4 text-foreground">Get In Touch</h4>
            <div className="space-y-3 text-sm text-foreground/60">
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@eliteminds.com</span>
              </p>
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>FAST University, Pakistan</span>
              </p>
              <p className="leading-relaxed mt-4">
                Interested in collaboration or want to know more? Feel free to reach out!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-6 text-center text-sm text-foreground/60 space-y-2">
          <p className="flex items-center justify-center gap-2">
            Made with <span className="text-red-500">❤️</span> by FASTians
          </p>
          <p>
            © 2025 EliteMinds Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
