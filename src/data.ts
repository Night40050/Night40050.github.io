export const translations = {
    en: {
        nav: {
            about: "About",
            architecture: "Architecture",
            systems: "Systems",
            contact: "Contact",
            resume: "Resume PDF"
        },
        hero: {
            badge: "Available for New Operations",
            title1: "Full Stack Developer",
            title2: "Automation & AI Systems",
            subtitle: "I engineer end-to-end platforms, AI-enhanced workflows, and event-driven automation systems that solve complex business bottlenecks.",
            btnPrimary: "View Engineered Systems",
            btnSecondary: "Discuss Architecture"
        },
        techStack: {
            title: "Technology Stack",
            subtitle: "Languages, orchestrators, and databases I use to engineer scalable systems."
        },
        businessBanner: {
            title: "Automate Your Business Operations",
            subtitle: "Discover my dedicated agency for business automation. We build custom agents and AI workflows to scale your sales and operations predictably.",
            features: ["Next.js (TypeScript)", "FastAPI Core", "Supabase DB", "n8n AI Orchestration"],
            whatsappBtn: "Try the AI & Book a Call"
        },
        expertise: {
            title: "Domain Expertise",
            ai: {
                title: "AI Integration & LLMs",
                desc: "Implementing structured prompt engineering pipelines wrapped around LLMs. Building multi-model support logic for cost-efficiency."
            },
            events: {
                title: "Event Orchestration",
                desc: "Designing decoupled systems using n8n and Webhooks to map complex backend operational logic, mitigating manual workflows."
            },
            stack: {
                title: "Extensible Full Stack",
                desc: "Developing robust APIs with FastAPI/Spring Boot and persisting contextual state in PostgreSQL and Supabase. Building real-time React UI layers."
            }
        },
        projectsTitle: "Engineered Systems",
        labels: {
            architecture: "System Architecture",
            backendRepo: "Backend Repo",
            frontendRepo: "Frontend Repo",
            liveSystem: "Live System"
        },
        leadership: {
            title: "Technical Leadership & Infrastructure",
            speaker: {
                role: "Guest Speaker — Tech Conference",
                location: "Tecnológico Nacional de México (Mérida)",
                title: "Intelligent Automation and API Orchestration with n8n & AI",
                desc: "During my academic exchange semester in Mexico, I was invited as a guest speaker to present advanced architectural patterns.",
                bullets: [
                    "Explained event-driven architectures and API integration via webhooks.",
                    "Showcased real productive system diagrams and automated prompt classification using LLMs.",
                    "Demonstrated transitioning from manual processes to multi-stage automated flows.",
                    "Presented real-world case studies: NutriChat (Flask + n8n + Gemini + Supabase) and Support Copilot (FastAPI + LangChain + React)."
                ],
                tags: ["Structured Prompts", "Deterministic Outputs", "Decoupled Architecture", "End-to-End Automation"]
            },
            sysadmin: {
                role: "Head of Systems & Infrastructure",
                company: "Productos Agrícolas Agua Clara (Dec 2024 – Feb 2025)",
                desc: "Led the technical operations and IT infrastructure, taking full responsibility for system stability and proactive security measures.",
                bullets: [
                    "Administered Windows Server 2012 R2 and managed Active Directory policies.",
                    "Configured advanced firewall rules and conducted internal security audits.",
                    "Optimized IT infrastructure, significantly reducing operational incidents.",
                    "Applied systems thinking to a real-world production environment with autonomous technological management."
                ]
            },
            intern: {
                role: "IT Systems Technician",
                company: "Altacol Norventas S.A.S (Sep 2019 – Jul 2020)",
                desc: "Built a solid foundation in infrastructure, technical documentation, and network architecture that laid the groundwork for my evolution into automation and systems integration.",
                bullets: [
                    "Managed core databases and structured IP addressing schemes.",
                    "Delivered structured technical support and detailed technical documentation.",
                    "Executed and reported on preventive and corrective maintenance operations."
                ]
            }
        },
        education: {
            title: "Education & Global Experience",
            systemEng: {
                title: "Systems & Computing Engineering",
                date: "9th Semester (Current) • Universidad de Cundinamarca",
                desc: "Deep focus on algorithms, data structures, software architecture, relational/NoSQL databases, and cybersecurity fundamentals. Gained extensive experience in backend/full-stack development, API design, and process automation. My Degree Project, NutriChat, is an intelligent multi-stage system that scrapes retail data, processes it via a Python Flask API, orchestrates routing with n8n, leverages the Gemini LLM for nutritional and budget logic, persists state in Supabase/PostgreSQL, and serves users via a decoupled Telegram interface."
            },
            exchange: {
                title: "Academic Exchange (International)",
                date: "2025-2 • Tecnológico Nacional de México (Mérida)",
                desc: "Participated in a multicultural academic environment where I shared knowledge regarding automation and AI. Deepened my understanding of applied language models, trained and experimented with AI-based solutions, and developed advanced architectural thinking. Perfected cloud deployments on platforms like Render and Vercel while strengthening international technical communication skills."
            },
            bootcamp: {
                title: "TalentoTech Bootcamp",
                date: "2024",
                desc: "Built functional products using systems architecture focused on Angular and Spring Boot. Applied Scrum methodologies within a real multidisciplinary team."
            },
            diplomaData: {
                title: "Data Analytics Diploma",
                date: "2023 • Pontificia Universidad Javeriana",
                desc: "Focused on data cleansing, predictive modeling, and model training. Bridged the gap between backend integration and statistical analysis/visualization."
            },
            diplomaWeb: {
                title: "Web Apps Programming Diploma",
                date: "2022 • Universidad Nacional",
                desc: "Mastered 3-tier architectures and microservices. Built scalable solutions using Spring Boot, MongoDB, Django REST, and JWT with version control and agile practices."
            }
        },
        contact: {
            title: "Let's Architect Something Scalable",
            subtitle: "Looking for a reliable systems engineer or require specialized consulting on automation architecture? Let's connect and discuss how we can engineer your next operational leap.",
            linkedin: "LinkedIn Profile",
            github: "GitHub Operations"
        },
        footer: {
            engineeredBy: "Engineered by Daniel Caicedo",
            subtitle: "Automation & AI Systems Architecture"
        },
        projects: [
            {
                title: "AI-Powered Support Co-Pilot",
                description: "An event-driven ticket classification and real-time monitoring system engineered for high-volume support environments.",
                image: "/img/support-copilot.png",
                architecture: {
                    core: "FastAPI + n8n",
                    flow: [
                        "Supabase (Ticket Trigger)",
                        "n8n (Event Orchestration)",
                        "FastAPI + HuggingFace LLM",
                        "React (Real-time Websockets)"
                    ]
                },
                highlights: [
                    "Architected a decoupled system using FastAPI for core processing.",
                    "Used HuggingFace LLMs to perform advanced sentiment analysis and categorize support tickets directly within the logic flow.",
                    "Developed a responsive real-time dashboard leveraging Supabase's WebSockets."
                ],
                links: {
                    backend: "https://github.com/Night40050/support-copilot",
                    frontend: "https://github.com/Night40050/front-supported",
                    live: "https://support-copilot-owbl.onrender.com/docs"
                },
            },
            {
                title: "NutriChat — AI Nutrition Logic Engine",
                description: "My degree project: A production-grade algorithmic nutrition assistant bridging Telegram with dynamic LLM dietary generation.",
                image: "/img/telegram.png",
                architecture: {
                    core: "n8n + Gemini",
                    flow: [
                        "Telegram Bot Interface",
                        "n8n Orchestrator",
                        "Gemini (Budget/Nutrition Logic)",
                        "Supabase DB"
                    ]
                },
                highlights: [
                    "Developed as a Degree Project utilizing complex logic mapping and state persistence in Supabase.",
                    "Integrated n8n as the master orchestrator to route incoming requests from Telegram to a centralized API.",
                    "Engineered the Gemini LLM to generate highly accurate shopping lists based on a specific budget, available scraped products, and nutritional conditions."
                ],
                links: {}
            },
            {
                title: "Inventory Management System",
                description: "A robust inventory control architecture handling multi-role logic, analytics views, and critical security implementations.",
                image: "/img/SGI.png",
                architecture: {
                    core: ".NET Blazor + SQL",
                    flow: [
                        ".NET Razor / Blazor",
                        "3-Role Authentication",
                        "Microsoft SQL Server"
                    ]
                },
                highlights: [
                    "Built using .NET Blazor and Razor components, enabling dynamic administrative and statistical views.",
                    "Secured against common vulnerabilities like SQL Injection, ensuring data integrity across all 3 user roles.",
                    "Implemented deep modern analytical dashboards to track inventory metrics and movements."
                ],
                links: {}
            },
            {
                title: "Client Conversion Platform (Dental Niche)",
                description: "High-performance interactive web architecture optimized for local lead generation and visual transformations.",
                image: "/img/dental.png",
                architecture: {
                    core: "React + Vercel",
                    flow: [
                        "Interactive UI Elements",
                        "Global Edge Caching (Vercel)"
                    ]
                },
                highlights: [
                    "Engineered an interactive UI that visually demonstrates smile transformations without requiring clinical procedures.",
                    "Educates the client visually on the process of achieving a perfect smile, dramatically increasing conversion rates.",
                    "Deployed gracefully on Vercel ensuring lightning-fast load times for SEO."
                ],
                links: {
                    live: "https://odontologia-pzcfn8kei-nights-projects-86d02f69.vercel.app/"
                }
            },
            {
                title: "GreenCoin Health",
                description: "A specialized fitness web platform tracking and predicting routines for muscle gain or fat loss. The foundational predecessor to my degree project.",
                image: "/img/GreenCoin.png",
                architecture: {
                    core: ".NET Blazor",
                    flow: [
                        "Blazor Views",
                        ".NET Core Entity Framework",
                        "SQL Server Database"
                    ]
                },
                highlights: [
                    "Engineered a dual-role based system targeting precise physical goals (Fat Loss or Muscle Gain).",
                    "Served as the technical blueprint and logic predecessor for the Nutrichat Degree Project.",
                    "Built purely with .NET methodologies and a relational Microsoft SQL Server database for tracking routines."
                ],
                links: {}
            },
            {
                title: "Appointment Management System (SGC)",
                description: "Comprehensive scheduling system with role-based access control, integrated payment APIs, and strict appointment validations.",
                image: "/img/cita.png",
                architecture: {
                    core: "C# .NET + API",
                    flow: [
                        "Blazor WebAssembly",
                        ".NET Core API",
                        "SQL Server Database"
                    ]
                },
                highlights: [
                    "Configured 3 distinct authorization roles mapping to specific system capabilities.",
                    "Seamlessly integrated an external payment API interface for premium appointments.",
                    "Enforced database integrity and transaction safety using C# and SQL Server."
                ],
                links: {}
            }
        ]
    },
    es: {
        nav: {
            about: "Sobre mí",
            architecture: "Arquitectura",
            systems: "Sistemas",
            contact: "Contacto",
            resume: "Currículum PDF"
        },
        hero: {
            badge: "Disponible para Nuevas Operaciones",
            title1: "Desarrollador Full Stack",
            title2: "Ingeniero de Automatización e IA",
            subtitle: "Ingeniero plataformas de extremo a extremo, flujos de trabajo mejorados con IA y sistemas de automatización basados en eventos que resuelven cuellos de botella empresariales complejos.",
            btnPrimary: "Ver Sistemas Diseñados",
            btnSecondary: "Hablemos de Arquitectura"
        },
        techStack: {
            title: "Stack Tecnológico",
            subtitle: "Lenguajes, orquestadores y bases de datos que utilizo para diseñar sistemas escalables."
        },
        businessBanner: {
            title: "Automatiza las Operaciones de tu Negocio",
            subtitle: "Descubre mi agencia dedicada a la automatización con IA. Construimos agentes y flujos de trabajo personalizados para escalar tus ventas y operaciones de forma predecible.",
            features: ["Next.js (TypeScript)", "FastAPI Core", "Supabase DB", "Orquestación IA con n8n"],
            whatsappBtn: "Prueba la IA y Reserva una Llamada"
        },
        expertise: {
            title: "Dominio Técnico",
            ai: {
                title: "Integración de IA y LLMs",
                desc: "Implementación de pipelines estructurados de ingeniería de prompts sobre LLMs. Desarrollo de lógica de soporte multi-modelo para optimización de costos."
            },
            events: {
                title: "Orquestación de Eventos",
                desc: "Diseño de sistemas desacoplados usando n8n y Webhooks para mapear flujos operativos complejos en el backend, mitigando tareas manuales."
            },
            stack: {
                title: "Full Stack Extensible",
                desc: "Desarrollo de APIs robustas con FastAPI/Spring Boot y persistencia de estado contextual en PostgreSQL y Supabase. Interfaces en tiempo real con React."
            }
        },
        projectsTitle: "Sistemas Diseñados Recientemente",
        labels: {
            architecture: "Arquitectura del Sistema",
            backendRepo: "Repo Backend",
            frontendRepo: "Repo Frontend",
            liveSystem: "Sistema en Vivo"
        },
        leadership: {
            title: "Liderazgo Técnico e Infraestructura",
            speaker: {
                role: "Ponente Invitado — Tecnológico Nacional de México",
                location: "Mérida, México",
                title: "Automatización Inteligente y Orquestación de APIs con n8n e Inteligencia Artificial",
                desc: "Durante mi semestre de intercambio académico en México, fui invitado como ponente para presentar una conferencia técnica sobre arquitectura moderna.",
                bullets: [
                    "Expliqué la arquitectura basada en eventos y mostré integración de APIs mediante webhooks.",
                    "Diseñé y presenté diagramas reales de sistemas productivos.",
                    "Expliqué la clasificación automatizada de datos empleando modelos de lenguaje.",
                    "Mostré de forma práctica la transición de procesos manuales a flujos automatizados multi-etapa.",
                    "Presenté casos reales desarrollados: NutriChat (Flask + n8n + Gemini + Supabase + Telegram) y Support Copilot (FastAPI + LangChain + Supabase + React)."
                ],
                tags: ["Diseño de Prompts Estructurados", "Outputs Determinísticos", "Arquitectura Desacoplada", "Automatización End-to-End"]
            },
            sysadmin: {
                role: "Encargado del Área de Sistemas",
                company: "Productos Agrícolas Agua Clara (Dic 2024 – Feb 2025)",
                desc: "Gestión integral y autónoma del área tecnológica, asumiendo responsabilidad directa sobre la infraestructura operativa real.",
                bullets: [
                    "Administración de Windows Server 2012 R2 y gestión integral de Active Directory.",
                    "Configuración de reglas de firewall avanzadas y realización de auditorías de seguridad interna.",
                    "Optimización de la infraestructura TI, resultando en una reducción drástica de incidentes operativos.",
                    "Aplicación de pensamiento sistémico en un entorno productivo real para mejorar la estabilidad."
                ]
            },
            intern: {
                role: "Técnico en Sistemas",
                company: "Altacol Norventas S.A.S (Sep 2019 – Jul 2020)",
                desc: "Construcción de una base sólida en infraestructura, documentación técnica y arquitectura de red que posteriormente me permitió evolucionar hacia la automatización e integración de sistemas.",
                bullets: [
                    "Gestión de bases de datos operativas y estructuración de direccionamiento IP.",
                    "Soporte técnico estructurado y elaboración de documentación técnica detallada.",
                    "Realización de informes rigurosos sobre operaciones de mantenimiento preventivo y correctivo."
                ]
            }
        },
        education: {
            title: "Educación y Experiencia Global",
            systemEng: {
                title: "Ingeniería de Sistemas y Computación",
                date: "9° semestre (Actual) • Universidad de Cundinamarca",
                desc: "Profundización en algoritmos, estructuras de datos, arquitectura de software, bases de datos relacionales/NoSQL y fundamentos de ciberseguridad. Especialización en desarrollo backend/fullstack, diseño de APIs y automatización de procesos. Mi Proyecto de Grado, 'NutriChat', es un sistema inteligente de generación de listas de mercado basado en restricciones nutricionales que: realiza web scraping a tiendas D1, procesa datos con una API Flask en Python, orquesta flujos mediante n8n, utiliza el modelo Gemini para cálculos matemáticos presupuestales, persiste datos en Supabase/Postgres y es consumido mediante una interfaz web desacoplada en Telegram."
            },
            exchange: {
                title: "Intercambio Académico Internacional",
                date: "2025-2 • Tecnológico Nacional de México (Mérida)",
                desc: "Durante el intercambio compartí conocimientos técnicos avanzados en automatización e inteligencia artificial. Profundicé en modelos de lenguaje aplicados a entornos reales, entrené y experimenté con soluciones basadas en IA. Participar en este entorno académico multicultural me permitió desarrollar un pensamiento arquitectónico avanzado, perfeccionar mis habilidades de despliegue en la nube (Render, Vercel) y fortalecer mi capacidad de comunicación técnica a nivel internacional."
            },
            bootcamp: {
                title: "Bootcamp TalentoTech",
                date: "2024",
                desc: "Programa intensivo de arquitectura de sistemas empleando Angular y Spring Boot. Aplicación directa de metodología Scrum en un equipo real para desarrollar productos funcionales con documentación técnica."
            },
            diplomaData: {
                title: "Diplomado en Analítica de Datos",
                date: "2023 • Pontificia Universidad Javeriana",
                desc: "Enfoque en limpieza de datos complejos, modelado predictivo y entrenamiento de modelos. Integración de análisis estadístico profundo cruzado con arquitecturas backend."
            },
            diplomaWeb: {
                title: "Diplomado en Programación Web",
                date: "2022 • Universidad Nacional",
                desc: "Desarrollo profundo de arquitecturas de 3 capas y microservicios utilizando Spring Boot, Mongo y Django REST con JWT. Orientado a buenas prácticas, metodologías ágiles y control de versiones estricto."
            }
        },
        contact: {
            title: "Construyamos Algo Escalable",
            subtitle: "¿Buscas un ingeniero de sistemas confiable o requieres consultoría especializada en arquitectura de automatización? Conectemos y discutamos cómo podemos diseñar tu próximo salto operativo.",
            linkedin: "Perfil de LinkedIn",
            github: "Operaciones GitHub"
        },
        footer: {
            engineeredBy: "Diseñado por Daniel Caicedo",
            subtitle: "Arquitectura de Sistemas IA y Automatización"
        },
        projects: [
            {
                title: "Co-Piloto de Soporte con IA",
                description: "Un sistema de clasificación de tickets guiado por eventos y monitoreo en tiempo real, diseñado para entornos de soporte de alto volumen.",
                image: "/img/support-copilot.png",
                architecture: {
                    core: "FastAPI + n8n",
                    flow: [
                        "Supabase (Trigger Ticket)",
                        "n8n (Orquestación)",
                        "Lógica FastAPI + HuggingFace LLM",
                        "React (Websockets Tiempo Real)"
                    ]
                },
                highlights: [
                    "Arquitecté un sistema desacoplado usando FastAPI para el procesamiento central.",
                    "Utilicé un LLM de HuggingFace para clasificar los tickets con un sentimiento específico y mejorar el soporte.",
                    "Desarrollé un panel interactivo en tiempo real utilizando WebSockets de Supabase."
                ],
                links: {
                    backend: "https://github.com/Night40050/support-copilot",
                    frontend: "https://github.com/Night40050/front-supported",
                    live: "https://support-copilot-owbl.onrender.com/docs"
                }
            },
            {
                title: "NutriChat — Motor Lógico Nutricional IA",
                description: "Mi proyecto de grado universitario: Un asistente de nutrición algorítmica de nivel producción que enlaza Telegram con consultas y bases de datos a través de una API.",
                image: "/img/telegram.png",
                architecture: {
                    core: "n8n + Gemini",
                    flow: [
                        "Interfaz Bot de Telegram",
                        "Orquestador n8n",
                        "Gemini (Presupuesto/Nutrición)",
                        "API de Datos en Supabase"
                    ]
                },
                highlights: [
                    "Mi proyecto de grado oficial, combinando recolección de datos y procesamiento asíncrono.",
                    "Usa n8n como orquestador para procesar solicitudes entrantes de Telegram y enlazarlas a una API segura donde guardo los datos en Supabase.",
                    "En base a una lista de productos disponibles procesados desde un web-scraping, el modelo deduce y genera una lista de mercado teniendo en cuenta un presupuesto específico y parámetros nutricionales."
                ],
                links: {}
            },
            {
                title: "Sistema de Control de Inventario",
                description: "Una arquitectura robusta de control de inventarios manejando lógica multi-rol, paneles administrativos y seguridad crítica.",
                image: "/img/SGI.png",
                architecture: {
                    core: ".NET Blazor + SQL",
                    flow: [
                        "Vistas .NET Blazor / Razor",
                        "Autorización (3 Roles)",
                        "Base de Datos SQL Server"
                    ]
                },
                highlights: [
                    "Construido puramente con .NET Blazor y componentes Razor, el cual maneja 3 roles distintos y varias vistas administrativas.",
                    "Es un sistema robusto y seguro que maneja protección para ataques típicos evitando la inyección SQL clásica.",
                    "Incorpora una sección innovadora de visualización de estadísticas modernas."
                ],
                links: {}
            },
            {
                title: "Plataforma de Conversión de Clientes (Nicho Dental)",
                description: "Arquitectura web interactiva enfocada en conversión visual, demostrando procesos dentales sin necesidad de explicar la intervención física.",
                image: "/img/dental.png",
                architecture: {
                    core: "React + Interactividad",
                    flow: [
                        "Elementos de UI Interactivos",
                        "Caché Global Edge (Vercel)"
                    ]
                },
                highlights: [
                    "Ingeniería que utiliza tecnología gráfica para hacerla más interactiva, visualizando la transformación de los dientes sin hablar de un procedimiento odontológico físico.",
                    "Muestra paso a paso el proceso de pre-visualización para lograr una sonrisa hermosa de forma estética.",
                    "Construcción responsiva con altas métricas de conversión."
                ],
                links: {
                    live: "https://odontologia-pzcfn8kei-nights-projects-86d02f69.vercel.app/"
                }
            },
            {
                title: "GreenCoin Health",
                description: "Plataforma web dinámica orientada a la salud, siendo el proyecto predecesor de mi tesis de grado.",
                image: "/img/GreenCoin.png",
                architecture: {
                    core: ".NET + SQL Server",
                    flow: [
                        "Vistas Blazor",
                        "Lógica Dual (2 Roles)",
                        "Microsoft SQL Server"
                    ]
                },
                highlights: [
                    "Plataforma web que recomienda rutinas de entrenamiento precisas según si el usuario ingresa un objetivo: pérdida de grasa corporal o aumento de masa muscular.",
                    "Sirvió íntegramente como el predecesor conceptual para mi posterior proyecto de grado 'Nutrichat'.",
                    "Realizado con arquitectura pura en .NET, base de datos en SQL server y renderizado responsivo de vistas con Blazor manejando un límite de 2 roles."
                ],
                links: {}
            },
            {
                title: "Sistema de Gestión de Citas (SGC)",
                description: "Sistema de reservas con control de acceso por roles, pasarela de pago y algoritmos de validación de disponibilidad.",
                image: "/img/cita.png",
                architecture: {
                    core: "C# .NET + API",
                    flow: [
                        "Blazor WebAssembly",
                        "API .NET Core",
                        "Base de Datos SQL Server"
                    ]
                },
                highlights: [
                    "Configuración de 3 roles de autorización mapeados a capacidades del sistema.",
                    "Integración fluida con API externa de pagos para reservas seguras.",
                    "Manejo de integridad referencial y seguridad de transacciones mediante C#."
                ],
                links: {}
            }
        ]
    }
};
