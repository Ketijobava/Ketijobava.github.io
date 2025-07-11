
document.addEventListener('DOMContentLoaded', () => {

    const skillsData = {
        subjectTutorials: {
            html: {
                sections: [
                    {
                        heading: "What is HTML?",
                        paragraphs: [
                            "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
                            "Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document."
                        ]
                    },
                    {
                        heading: "Basic Document Structure",
                        paragraphs: [
                            "Every HTML document follows a basic structure:",
                            "1. `<!DOCTYPE html>`: Declaration defines this document to be an HTML5 document.",
                            "2. `<html>`: The root element of an HTML page.",
                            "3. `<head>`: Contains meta-information about the HTML document (e.g., character set, title, links to CSS).",
                            "4. `<body>`: Contains the visible page content."
                        ],
                        list: [
                            "Semantic Tags: Use elements like `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` for better structure and accessibility.",
                            "Attributes: Provide additional information about elements (e.g., `href` for links, `src` for images, `alt` for accessibility)."
                        ]
                    }
                ]
            },
            css: {
                sections: [
                    {
                        heading: "Introduction to CSS",
                        paragraphs: [
                            "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
                            "CSS saves a lot of work. It can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files."
                        ]
                    },
                    {
                        heading: "Selectors & Properties",
                        paragraphs: [
                            "CSS rules consist of a selector and a declaration block. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons, each including a CSS property and a value.",
                            "Common selectors include: element selectors (e.g., `p`), ID selectors (`#myId`), class selectors (`.myClass`), and attribute selectors."
                        ],
                        list: [
                            "Box Model: Every element is a box with content, padding, border, and margin.",
                            "Flexbox & Grid: Powerful CSS layout modules for creating complex and responsive designs.",
                            "Specificity: Determines which CSS rule applies if multiple rules target the same element."
                        ]
                    }
                ]
            },
            csharp: {
                sections: [
                    {
                        heading: "Introduction to C#",
                        paragraphs: [
                            "C# (pronounced C-sharp) is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in the .NET ecosystem.",
                            "C# has its roots in the C family of languages and will be familiar to C, C++, Java, and JavaScript programmers. It's designed to be a simple, modern, general-purpose, object-oriented programming language."
                        ]
                    },
                    {
                        heading: "Object-Oriented Programming (OOP)",
                        paragraphs: [
                            "C# is a powerful, object-oriented language. OOP is a programming paradigm based on the concept of 'objects', which can contain data and code. The main principles of OOP are:",
                            "1. Encapsulation: Bundling data and methods that operate on the data within a single unit (class).",
                            "2. Inheritance: Classes can inherit properties and methods from other classes.",
                            "3. Polymorphism: Objects of different classes can be treated as objects of a common type.",
                            "4. Abstraction: Hiding complex implementation details and showing only the necessary features."
                        ],
                        list: [
                            ".NET Framework / .NET Core: The runtime environment and class library that C# applications run on.",
                            "LINQ (Language Integrated Query): A powerful feature for querying data from various sources using a SQL-like syntax directly within C# code."
                        ]
                    }
                ]
            },
            unity: {
                sections: [
                    {
                        heading: "Understanding Unity",
                        paragraphs: [
                            "Unity is a powerful cross-platform game engine developed by Unity Technologies. It's used to create 2D and 3D games, simulations, and other interactive experiences for various platforms, including PC, consoles, mobile devices, and web browsers.",
                            "Unity is known for its user-friendly interface, robust asset store, and active community, making it a popular choice for both indie developers and large studios."
                        ]
                    },
                    {
                        heading: "Key Concepts: GameObjects & Components",
                        paragraphs: [
                            "In Unity, almost everything in your game is a **GameObject**. A GameObject is a container that doesn't do much on its own. Its functionality is defined by **Components** that are attached to it.",
                            "Components are reusable modules that provide specific behaviors (e.g., a `Transform` component for position/rotation/scale, a `Mesh Renderer` for visuals, a `Collider` for physics, or custom C# scripts for game logic). This modular approach allows for flexible and efficient game development."
                        ],
                        list: [
                            "Scenes: Individual levels or screens in your game.",
                            "Prefabs: Reusable GameObjects that can be instantiated multiple times in a scene.",
                            "Asset Store: A marketplace for 3D models, textures, scripts, and other game assets."
                        ]
                    }
                ]
            },
            python: {
                sections: [
                    {
                        heading: "Why Python?",
                        paragraphs: [
                            "Python is known for its simplicity and readability, making it an excellent language for beginners. It's widely used in web development (Django, Flask), data science, machine learning, AI, automation, and more.",
                            "Its extensive standard library and vast ecosystem of third-party libraries make it incredibly versatile for almost any task."
                        ]
                    },
                    {
                        heading: "Basic Concepts",
                        paragraphs: [
                            "Python uses indentation to define code blocks, unlike curly braces in many other languages. Variables are dynamically typed, and common data structures include lists, tuples, dictionaries, and sets.",
                            "You can write functions, use loops (for, while), conditional statements (if/elif/else), and work with files easily."
                        ],
                        list: [
                            "Pip: Python's package installer for managing external libraries.",
                            "Virtual Environments: Create isolated environments for Python projects to manage dependencies.",
                            "Object-Oriented Programming (OOP): Python supports OOP principles with classes and objects."
                        ]
                    }
                ]
            },
            sql: {
                sections: [
                    {
                        heading: "What is SQL?",
                        paragraphs: [
                            "SQL (Structured Query Language) is the standard language for relational database management systems. It's used for storing, managing, and retrieving data.",
                            "Key operations include querying data (SELECT), inserting new records (INSERT), updating existing records (UPDATE), and deleting records (DELETE)."
                        ]
                    },
                    {
                        heading: "Common Commands",
                        paragraphs: [
                            "Mastering SQL involves understanding various commands for data definition (DDL) and data manipulation (DML).",
                            "DDL commands like `CREATE TABLE` and `ALTER TABLE` define the database structure. DML commands like `SELECT`, `INSERT`, `UPDATE`, and `DELETE` interact with the data."
                        ],
                        list: [
                            "JOINs: Combine rows from two or more tables based on a related column between them.",
                            "WHERE Clause: Filter records based on specified conditions.",
                            "GROUP BY: Groups rows that have the same values in specified columns into a summary row."
                        ]
                    }
                ]
            }
        }
    };

    // --- element selections ---
    const burgerMenu = document.querySelector('.burger-menu');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    // --- 1  burger menu functionality for mobile ---
    if (burgerMenu && mainNav) {
        burgerMenu.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            burgerMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    burgerMenu.classList.remove('active');
                }
            });
        });
    }

    // --- 2 dynamic tutorial content loading ---

    const loadTutorialContent = (subjectId) => {
        const tutorialContainer = document.getElementById(`${subjectId}-tutorial-content`);
        const tutorialData = skillsData.subjectTutorials[subjectId];

        if (!tutorialContainer || !tutorialData) {
            console.error(`Could not find tutorial container or data for ${subjectId}`);
            return;
        }

        let contentHtml = '';
        if (tutorialData.sections && Array.isArray(tutorialData.sections)) {
            tutorialData.sections.forEach(section => {
                contentHtml += `<h4>${section.heading}</h4>`;
                if (section.paragraphs && Array.isArray(section.paragraphs)) {
                    section.paragraphs.forEach(p => {
                        contentHtml += `<p>${p}</p>`;
                    });
                }
                if (section.list && Array.isArray(section.list)) {
                    contentHtml += '<ul>';
                    section.list.forEach(item => {
                        contentHtml += `<li>${item}</li>`;
                    });
                    contentHtml += '</ul>';
                }
            });
        } else {
             console.error(`ERROR: "${subjectId}" tutorial data does not have a valid 'sections' array.`);
        }
        tutorialContainer.innerHTML = contentHtml;
    };

    // loading tutorials
    loadTutorialContent('html');
    loadTutorialContent('css');
    loadTutorialContent('csharp');
    loadTutorialContent('unity');
    loadTutorialContent('python');
    loadTutorialContent('sql');


    // --- 3  header on scroll ---
    const mainHeader = document.querySelector('.main-header');
    if (mainHeader) {
        const headerHeight = mainHeader.offsetHeight;

        const observerOptions = {
            root: null,
            rootMargin: `-${headerHeight}px 0px 0px 0px`,
            threshold: 0
        };

        const headerObserver = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                mainHeader.classList.add('sticky');
            } else {
                mainHeader.classList.remove('sticky');
            }
        }, observerOptions);

        headerObserver.observe(mainHeader);
    }

    // --- 4 highlight active navigation link on scroll ---
    const sections = document.querySelectorAll('main section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                const activeLink = document.querySelector(`.nav-list a[href="#${currentId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // middle of the section is in the viewport
        threshold: 0 
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const setInitialActiveLink = () => {
        let found = false;
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
                navLinks.forEach(link => link.classList.remove('active'));
                const targetLink = document.querySelector(`.nav-list a[href="#${section.id}"]`);
                if (targetLink) {
                    targetLink.classList.add('active');
                    found = true;
                    break;
                }
            }
        }
        if (!found && window.scrollY < sections[0].offsetHeight / 2) {
             const introLink = document.querySelector('.nav-list a[href="#intro-floor"]');
             if (introLink) {
                 introLink.classList.add('active');
             }
        }
    };

    setTimeout(setInitialActiveLink, 100);

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(setInitialActiveLink, 50);
    });
});
