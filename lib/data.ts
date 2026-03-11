export const portfolioData = {
  name: 'Bevinda Vivian',
  title: 'Bevinda Vivian — Portfolio',
  university: 'Bandung Institute of Technology',
  email: '13523120@std.stei.itb.ac.id',
  github: 'https://github.com/bevindav',
  instagram: 'https://www.instagram.com/vivianbevinda',
  photo: '/bev.jpg',
  heroSubtitles: [
    'Cybersecurity Enthusiast',
    'Full-Stack Developer'
  ],
  about: [
    "I'm <strong>Bevinda Vivian</strong>, a third-year Computer Science student at ITB exploring the fascinating world of <strong>Cybersecurity</strong> and building innovative solutions through code.",
    "This portfolio showcases my academic projects and personal explorations in computer science, each representing a learning milestone and my commitment to continuous improvement.",
  ],
  skills: [
    { icon: 'fas fa-shield-alt', label: 'Cybersecurity' },
    { icon: 'fab fa-java', label: 'Java' },
    { icon: 'fab fa-python', label: 'Python' },
    { icon: 'fas fa-code', label: 'C / C++' },
    { icon: 'fab fa-php', label: 'PHP' },
    { icon: 'fab fa-react', label: 'React' },
    { icon: 'fas fa-arrow-up-right-dots', label: 'Next.js' },
    { icon: 'fas fa-database', label: 'PostgreSQL' },
    { icon: 'fas fa-table', label: 'SQL' },
    { icon: 'fas fa-brain', label: 'Problem Solving' },
  ],
  projects: [
    {
      title: 'x86 Operating System',
      tag: 'maknyOS',
      image: '/assets/operatingsystem.gif',
      desc: 'Custom OS built from scratch featuring EXT2 filesystem with full CRUD operations, multi-process management with round-robin scheduling, real-time clock (GMT+7), and an interactive shell with 15+ built-in commands.',
      tech: [
        { icon: 'fas fa-code', label: 'C' },
        { icon: 'fas fa-microchip', label: 'Assembly x86' },
      ],
      links: [
        { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/bevindav/os-2025-maknyos' },
      ],
    },
    {
      title: 'Quadtree Image Compression',
      image: '/assets/snoopy.gif',
      desc: 'Implementation of advanced image compression using Quadtree data structure for efficient storage and processing.',
      tech: [
        { icon: 'fab fa-python', label: 'Python' },
      ],
      links: [
        { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/bevindav/Tucil2_13523120_13523138' },
      ],
    },
    {
      title: 'Noise Source Detection',
      image: '/assets/nsd.png',
      desc: 'Advanced BFS, DFS, and A* graph traversal in Java. Features a modern Swing GUI with audio integration to detect and visualize noise sources in real-time.',
      tech: [
        { icon: 'fab fa-java', label: 'Java' },
      ],
      links: [
        { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/bevindav/noise-source-detection' },
      ],
    },
    {
      title: 'CV Applicant Tracking System',
      image: '/assets/cv.jpg',
      desc: 'Intelligent applicant tracking system designed to efficiently process, manage, and analyze resumes using modern data processing techniques.',
      tech: [
        { icon: 'fab fa-python', label: 'Python' },
      ],
      links: [
        { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/bevindav/CV-Applicant-Tracking-System' },
      ],
    },
    {
      title: 'Rush Hour Solver',
      image: '/assets/rushhour.jpg',
      desc: 'Algorithmic solution to the classic Rush Hour puzzle game using advanced search algorithms and pathfinding techniques.',
      tech: [
        { icon: 'fab fa-java', label: 'Java' },
      ],
      links: [
        { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/bevindav/Tucil3_13523120' },
      ],
    },
    {
      title: 'Little Alchemy 2 Recipe Finder',
      image: '/assets/littlealchemy2.jpg',
      desc: 'Interactive web application to discover and explore recipes in Little Alchemy 2. Built with modern web technologies.',
      tech: [
        { icon: 'fab fa-html5', label: 'HTML' },
        { icon: 'fab fa-css3-alt', label: 'CSS' },
        { icon: 'fab fa-js', label: 'JavaScript' },
      ],
      links: [
        { label: 'Live Demo', icon: 'fas fa-external-link-alt', url: 'https://new-minekrep.vercel.app/' },
        { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/naomirisaka/Tubes2_Minekrep' },
      ],
    },
    {
      title: 'Album & Music Information Retrieval',
      image: '/assets/album_music_finder_walawee.jpg',
      desc: 'A Shazam-like app identifying songs via vector algebra and MIR concepts. Features face detection through PCA for album matching and MIDI processing with windowing techniques.',
      tech: [
        { icon: 'fab fa-python', label: 'Python' },
      ],
      links: [
        { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/reletz/Algeo02-23094' },
      ],
    },
    {
      title: 'IQ Puzzler Pro Solver',
      image: '/assets/iqpuzzlerpro.jpg',
      desc: 'Automated solver for the IQ Puzzler Pro board game using backtracking and constraint satisfaction algorithms.',
      tech: [
        { icon: 'fab fa-python', label: 'Python' },
      ],
      links: [
        { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/bevindav/Tucil1_13523120' },
      ],
    },
    {
      title: 'Waste Collection Route Optimizer',
      image: '/assets/wasteroute.jpg',
      desc: 'Simulation system to determine the most efficient waste collection routes in ITB Ganesha campus using graph optimization.',
      tech: [
        { icon: 'fab fa-python', label: 'Python' },
      ],
      links: [
        { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/bevindav/Waste-Collection-Route-ITB-Ganesha' },
      ],
    },
    {
      title: 'Nest',
      tag: 'Project Management',
      image: '/assets/nest.png',
      desc: 'Comprehensive application for managing projects and tasks, helping users plan and organize their daily activities efficiently.',
      tech: [
        { icon: 'fas fa-database', label: 'Database' },
      ],
      links: [
        { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/bevindav/IF2150-2024-K02-G12-NEST' },
      ],
    },
    {
      title: 'Camel Up Board Game',
      image: '/assets/camelpop.jpg',
      desc: 'Digital implementation of the popular Camel Up board game using Prolog, featuring game logic and AI opponents.',
      tech: [
        { icon: 'fas fa-brain', label: 'Prolog' },
      ],
      links: [
        { label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/bevindav/Camel-Up-Prolog-praktikum-logika-komputasional' },
      ],
    },
  ],
};
