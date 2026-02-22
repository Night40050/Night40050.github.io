import { Server, Database, Activity, Code2, Link as LinkIcon, ExternalLink, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectProps {
    title: string;
    description: string;
    architecture: {
        core: string;
        flow: string[];
    };
    highlights: string[];
    links: {
        github?: string;
        backend?: string;
        frontend?: string;
        live?: string;
    };
    image?: string;
    labels: {
        architecture: string;
        backendRepo: string;
        frontendRepo: string;
        liveSystem: string;
    };
}

export function ProjectCard({ title, description, architecture, highlights, links, image, labels }: ProjectProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group bg-brand-800 rounded-2xl overflow-hidden border border-gray-800 transition-all hover:border-brand-primary/50 hover:shadow-2xl hover:shadow-brand-primary/10 flex flex-col md:flex-row mb-12 h-full z-10 relative"
        >
            {/* Visual / Architecture Section */}
            <div className="w-full md:w-1/3 bg-brand-900 border-r border-gray-800 p-8 flex flex-col justify-center relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-primary/10 transition-all duration-700"></div>

                <h4 className="text-brand-accent font-mono text-sm mb-6 flex items-center gap-2">
                    <Activity size={16} /> {labels.architecture}
                </h4>

                <div className="space-y-4 relative z-10 flex-grow flex flex-col justify-center">
                    {/* Architecture nodes */}
                    {architecture.flow.map((node, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 + 0.3 }}
                            className="flex flex-col"
                        >
                            <div className="bg-brand-800 border border-gray-700 p-3 rounded-xl flex items-center gap-3 group-hover:border-gray-600 transition-colors shadow-lg">
                                <div className="bg-brand-900 p-1.5 rounded-lg text-brand-primary">
                                    {i === 0 ? <Zap size={16} /> : i === architecture.flow.length - 1 ? <Database size={16} /> : <Server size={16} />}
                                </div>
                                <span className="font-mono text-xs text-gray-300">{node}</span>
                            </div>
                            {i < architecture.flow.length - 1 && (
                                <div className="w-0.5 h-4 bg-gradient-to-b from-brand-primary/50 to-brand-accent/50 mx-auto my-1"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-2/3 flex flex-col relative overflow-hidden">
                {image && (
                    <div className="w-full h-48 md:h-64 overflow-hidden relative border-b border-gray-800">
                        <div className="absolute inset-0 bg-brand-900/40 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500"></div>
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            loading="lazy"
                        />
                    </div>
                )}
                <div className="p-8 flex flex-col flex-grow justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">{title}</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>

                        <ul className="space-y-3 mb-8">
                            {highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Code2 size={18} className="text-brand-primary shrink-0 mt-1" />
                                    <span className="text-sm text-gray-300">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-800 mt-auto">
                        {links.backend && (
                            <a href={links.backend} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-brand-900 px-4 py-2 rounded-lg border border-gray-800 hover:border-gray-600">
                                <LinkIcon size={16} /> {labels.backendRepo}
                            </a>
                        )}
                        {links.frontend && (
                            <a href={links.frontend} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-brand-900 px-4 py-2 rounded-lg border border-gray-800 hover:border-gray-600">
                                <LinkIcon size={16} /> {labels.frontendRepo}
                            </a>
                        )}
                        {links.github && (
                            <a href={links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-brand-900 px-4 py-2 rounded-lg border border-gray-800 hover:border-gray-600">
                                <LinkIcon size={16} /> GitHub Repo
                            </a>
                        )}
                        {links.live && (
                            <a href={links.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-brand-primary hover:text-blue-400 transition-colors bg-blue-500/10 px-4 py-2 rounded-lg border border-blue-500/20 hover:border-blue-500/50">
                                <ExternalLink size={16} /> {labels.liveSystem}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
