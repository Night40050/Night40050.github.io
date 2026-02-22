import { useState } from 'react';
import { ProjectCard } from './components/ProjectCard';
import { Github, Linkedin, Mail, ChevronDown, MonitorSmartphone, Database, BrainCircuit, Activity, Globe, MessageCircle } from 'lucide-react';
import { translations } from './data';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

function App() {
    const [lang, setLang] = useState<'es' | 'en'>('es');
    const t = translations[lang];

    // Scroll animations for the Hero Image
    const { scrollY } = useScroll();
    const heroImageScale = useTransform(scrollY, [0, 400], [1, 0.75]);
    const heroImageOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
    const heroImageY = useTransform(scrollY, [0, 400], [0, 50]);

    const techIcons = [
        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { name: "Flask", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
        { name: ".NET", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
        { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
        { name: "Vercel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
        { name: "Render", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/render/render-original.svg" },
        { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
    ];

    return (
        <div className="min-h-screen bg-brand-900 relative">
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800/30 via-brand-900 to-brand-900 -z-10"></div>

            {/* Navigation Layer */}
            <nav className="fixed w-full z-50 bg-brand-900/80 backdrop-blur-md border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xl font-bold font-mono tracking-tighter text-white"
                    >
                        Daniel <span className="text-brand-primary">Caicedo</span>
                    </motion.span>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                        <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
                        <a href="#architecture" className="hover:text-white transition-colors">{t.nav.architecture}</a>
                        <a href="#projects" className="hover:text-white transition-colors">{t.nav.systems}</a>
                        <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
                        <a href="https://drive.google.com/file/d/10rr7XGsYWhvhiaWJJk7rJAFE3BWnGTNJ/view?usp=sharing" target="_blank" rel="noreferrer" className="text-brand-primary hover:text-blue-400 transition-colors">{t.nav.resume}</a>

                        <button
                            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                            className="flex items-center gap-2 bg-brand-800 px-3 py-1.5 rounded-full text-brand-primary hover:bg-brand-700 transition-colors border border-gray-700 ml-4 font-mono uppercase text-xs"
                        >
                            <Globe size={14} />
                            {lang}
                        </button>
                    </div>

                    {/* Mobile Lang Button */}
                    <button
                        onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                        className="md:hidden flex items-center gap-2 bg-brand-800 px-3 py-1.5 rounded-full text-brand-primary hover:bg-brand-700 transition-colors border border-gray-700 font-mono uppercase text-xs"
                    >
                        <Globe size={14} />
                        {lang}
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <AnimatePresence mode="wait">
                <motion.header
                    key={lang}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    id="about"
                    className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto min-h-[90vh] justify-center"
                >
                    {/* Main Hero Text (Left side on desktop) */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-800 border border-gray-700 text-sm text-gray-300 font-mono mb-8 animate-fade-in shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                            <Activity size={16} className="text-brand-accent" />
                            <span>{t.hero.badge}</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                            {t.hero.title1} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent leading-snug pb-2 inline-block">
                                {t.hero.title2}
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                            {t.hero.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a href="#projects" className="btn-primary w-full sm:w-auto flex justify-center items-center gap-2">
                                {t.hero.btnPrimary}
                            </a>
                            <a href="#contact" className="btn-outline w-full sm:w-auto flex justify-center items-center gap-2 bg-brand-900">
                                {t.hero.btnSecondary}
                            </a>
                        </div>
                    </div>

                    {/* Profile Image (Right side on desktop) */}
                    <motion.div
                        style={{ scale: heroImageScale, opacity: heroImageOpacity, y: heroImageY }}
                        className="w-full max-w-sm md:max-w-md flex-1 relative hidden md:block"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-brand-accent/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                        <img
                            src="https://res.cloudinary.com/dzdp53kys/image/upload/v1771783680/profile_pxn20c.jpg"
                            alt="Daniel Caicedo"
                            className="rounded-3xl shadow-[0_0_40px_rgba(59,130,246,0.2)] object-cover w-full h-[500px] border border-gray-800"
                        />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 hidden md:block"
                    >
                        <ChevronDown size={32} />
                    </motion.div>
                </motion.header>
            </AnimatePresence>

            {/* Tech Stack Selection */}
            <section className="border-t border-gray-800 bg-brand-900/50 py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">{t.techStack.title}</h3>
                        <p className="text-gray-400 text-sm mb-10">{t.techStack.subtitle}</p>

                        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                            {techIcons.map((tech, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                                >
                                    <img src={tech.src} alt={tech.name} className="w-12 h-12 md:w-14 md:h-14" />
                                    <span className="text-xs font-mono text-gray-400">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Domain Expertise */}
            <section id="architecture" className="bg-brand-800/50 border-y border-gray-800">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: <BrainCircuit className="text-brand-accent mb-6" size={40} />, t: t.expertise.ai },
                            { icon: <Activity className="text-brand-primary mb-6" size={40} />, t: t.expertise.events },
                            { icon: <Database className="text-blue-400 mb-6" size={40} />, t: t.expertise.stack }
                        ].map((domain, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-8 rounded-2xl bg-brand-900 border border-gray-800 shadow-xl hover:-translate-y-2 hover:border-brand-primary/40 transition-all duration-300"
                            >
                                {domain.icon}
                                <h3 className="text-xl font-bold text-white mb-4">{domain.t.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {domain.t.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Systems & Architecture */}
            <section id="projects" className="section-container pb-10">
                <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    {t.projectsTitle}
                </motion.h2>

                {/* Business Banner inside Projects Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 mb-16"
                >
                    <div className="bg-gradient-to-br from-brand-800 to-brand-900 border border-brand-primary/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="p-10 md:p-14 md:w-1/2 flex flex-col justify-center z-10">
                            <a href="https://iaparatunegocio.net" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-xs font-mono text-brand-primary mb-6 w-fit hover:bg-brand-primary/30 transition-colors">
                                <Globe size={14} />
                                iaparatunegocio.net
                            </a>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {t.businessBanner.title}
                            </h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                {t.businessBanner.subtitle}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {t.businessBanner.features.map((feat, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                                        {feat}
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://wa.me/573132884389"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-brand-accent text-brand-900 px-6 py-4 rounded-xl font-bold transition-all hover:bg-emerald-400 hover:-translate-y-1 shadow-[0_0_20px_rgba(16,185,129,0.3)] w-fit flex items-center gap-3"
                            >
                                <MessageCircle size={20} className="fill-brand-900" />
                                {t.businessBanner.whatsappBtn}
                            </a>
                        </div>

                        <div className="md:w-1/2 relative min-h-[300px] bg-brand-900 border-l border-brand-primary/20 overflow-hidden">
                            <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                            <img src="https://res.cloudinary.com/dzdp53kys/image/upload/v1771783681/service_gif_wxzhco.gif" alt="Business Automation Service" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>
                </motion.div>

                <div className="space-y-8 mt-16">
                    {t.projects.map((project, index) => (
                        <ProjectCard
                            key={`${lang}-${index}`}
                            {...project}
                            labels={t.labels}
                        />
                    ))}
                </div>
            </section>

            {/* Leadership & Experience */}
            <section className="bg-brand-800/30 border-y border-gray-800 overflow-hidden">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="section-title">{t.leadership.title}</h2>

                            {/* Guest Speaker */}
                            <div className="mt-8 border-l-2 border-brand-primary pl-6 py-2 relative group cursor-default">
                                <div className="absolute -left-1.5 top-3 w-3 h-3 bg-brand-primary rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                                <h3 className="text-xl font-bold text-white">{t.leadership.speaker.role}</h3>
                                <p className="text-brand-primary font-mono text-sm mb-2">{t.leadership.speaker.location}</p>
                                <div className="bg-brand-900 border border-gray-800 p-4 rounded-xl mb-4">
                                    <h4 className="text-white font-semibold mb-2 leading-tight">{t.leadership.speaker.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {t.leadership.speaker.desc}
                                    </p>
                                    <ul className="list-disc pl-4 text-gray-400 text-sm space-y-2 mb-4">
                                        {t.leadership.speaker.bullets.map((bullet, idx) => (
                                            <li key={idx} className="marker:text-brand-primary">{bullet}</li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {t.leadership.speaker.tags.map((tag, idx) => (
                                            <span key={idx} className="bg-brand-800/80 text-brand-primary text-xs px-2.5 py-1 rounded-md border border-brand-primary/20">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Speaker Image Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-8">
                                    <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} src="https://res.cloudinary.com/dzdp53kys/image/upload/v1771783679/ponencia_lyjfff.jpg" alt="Conferencia Magistral" className="w-full h-48 sm:h-auto object-cover rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-gray-700 sm:row-span-2" />
                                    <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} src="https://res.cloudinary.com/dzdp53kys/image/upload/v1771783697/ponencia2_ehppmn.jpg" alt="Enseñando arquitectura n8n" className="w-full h-32 object-cover rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-gray-700" />
                                    <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} src="https://res.cloudinary.com/dzdp53kys/image/upload/v1771783680/ponencia3_lo4ice.jpg" alt="Diagramas productivos" className="w-full h-32 object-cover rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-gray-700" />
                                </div>
                            </div>

                            {/* SysAdmin */}
                            <div className="mt-8 border-l-2 border-gray-500 pl-6 py-2 relative group cursor-default">
                                <div className="absolute -left-1.5 top-3 w-3 h-3 bg-gray-500 rounded-full group-hover:scale-150 transition-transform"></div>
                                <h3 className="text-xl font-bold text-white">{t.leadership.sysadmin.role}</h3>
                                <p className="text-gray-300 font-mono text-sm mb-4">{t.leadership.sysadmin.company}</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                                    {t.leadership.sysadmin.desc}
                                </p>
                                <ul className="list-disc pl-4 text-gray-400 text-sm space-y-1">
                                    {t.leadership.sysadmin.bullets.map((bullet, idx) => (
                                        <li key={idx}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Intern */}
                            <div className="mt-8 border-l-2 border-gray-700 pl-6 py-2 relative group cursor-default">
                                <div className="absolute -left-1.5 top-3 w-3 h-3 bg-gray-700 rounded-full group-hover:scale-150 transition-transform"></div>
                                <h3 className="text-xl font-bold text-gray-200">{t.leadership.intern.role}</h3>
                                <p className="text-gray-400 font-mono text-sm mb-4">{t.leadership.intern.company}</p>
                                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                                    {t.leadership.intern.desc}
                                </p>
                                <ul className="list-disc pl-4 text-gray-500 text-sm space-y-1">
                                    {t.leadership.intern.bullets.map((bullet, idx) => (
                                        <li key={idx}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="section-title">{t.education.title}</h2>
                            <div className="space-y-6 mt-8">

                                {/* Systems Engineering */}
                                <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-brand-900 border border-brand-primary/30 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.1)] relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-primary/20 transition-all"></div>
                                    <h3 className="font-bold text-white text-lg">{t.education.systemEng.title}</h3>
                                    <p className="text-brand-primary text-sm mb-4">{t.education.systemEng.date}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">{t.education.systemEng.desc}</p>
                                </motion.div>

                                {/* International Exchange */}
                                <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-brand-900 border border-brand-accent/30 rounded-xl relative overflow-hidden group">
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 group-hover:bg-brand-accent/20 transition-all"></div>
                                    <h3 className="font-bold text-white text-lg">{t.education.exchange.title}</h3>
                                    <p className="text-brand-accent text-sm mb-4">{t.education.exchange.date}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{t.education.exchange.desc}</p>

                                    {/* Exchange Centered Image */}
                                    <div className="w-full flex justify-center">
                                        <motion.img
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ duration: 0.3 }}
                                            src="https://res.cloudinary.com/dzdp53kys/image/upload/v1771783680/intercambio_nh7fow.jpg"
                                            alt="Intercambio Internacional"
                                            className="w-full max-w-sm rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.5)] border border-gray-700 object-cover"
                                        />
                                    </div>
                                </motion.div>

                                {/* Bootcamp */}
                                <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-brand-800 border border-gray-700 rounded-xl hover:border-gray-500 transition-colors">
                                    <h3 className="font-bold text-white">{t.education.bootcamp.title}</h3>
                                    <p className="text-gray-400 text-sm mb-2 font-mono">{t.education.bootcamp.date}</p>
                                    <p className="text-gray-400 text-sm">{t.education.bootcamp.desc}</p>
                                </motion.div>

                                {/* Data Diploma */}
                                <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-brand-800 border border-gray-700 rounded-xl hover:border-gray-500 transition-colors">
                                    <h3 className="font-bold text-white">{t.education.diplomaData.title}</h3>
                                    <p className="text-gray-400 text-sm mb-2 font-mono">{t.education.diplomaData.date}</p>
                                    <p className="text-gray-400 text-sm">{t.education.diplomaData.desc}</p>
                                </motion.div>

                                {/* Web Diploma */}
                                <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-brand-800 border border-gray-700 rounded-xl hover:border-gray-500 transition-colors">
                                    <h3 className="font-bold text-white">{t.education.diplomaWeb.title}</h3>
                                    <p className="text-gray-400 text-sm mb-2 font-mono">{t.education.diplomaWeb.date}</p>
                                    <p className="text-gray-400 text-sm">{t.education.diplomaWeb.desc}</p>
                                </motion.div>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section-container text-center max-w-3xl overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.contact.title}</h2>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                        {t.contact.subtitle}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <motion.a whileHover={{ y: -5 }} href="mailto:sissegda@outlook.com" className="flex items-center gap-3 bg-brand-800 px-6 py-4 rounded-xl hover:bg-brand-700 transition-colors border border-gray-700 hover:border-brand-primary shadow-lg group">
                            <Mail className="text-brand-primary group-hover:scale-110 transition-transform" />
                            <span className="font-medium text-white">sissegda@outlook.com</span>
                        </motion.a>
                        <motion.a whileHover={{ y: -5 }} href="https://www.linkedin.com/in/daniel-caicedo-castillo/" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-brand-800 px-6 py-4 rounded-xl hover:bg-brand-700 transition-colors border border-gray-700 hover:border-brand-primary shadow-lg group">
                            <Linkedin className="text-brand-primary group-hover:scale-110 transition-transform" />
                            <span className="font-medium text-white">{t.contact.linkedin}</span>
                        </motion.a>
                        <motion.a whileHover={{ y: -5 }} href="https://github.com/Night40050" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-brand-800 px-6 py-4 rounded-xl hover:bg-brand-700 transition-colors border border-gray-700 hover:border-brand-primary shadow-lg group">
                            <Github className="text-brand-primary group-hover:scale-110 transition-transform" />
                            <span className="font-medium text-white">{t.contact.github}</span>
                        </motion.a>
                    </div>
                </motion.div>
            </section>

            <footer className="py-8 border-t border-gray-800 text-center text-sm text-gray-500 bg-brand-900">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <MonitorSmartphone size={16} /> {t.footer.engineeredBy}
                </div>
                <p>{t.footer.subtitle}</p>
            </footer>
        </div>
    );
}

export default App;
