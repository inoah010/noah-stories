import { ArrowDown, ArrowUpRight, ChevronDown, Mail, Sparkles } from 'lucide-react'
import './App.css'

const resumeUrl = `${import.meta.env.BASE_URL}Gautham-Mangaleshwaran-Resume.pdf`
const milestones = [
  ['School', 'Learning to belong.'], ['College', 'Learning about the world.'], ['PGDM', 'Learning to challenge myself.'], ['Corporate life', 'Learning discipline and communication.'], ['Creative work', 'Learning to turn ideas into experiences.'], ['Speaking', 'Learning to turn experience into a message.'],
]
const strengths = [
  ['Creative direction', 'Ideas and creative directions that give brands, stories and experiences a clear identity.'],
  ['Storytelling', 'Clear, human narratives that help people understand, remember and connect.'],
  ['Oratory', 'A considered voice, a meaningful pause and a moment of genuine connection.'],
]

function App() {
  return <div className="site-shell">
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Gautham Mangaleshwaran home"><span>GM</span><small>GAUTHAM MANGALESHWARAN C</small></a>
      <nav aria-label="Primary navigation"><a href="#story">Story</a><a href="#work">Work</a><a href="#speaking">Speaking</a><a href="#contact">Contact</a></nav>
      <a className="header-contact" href="mailto:gautham010off@gmail.com">Let&apos;s talk <ArrowUpRight size={16} /></a>
    </header>
    <main id="top">
      <section className="hero section-wrap">
        <div className="hero-copy reveal"><p className="kicker"><Sparkles size={14} /> DIFFERENT PERSPECTIVE. POWERFUL VOICE.</p><h1>Gautham<br /><em>Mangaleshwaran.</em></h1><p className="hero-intro">Creative Director. Orator. Motivational speaker. A storyteller who turns perspective into purpose.</p><div className="hero-actions"><a className="button button-solid" href="#story">Discover my story <ArrowDown size={17} /></a><a className="button button-quiet" href={resumeUrl} download>Download resume <ArrowDown size={17} /></a></div></div>
        <div className="portrait-stage reveal"><div className="portrait-placeholder"><span>YOUR<br />PHOTO</span><small>Portrait space</small></div><div className="portrait-note">CREATIVE DIRECTOR<br />&amp; SPEAKER</div></div>
        <div className="hero-aside reveal"><p>I believe circumstances can shape your story, but they don&apos;t have to decide how it ends.</p><a href="#story" className="text-link">Scroll to begin <ChevronDown size={16} /></a></div>
      </section>
      <section className="manifesto section-wrap" id="story"><p className="section-label">01 / THE STORY</p><div className="manifesto-grid"><h2>This isn&apos;t just<br />a portfolio.</h2><div><p className="lead">It&apos;s a story about perspective.</p><p>What do you do when the world isn&apos;t built around you? You adapt. You learn. You question. You create. Eventually, you realise the things that once made you feel different can become the things that give you a different perspective.</p><p>My life has been shaped not by one dramatic moment, but by years of small moments that taught me how to navigate school, education, work, people and expectations on my own terms.</p></div></div></section>
      <section className="story-panel" id="work"><div className="section-wrap story-grid"><div className="story-heading"><p className="section-label">02 / THE WORK</p><h2>I create.<br />I communicate.<br /><em>I connect.</em></h2></div><div className="strength-list">{strengths.map(([title, description], index) => <article className="strength" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>
      <section className="career section-wrap"><p className="section-label">03 / THE CAREER CHAPTER</p><div className="career-grid"><div><h2>Every complex idea<br />needs a <em>human story.</em></h2><p className="lead">Strategy gave me the structure. Creativity gave me the voice.</p></div><div className="career-copy"><p>My professional journey began at HCLTech, where I worked across bid management and solutioning. I translated complex technology into stories clients could understand, developing executive narratives and supporting client workshops.</p><p>That experience became the foundation for creative work across branding, content, social media, digital experiences and business development. I don&apos;t just create content. I shape the idea behind it.</p></div></div><div className="numbers" aria-label="Professional highlights"><div><strong>2<span>+</span></strong><p>Years of professional experience</p></div><div><strong>$15M<span>+</span></strong><p>Enterprise RFx responses</p></div><div><strong>30<span>+</span></strong><p>Strategic content &amp; executive assets</p></div><div><strong>5<span>+</span></strong><p>Client engagements &amp; workshops</p></div></div></section>
      <section className="perspective" id="speaking"><div className="section-wrap perspective-grid"><div><p className="section-label">04 / A DIFFERENT WAY OF SEEING</p><h2>What dwarfism<br />gave me.</h2></div><div><p className="lead">It taught me to question the default, notice the overlooked and think from another person&apos;s point of view.</p><p>Being a person with dwarfism in India has meant experiencing both progress and barriers. It made me notice the height of a counter, the design of a stage, the accessibility of a building and the assumptions people make.</p><p>That isn&apos;t a weakness. That&apos;s perspective. And it has become useful far beyond accessibility: in the way I see brands, audiences, stories and people.</p></div></div></section>
      <section className="journey section-wrap"><p className="section-label">05 / THE JOURNEY</p><div className="timeline">{milestones.map(([title, description], index) => <article key={title} className="timeline-item"><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p></article>)}<article className="timeline-item current"><span>NOW</span><h3>Today</h3><p>Using my story to create, communicate and connect.</p></article></div></section>
      <section className="quote-panel"><div className="section-wrap quote-content"><p className="section-label">MY PHILOSOPHY</p><blockquote>&ldquo;I don&apos;t want to be an inspiration.<br /><em>I want to be useful.</em>&rdquo;</blockquote><p>I would rather someone walk away with a thought, a question, a little more confidence or the feeling: maybe I can take my next step too.</p></div></section>
      <section className="contact section-wrap" id="contact"><p className="section-label">06 / LET&apos;S TALK</p><div className="contact-grid"><div><h2>Have a story<br />worth <em>telling?</em></h2></div><div><p className="lead">Maybe it&apos;s a brand. Maybe it&apos;s an idea. Maybe it&apos;s a room full of people who need to hear something different.</p><a className="button button-solid" href="mailto:gautham010off@gmail.com"><Mail size={17} /> Get in touch</a></div></div></section>
    </main>
    <footer className="site-footer"><div className="footer-top section-wrap"><div><span className="footer-initials">GM</span><p>Gautham Mangaleshwaran C<br /><em>Still becoming.</em></p></div><div className="footer-contact"><a href="mailto:gautham010off@gmail.com">gautham010off@gmail.com</a><a href="tel:+919384116599">+91 93841 16599</a></div></div><div className="footer-bottom section-wrap"><span>Creative Director · Orator · Motivational Speaker</span><span>Different perspective. Powerful voice.</span></div></footer>
  </div>
}

export default App