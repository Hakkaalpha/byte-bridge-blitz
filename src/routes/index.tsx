import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState, type FormEvent } from 'react'
import { ArrowDown, ArrowRight, Github, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navigation, projects, skills } from '@/lib/portfolio'

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Hakka — Electronics, Code & AI' },
    { name: 'description', content: 'First-year ECE student at JECRC University exploring embedded systems, artificial intelligence, and the bridge between hardware and software.' },
    { property: 'og:title', content: 'Hakka — Electronics, Code & AI' },
    { property: 'og:description', content: 'Explore Hakka’s projects, engineering journey, skills, and achievements.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Portfolio,
})

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const [notice, setNotice] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-15% 0px -55% 0px' })
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setNotice(true)
  }
  return (
    <div className="portfolio min-h-screen">
      <nav className="site-nav" aria-label="Main navigation">
        <div className="container-width nav-inner">
          <a href="#top" className="wordmark" onClick={() => setMenuOpen(false)}>HAKKA<span className="text-primary">.alpha</span></a>
          <div className="nav-links">{navigation.map(item => <a key={item} href={`#${item.toLowerCase()}`} className={active === item.toLowerCase() ? 'active' : ''}>{item}</a>)}</div>
          <div className="nav-actions">
            <Button variant="resume" asChild><a href="/hakka-resume.pdf" download="Hakka-Resume-Draft.pdf">Resume <ArrowDown /></a></Button>
            <Button variant="ghost" size="icon" className="menu-trigger" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && <div id="mobile-navigation" className="container-width mobile-nav">{['Home', ...navigation, 'Achievements'].map(item => <a key={item} href={`#${item === 'Home' ? 'top' : item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</div>}
      </nav>
      <main>
        <section id="top" className="container-width hero">
          <div className="rise">
            <p className="eyebrow">// first-year B.Tech · ECE</p>
            <h1>I build the bridge between hardware and software.</h1>
            <p className="hero-description"><span className="text-foreground">Hakka</span> — electronics &amp; communication engineering student. Exploring embedded systems, AI, and web tools that talk to each other.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="portfolio" asChild><a href="/hakka-resume.pdf" download="Hakka-Resume-Draft.pdf">Download Resume <ArrowDown /></a></Button>
              <Button variant="subtle" asChild><a href="#projects">View projects <ArrowRight /></a></Button>
            </div>
          </div>
          <div className="profile-panel glass rise">
            <div className="profile-placeholder" role="img" aria-label="Hakka profile picture placeholder">
              <svg viewBox="0 0 120 120" aria-hidden="true" fill="none"><path d="M28 27v66M92 27v66M28 60h64" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/><path d="M12 38v-22h22M86 16h22v22M108 82v22H86M34 104H12V82" stroke="currentColor" strokeWidth="1" opacity=".35"/><circle cx="60" cy="60" r="47" stroke="currentColor" strokeDasharray="2 8" opacity=".22"/></svg>
            </div>
            <p className="profile-name">Hakka</p>
            <p className="eyebrow">embedded · AI · web</p>
            <div className="profile-stats"><div><strong>518</strong><span>All India Rank</span></div><div><strong>04</strong><span>Selected projects</span></div><div><strong>2026</strong><span>B.Tech ECE</span></div></div>
          </div>
        </section>
        <section id="projects" className="container-width section">
          <div className="mb-10 flex items-end justify-between gap-6"><div><p className="eyebrow">// selected work</p><h2 className="section-heading">Four builds, one throughline.</h2></div><p className="hidden max-w-[30ch] text-sm leading-relaxed text-muted-foreground lg:block">Curiosity across circuits, code, and the ideas that connect them.</p></div>
          <div className="projects-grid">{projects.map(project => <article key={project.name} className="project-card glass"><img src={project.image} alt={project.alt} width={944} height={704} loading="lazy"/><div className="project-copy"><h3>{project.name}</h3><p>{project.description}</p><span className="tags">{project.tags}</span></div></article>)}</div>
        </section>
        <section id="about" className="container-width section split-section">
          <div><p className="eyebrow">// about me</p><h2 className="section-heading">From silicon to software.</h2></div>
          <div><p className="body-copy">I'm a first-year Electronics and Communication Engineering student with a passion for bridging hardware and software. I'm curious about how embedded systems sense the world, how artificial intelligence makes sense of it, and what we can build when the two meet.</p><div className="mt-7 flex flex-wrap gap-2">{['Embedded systems', 'Artificial intelligence', 'Hardware–software bridge'].map(tag => <span key={tag} className="interest-tag">{tag}</span>)}</div></div>
        </section>
        <section id="skills" className="container-width section">
          <div className="mb-10"><p className="eyebrow">// toolkit</p><h2 className="section-heading">Categorized skills.</h2></div>
          <div className="skills-grid">{skills.map(group => <article key={group.name} className="skill-card glass"><h3 className="eyebrow">{group.name}</h3><ul>{group.items.map(([name, type]) => <li key={name}><span>{name}</span><span>{type}</span></li>)}</ul></article>)}</div>
        </section>
        <section id="education" className="container-width section">
          <div className="mb-10"><p className="eyebrow">// education</p><h2 className="section-heading">Where I'm learning.</h2></div>
          <div className="grid gap-5 sm:grid-cols-2"><article className="education-item glass"><p className="eyebrow">2026 — present</p><h3>B.Tech, Electronics &amp; Communication Engineering</h3><p>JECRC University</p></article><article className="education-item glass"><p className="eyebrow">Pre-college</p><h3>Class 12, Science</h3><p>Rajasthan Board of Secondary Education (RBSE)</p></article></div>
        </section>
        <section id="achievements" className="container-width section">
          <div className="achievement-band"><p className="eyebrow">// certifications &amp; achievements</p><div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2"><span className="achievement-rank">AIR 518</span><h2 className="text-xl font-medium">Unified Cyber Olympiad</h2></div><p className="mt-4 text-sm text-muted-foreground">All India Rank 518 in the Unified Cyber Olympiad.</p></div>
        </section>
        <section id="contact" className="container-width section contact-layout">
          <div><p className="eyebrow">// contact</p><h2 className="section-heading">Let's build something.</h2><p className="mt-5 max-w-[40ch] body-copy">A circuit, a curious idea, or a new collaboration. I'd love to hear about it.</p><a href="https://github.com/Hakkaalpha" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-primary"><Github size={16}/> Find me on GitHub <ArrowRight size={14}/></a></div>
          <form className="contact-form glass" onSubmit={onSubmit}><div className="grid gap-5"><label htmlFor="name">NAME<input id="name" name="name" autoComplete="name" placeholder="Your name" required maxLength={100}/></label><label htmlFor="email">EMAIL<input id="email" name="email" type="email" autoComplete="email" placeholder="you@domain.dev" required maxLength={254}/></label><label htmlFor="message">MESSAGE<textarea id="message" name="message" rows={4} placeholder="What are we making?" required maxLength={5000}/></label><Button variant="portfolio" type="submit" className="w-full">Send message <ArrowRight /></Button>{notice && <p className="form-notice" role="status">Message delivery isn't connected yet. Your message hasn't been sent. You can reach Hakka through GitHub for now.</p>}</div></form>
        </section>
      </main>
      <footer className="site-footer"><div className="container-width footer-inner"><p className="font-mono text-xs text-muted-foreground">© 2026 HAKKA · ECE · JECRC</p><Button variant="subtle" asChild><a href="https://github.com/Hakkaalpha" target="_blank" rel="noopener noreferrer"><Github/> github.com/Hakkaalpha</a></Button></div></footer>
    </div>
  )
}
