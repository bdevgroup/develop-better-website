const basePath = process.env.NEXT_PUBLIC_BASEPATH;
export const Socials = [
  {
    name: "Telegram",
    src: basePath + "/telegram.svg",
  },
  {
    name: "Facebook",
    src: basePath + "/facebook.svg",
  },
  {
    name: "Instagram",
    src: basePath + "/instagram.svg",
  },
  {
    name: "Whatsapp",
    src: basePath + "/whatsapp.svg",
  },
  {
    name: "Twitter",
    src: basePath + "/twitter.svg",
  },
];
export const Features = [
  {
    title: "AI",
    text: "Projets basés sur l'IA",
    src: basePath + "/icon_ai.svg",
    selected: false,
  },
  {
    title: "Croissance",
    text: "Obtenez plus de clients avec notre accompagnement",
    src: basePath + "/icon_croissance.svg",
    selected: true,
  },
  {
    title: "IT",
    text: "Développement Site Web amélioré",
    src: basePath + "/icon_it.svg",
    selected: false,
  },
  {
    title: "Qualité",
    text: "Assurance qualité",
    src: basePath + "/icon_quality.svg",
    selected: false,
  },
  {
    title: "Soutien",
    text: "Gagnez du temps et de l'argent",
    src: basePath + "/icon_soutien.svg",
    selected: false,
  },
];
export const FeaturesApropos = [
  {
    title: "Construire",
    description:
      "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
    icon: basePath + "/icon_ai.svg",
    selected: true,
  },
  {
    title: "Découvrir",
    description:
      "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
    icon: basePath + "/icon_decouvrir.svg",
    selected: false,
  },
  {
    title: "Stratégie",
    description:
      "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
    icon: basePath + "/icon_croissance.svg",
    selected: false,
  },
  {
    title: "Exécuter",
    description:
      "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
    icon: basePath + "/icon_executer.svg",
    selected: false,
  },
];

export const NavLinks = [
  {
    name: "/",
    title: "Accueil",
    link: "/",
  },
  //   {
  //     name: "/projets",
  //     title: "Projets",
  //     link: "/projets",
  //   },
  {
    name: "/services",
    title: "Services",
    link: "/services",
  },
  {
    name: "/propos",
    title: "à propos",
    link: "/propos",
  },
];

export const Projects = [
  {
    image: basePath + "/project_preview.webp",
    title:
      "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
    description: "Lorem ipsum dolor concesoeur.",
    imageOrientation: "right",
    btnText: "Voir ce projet",
    projectUrl: "/projets/projet1",
    projectNum: "1",
    lightBG: true,
  },
  {
    image: basePath + "/project_preview.webp",
    title:
      "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
    description: "Lorem ipsum dolor concesoeur.",
    imageOrientation: "left",
    btnText: "Voir ce projet",
    projectUrl: "/projets/projet1",
    projectNum: "2",
    lightBG: false,
  },
  {
    image: basePath + "/project_preview.webp",
    title:
      "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
    description: "Lorem ipsum dolor concesoeur.",
    imageOrientation: "right",
    btnText: "Voir ce projet",
    projectUrl: "/projets/projet1",
    projectNum: "3",
    lightBG: true,
  },
];

export const Services = [
  {
    icon: basePath + "/icon_it.svg",
    image: basePath + "/project_preview.webp",
    title: "Site vitrine et applications",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
    btnText: "Voir plus",
    serviceUrl: "/services/site-vitrine-et-applications",
    pageDetailContentSettings: [
      {
        componentName: "ImageTextSection",
        title: "Les avantages d'avoir un site web pour votre entreprise",
        subtitle: "Site vitrine et applications",
        description:
          "Un site vitrine peut aider votre entreprise à se démarquer en ligne et à attirer de nouveaux clients. Nous vous expliquerons les fonctionnalités essentielles d'un site vitrine efficace et comment il peut être utilisé pour présenter vos produits ou services de manière attrayante.",
        image: basePath + "/exp_bg.webp",
        imageSide: "left",
        btnText: "Découvrir notre collection de modèle près à utiliser",
        btnUrl: "/services/site-vitrine-et-applications/models",
        btnSolid: true,
      },
      {
        componentName: "FeaturesSection",
        title: "Le processus est simple et facile",
        subtitle:
          "Découvrez comment concevoir un site web vitrine en 4 étapes simples et efficaces !",
        numberdFeatures: [
          {
            icon: "/icon_decouvrir.svg",
            title: "Etape",
            description: "Planification et Conception",
          },
          {
            icon: "/icon_ai.svg",
            title: "Etape",
            description: "Développement et Construction",
          },
          {
            icon: "/icon_croissance.svg",
            title: "Etape",
            description: "Test et Révision",
          },
          {
            icon: "/icon_executer.svg",
            title: "Etape",
            description: "Mise en ligne et Promotion",
          },
        ],
      },
      {
        componentName: "ImageTextSection",
        title: "booster votre activité",
        subtitle: "Les meilleures applications pour",
        description:
          "Explorez notre sélection des meilleures applications disponibles sur le marché pour améliorer la productivité de votre entreprise. Que vous ayez besoin d'une application de gestion de projet, d'un outil de communication en équipe ou d'une solution de marketing numérique, nous vous présenterons des options fiables et performantes.",
        image: basePath + "/booster_bg.webp",
        imageSide: "right",
      },
      {
        componentName: "FAQSection",
        title: "FAQ",
        subtitle: "Questions fréquemment posées",
        faq: [
          {
            question:
              "Vous vous demandez par où commencer pour créer votre site vitrine ou votre application?",
            answer:
              "Consultez notre liste des questions fréquemment posées pour obtenir des réponses claires et concises. Ne perdez plus de temps, lancez-vous dès maintenant !",
          },
          {
            question:
              "Besoin d'aide pour construire votre site vitrine ou votre application?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Vous souhaitez développer votre site vitrine ou votre application, mais vous ne savez pas par où commencer?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Vous avez des doutes ou des interrogations sur la construction de votre site vitrine ou de votre application?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Besoin d'informations sur les sites vitrines et les applications?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
        ],
      },
    ],
  },
  {
    icon: basePath + "/icon_quality.svg",
    image: basePath + "/project_preview.webp",
    title: "Réseau sociaux",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
    btnText: "Voir plus",
    serviceUrl: "/services/service2",
    pageDetailContentSettings: [
      {
        componentName: "ImageTextSection",
        title: "Les avantages pour votre entreprise",
        subtitle: "Site vitrine et applications",
        description:
          "Découvrez comment un site vitrine peut aider votre entreprise à se démarquer en ligne et à attirer de nouveaux clients. Nous vous expliquerons les fonctionnalités essentielles d'un site vitrine efficace et comment il peut être utilisé pour présenter vos produits ou services de manière attrayante.",
        image: basePath + "/exp_bg.webp",
        imageSide: "left",
      },
      {
        componentName: "FeaturesSection",
        title: "La meilleure plateforme pour votre site vitrine",
        subtitle: "Comment choisir",
        numberdFeatures: [
          {
            icon: "/icon_ai.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            icon: "/icon_decouvrir.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            icon: "/icon_croissance.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            icon: "/icon_executer.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
        ],
      },
      {
        componentName: "ImageTextSection",
        title: "booster votre activité",
        subtitle: "Les meilleures applications pour",
        description:
          "Explorez notre sélection des meilleures applications disponibles sur le marché pour améliorer la productivité de votre entreprise. Que vous ayez besoin d'une application de gestion de projet, d'un outil de communication en équipe ou d'une solution de marketing numérique, nous vous présenterons des options fiables et performantes.",
        image: basePath + "/booster_bg.webp",
        imageSide: "right",
      },
      {
        componentName: "FAQSection",
        title: "FAQ",
        subtitle: "Questions fréquemment posées",
        faq: [
          {
            question:
              "Vous vous demandez par où commencer pour créer votre site vitrine ou votre application?",
            answer:
              "Consultez notre liste des questions fréquemment posées pour obtenir des réponses claires et concises. Ne perdez plus de temps, lancez-vous dès maintenant !",
          },
          {
            question:
              "Besoin d'aide pour construire votre site vitrine ou votre application?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Vous souhaitez développer votre site vitrine ou votre application, mais vous ne savez pas par où commencer?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Vous avez des doutes ou des interrogations sur la construction de votre site vitrine ou de votre application?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Besoin d'informations sur les sites vitrines et les applications?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
        ],
      },
    ],
  },
  {
    icon: basePath + "/icon_croissance.svg",
    image: basePath + "/project_preview.webp",
    title: "Maintenance applicative",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
    btnText: "Voir plus",
    serviceUrl: "/services/service3",
    pageDetailContentSettings: [
      {
        componentName: "ImageTextSection",
        title: "Les avantages pour votre entreprise",
        subtitle: "Site vitrine et applications",
        description:
          "Découvrez comment un site vitrine peut aider votre entreprise à se démarquer en ligne et à attirer de nouveaux clients. Nous vous expliquerons les fonctionnalités essentielles d'un site vitrine efficace et comment il peut être utilisé pour présenter vos produits ou services de manière attrayante.",
        image: basePath + "/exp_bg.webp",
        imageSide: "left",
      },
      {
        componentName: "FeaturesSection",
        title: "La meilleure plateforme pour votre site vitrine",
        subtitle: "Comment choisir",
        numberdFeatures: [
          {
            icon: "/icon_ai.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            icon: "/icon_decouvrir.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            icon: "/icon_croissance.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            icon: "/icon_executer.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
        ],
      },
      {
        componentName: "ImageTextSection",
        title: "booster votre activité",
        subtitle: "Les meilleures applications pour",
        description:
          "Explorez notre sélection des meilleures applications disponibles sur le marché pour améliorer la productivité de votre entreprise. Que vous ayez besoin d'une application de gestion de projet, d'un outil de communication en équipe ou d'une solution de marketing numérique, nous vous présenterons des options fiables et performantes.",
        image: basePath + "/booster_bg.webp",
        imageSide: "right",
      },
      {
        componentName: "FAQSection",
        title: "FAQ",
        subtitle: "Questions fréquemment posées",
        faq: [
          {
            question:
              "Vous vous demandez par où commencer pour créer votre site vitrine ou votre application?",
            answer:
              "Consultez notre liste des questions fréquemment posées pour obtenir des réponses claires et concises. Ne perdez plus de temps, lancez-vous dès maintenant !",
          },
          {
            question:
              "Besoin d'aide pour construire votre site vitrine ou votre application?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Vous souhaitez développer votre site vitrine ou votre application, mais vous ne savez pas par où commencer?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Vous avez des doutes ou des interrogations sur la construction de votre site vitrine ou de votre application?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Besoin d'informations sur les sites vitrines et les applications?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
        ],
      },
    ],
  },
  {
    icon: basePath + "/icon_ai.svg",
    image: basePath + "/project_preview.webp",
    title: "Ecommerce",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
    btnText: "Voir plus",
    serviceUrl: "/services/service1",
    pageDetailContentSettings: [
      {
        componentName: "ImageTextSection",
        title: "Les avantages pour votre entreprise",
        subtitle: "Site vitrine et applications",
        description:
          "Découvrez comment un site vitrine peut aider votre entreprise à se démarquer en ligne et à attirer de nouveaux clients. Nous vous expliquerons les fonctionnalités essentielles d'un site vitrine efficace et comment il peut être utilisé pour présenter vos produits ou services de manière attrayante.",
        image: basePath + "/exp_bg.webp",
        imageSide: "left",
      },
      {
        componentName: "FeaturesSection",
        title: "La meilleure plateforme pour votre site vitrine",
        subtitle: "Comment choisir",
        numberdFeatures: [
          {
            icon: "/icon_ai.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            icon: "/icon_decouvrir.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            icon: "/icon_croissance.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            icon: "/icon_executer.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
        ],
      },
      {
        componentName: "ImageTextSection",
        title: "booster votre activité",
        subtitle: "Les meilleures applications pour",
        description:
          "Explorez notre sélection des meilleures applications disponibles sur le marché pour améliorer la productivité de votre entreprise. Que vous ayez besoin d'une application de gestion de projet, d'un outil de communication en équipe ou d'une solution de marketing numérique, nous vous présenterons des options fiables et performantes.",
        image: basePath + "/booster_bg.webp",
        imageSide: "right",
      },
      {
        componentName: "FAQSection",
        title: "FAQ",
        subtitle: "Questions fréquemment posées",
        faq: [
          {
            question:
              "Vous vous demandez par où commencer pour créer votre site vitrine ou votre application?",
            answer:
              "Consultez notre liste des questions fréquemment posées pour obtenir des réponses claires et concises. Ne perdez plus de temps, lancez-vous dès maintenant !",
          },
          {
            question:
              "Besoin d'aide pour construire votre site vitrine ou votre application?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Vous souhaitez développer votre site vitrine ou votre application, mais vous ne savez pas par où commencer?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Vous avez des doutes ou des interrogations sur la construction de votre site vitrine ou de votre application?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Besoin d'informations sur les sites vitrines et les applications?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
        ],
      },
    ],
  },
  {
    icon: basePath + "/icon_quality.svg",
    image: basePath + "/project_preview.webp",
    title: "Intelligence artificielle",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
    btnText: "Voir plus",
    serviceUrl: "/services/service2",
    pageDetailContentSettings: [
      {
        componentName: "ImageTextSection",
        title: "Les avantages pour votre entreprise",
        subtitle: "Site vitrine et applications",
        description:
          "Découvrez comment un site vitrine peut aider votre entreprise à se démarquer en ligne et à attirer de nouveaux clients. Nous vous expliquerons les fonctionnalités essentielles d'un site vitrine efficace et comment il peut être utilisé pour présenter vos produits ou services de manière attrayante.",
        image: basePath + "/exp_bg.webp",
        imageSide: "left",
      },
      {
        componentName: "FeaturesSection",
        title: "La meilleure plateforme pour votre site vitrine",
        subtitle: "Comment choisir",
        numberdFeatures: [
          {
            icon: "/icon_ai.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            icon: "/icon_decouvrir.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            icon: "/icon_croissance.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            icon: "/icon_executer.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
        ],
      },
      {
        componentName: "ImageTextSection",
        title: "booster votre activité",
        subtitle: "Les meilleures applications pour",
        description:
          "Explorez notre sélection des meilleures applications disponibles sur le marché pour améliorer la productivité de votre entreprise. Que vous ayez besoin d'une application de gestion de projet, d'un outil de communication en équipe ou d'une solution de marketing numérique, nous vous présenterons des options fiables et performantes.",
        image: basePath + "/booster_bg.webp",
        imageSide: "right",
      },
      {
        componentName: "FAQSection",
        title: "FAQ",
        subtitle: "Questions fréquemment posées",
        faq: [
          {
            question:
              "Vous vous demandez par où commencer pour créer votre site vitrine ou votre application?",
            answer:
              "Consultez notre liste des questions fréquemment posées pour obtenir des réponses claires et concises. Ne perdez plus de temps, lancez-vous dès maintenant !",
          },
          {
            question:
              "Besoin d'aide pour construire votre site vitrine ou votre application?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Vous souhaitez développer votre site vitrine ou votre application, mais vous ne savez pas par où commencer?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Vous avez des doutes ou des interrogations sur la construction de votre site vitrine ou de votre application?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Besoin d'informations sur les sites vitrines et les applications?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
        ],
      },
    ],
  },
  {
    icon: basePath + "/icon_croissance.svg",
    image: basePath + "/project_preview.webp",
    title: "Sourcing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac risus cras pellentesque ipsum.",
    btnText: "Voir plus",
    serviceUrl: "/services/service3",
    pageDetailContentSettings: [
      {
        componentName: "ImageTextSection",
        title: "Les avantages pour votre entreprise",
        subtitle: "Site vitrine et applications",
        description:
          "Découvrez comment un site vitrine peut aider votre entreprise à se démarquer en ligne et à attirer de nouveaux clients. Nous vous expliquerons les fonctionnalités essentielles d'un site vitrine efficace et comment il peut être utilisé pour présenter vos produits ou services de manière attrayante.",
        image: basePath + "/exp_bg.webp",
        imageSide: "left",
      },
      {
        componentName: "FeaturesSection",
        title: "La meilleure plateforme pour votre site vitrine",
        subtitle: "Comment choisir",
        numberdFeatures: [
          {
            icon: "/icon_ai.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            icon: "/icon_decouvrir.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            icon: "/icon_croissance.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            icon: "/icon_executer.svg",
            title: "Etape",
            description:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
        ],
      },
      {
        componentName: "ImageTextSection",
        title: "booster votre activité",
        subtitle: "Les meilleures applications pour",
        description:
          "Explorez notre sélection des meilleures applications disponibles sur le marché pour améliorer la productivité de votre entreprise. Que vous ayez besoin d'une application de gestion de projet, d'un outil de communication en équipe ou d'une solution de marketing numérique, nous vous présenterons des options fiables et performantes.",
        image: basePath + "/booster_bg.webp",
        imageSide: "right",
      },
      {
        componentName: "FAQSection",
        title: "FAQ",
        subtitle: "Questions fréquemment posées",
        faq: [
          {
            question:
              "Vous vous demandez par où commencer pour créer votre site vitrine ou votre application?",
            answer:
              "Consultez notre liste des questions fréquemment posées pour obtenir des réponses claires et concises. Ne perdez plus de temps, lancez-vous dès maintenant !",
          },
          {
            question:
              "Besoin d'aide pour construire votre site vitrine ou votre application?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Vous souhaitez développer votre site vitrine ou votre application, mais vous ne savez pas par où commencer?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Vous avez des doutes ou des interrogations sur la construction de votre site vitrine ou de votre application?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
          {
            question:
              "Besoin d'informations sur les sites vitrines et les applications?",
            answer:
              "Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu. Adipiscing tristique risus nec feugiat in fermentum. Volutpat ornare arcu.",
          },
        ],
      },
    ],
  },
];
export const ServicesNav = [
  {
    title: "Développement d’application",
    url: "/services/service1",
  },
  {
    title: "Création des sites web",
    url: "/services/service2",
  },
  {
    title: "UI/UX design",
    url: "/services/service1",
  },
  {
    title: "Référencement / SEO",
    url: "/services/service1",
  },
  {
    title: "Audit",
    url: "/services/service1",
  },
  {
    title: "Maintenance",
    url: "/services/service1",
  },
];

export const AboutNav = [
  {
    title: "à propos de nous",
    url: "/propos",
  },
  {
    title: "Carrière",
    url: "/carriere",
  },
  {
    title: "Presse",
    url: "/presse",
  },
  {
    title: "Contact",
    url: "/Contact",
  },
];

export const TermsConditionsNav = [
  {
    title: "Termes et conditions",
    url: "/termes-condtions",
  },
  {
    title: "Politique de confidentialité",
    url: "/politique-confidentialite",
  },
];

export const MissionAndVision = [
  {
    question: "Perspectives et stratégie",
    answer:
      "Ac tincidunt vitae semper quis. Non odio euismod lacinia at quis risus. Integer quis auctor elit sed lacinia vita eru vulputate mi sit amet.",
    selected: true,
  },
  {
    question: "Planification et achat média",
    answer:
      "Ac tincidunt vitae semper quis. Non odio euismod lacinia at quis risus. Integer quis auctor elit sed lacinia vita eru vulputate mi sit amet.",
    selected: false,
  },
  {
    question: "Conseil et transformation des données",
    answer:
      "Ac tincidunt vitae semper quis. Non odio euismod lacinia at quis risus. Integer quis auctor elit sed lacinia vita eru vulputate mi sit amet.",
    selected: false,
  },
  {
    question: "L'intelligence artificielle pour tous",
    answer:
      "Ac tincidunt vitae semper quis. Non odio euismod lacinia at quis risus. Integer quis auctor elit sed lacinia vita eru vulputate mi sit amet.",
    selected: false,
  },
];

export const ContactAddresses = [
  {
    city: "Montreal",
    address: "1 Rue des Fossés Saint-Bernard, 28872 Montreal, Canada",
    tel: "+33 1 40 51 38 38",
    email: "montreal@develop-better.org",
    position: {
      lat: 48.8563855,
      lng: 2.3464551,
    },
  },
  {
    city: "Casablanca",
    address: "44 Bd d'Anfa, Casablanca 20000 Maroc",
    tel: "+212 5 36 51 38 38",
    email: "casablanca@develop-better.org",
    position: {
      lat: 33.569273,
      lng: -7.625944,
    },
  },
  {
    city: "Rabat",
    address: "44 Bd d'Anfa, Rabat 20000 Maroc",
    tel: "+212 5 21 51 38 38",
    email: "rabat@develop-better.org",
    position: {
      lat: 33.9919462,
      lng: -6.8521352,
    },
  },
];
export const SiteVitrineModels = [
  {
    name: "gym",
    slug: "site-gym",
    title: "Découvrir notre modèle de site web pour votre GYM",
    description: "Paramétrage faciles en simples cliques",
    btnText: "Voir la démo",
    featured: true,
    icon: basePath + "/icon_quality.svg",
    imageThumbnail: basePath + "/templates/modele_gym2.webp",
    imageOrientation: "right",
    imageLandingFull: basePath + "/templates/modele_gym2.webp",
    modelUrl: "/service/site-vitrine-et-applications/gym",
    previewUrl: `${process.env.NEXT_PUBLIC_URL_TEMPLATES}/index-gym#googtrans(en|fr)`,
    lightBG: true,
    category: "Sport",
  },
  {
    name: "it",
    slug: "site-it",
    title: "Découvrir notre modèle de site web pour votre Entreprise IT",
    description: "Paramétrage faciles en simples cliques",
    btnText: "Voir la démo",
    featured: true,
    icon: basePath + "/icon_quality.svg",
    imageThumbnail: basePath + "/templates/modele_it2.webp",
    imageOrientation: "left",
    imageLandingFull: basePath + "/templates/modele_it2.webp",
    modelUrl: "/service/site-vitrine-et-applications/it-entreprise",
    previewUrl: `${process.env.NEXT_PUBLIC_URL_TEMPLATES}/index-it-solution#googtrans(en|fr)`,
    lightBG: false,
    category: "Entreprise",
  },
  {
    name: "cafe",
    slug: "site-cafe",
    title: "Découvrir notre modèle de site web pour votre Café",
    description: "Paramétrage faciles en simples cliques",
    btnText: "Voir la démo",
    featured: true,
    icon: basePath + "/icon_quality.svg",
    imageThumbnail: basePath + "/templates/modele_cafe2.webp",
    imageOrientation: "right",
    imageLandingFull: basePath + "/templates/modele_cafe2.webp",
    modelUrl: "/service/site-vitrine-et-applications/cafe",
    previewUrl: `${process.env.NEXT_PUBLIC_URL_TEMPLATES}/index-cafe#googtrans(en|fr)`,
    lightBG: true,
    category: "E-commerce",
  },
  {
    name: "ai",
    slug: "site-ai",
    title: "Découvrir notre modèle de site web pour votre Projet AI",
    description: "Paramétrage faciles en simples cliques",
    btnText: "Voir la démo",
    featured: false,
    icon: basePath + "/icon_quality.svg",
    imageThumbnail: basePath + "/templates/modele_ai.webp",
    imageOrientation: "left",
    imageLandingFull: basePath + "/templates/modele_ai.webp",
    modelUrl: "/service/site-vitrine-et-applications/ai",
    previewUrl: `${process.env.NEXT_PUBLIC_URL_TEMPLATES}/index-ai#googtrans(en|fr)`,
    lightBG: false,
    category: "AI",
  },
  {
    name: "app",
    slug: "site-app",
    title: "Découvrir notre modèle de site web pour votre APP",
    description: "Paramétrage faciles en simples cliques",
    btnText: "Voir la démo",
    featured: false,
    icon: basePath + "/icon_quality.svg",
    imageThumbnail: basePath + "/templates/modele_app.webp",
    imageOrientation: "right",
    imageLandingFull: basePath + "/templates/modele_app.webp",
    modelUrl: "/service/site-vitrine-et-applications/app",
    previewUrl: `${process.env.NEXT_PUBLIC_URL_TEMPLATES}/index-apps#googtrans(en|fr)`,
    lightBG: true,
    category: "PME",
  },
  {
    name: "blog-demo",
    slug: "site-blog-demo",
    title: "Découvrir notre modèle de site web pour votre Blog",
    description: "Paramétrage faciles en simples cliques",
    btnText: "Voir la démo",
    featured: false,
    icon: basePath + "/icon_quality.svg",
    imageThumbnail: basePath + "/templates/modele_blog_demo.webp",
    imageOrientation: "right",
    imageLandingFull: basePath + "/templates/modele_blog_demo.webp",
    modelUrl: "/service/site-vitrine-et-applications/blog-demo",
    previewUrl: `${process.env.NEXT_PUBLIC_URL_TEMPLATES}/index-blog#googtrans(en|fr)`,
    lightBG: true,
    category: "Personnel",
  },
  {
    name: "business",
    slug: "site-business",
    title: "Découvrir notre modèle de site web pour votre Business",
    description: "Paramétrage faciles en simples cliques",
    btnText: "Voir la démo",
    featured: false,
    icon: basePath + "/icon_quality.svg",
    imageThumbnail: basePath + "/templates/modele_business.webp",
    imageOrientation: "right",
    imageLandingFull: basePath + "/templates/modele_business.webp",
    modelUrl: "/service/site-vitrine-et-applications/business",
    previewUrl: `${process.env.NEXT_PUBLIC_URL_TEMPLATES}/index-business#googtrans(en|fr)`,
    lightBG: true,
    category: "Entreprise",
  },
  {
    name: "charity",
    slug: "site-charity",
    title: "Découvrir notre modèle de site web pour Charité",
    description: "Paramétrage faciles en simples cliques",
    btnText: "Voir la démo",
    featured: false,
    icon: basePath + "/icon_quality.svg",
    imageThumbnail: basePath + "/templates/modele_charity.webp",
    imageOrientation: "right",
    imageLandingFull: basePath + "/templates/modele_charity.webp",
    modelUrl: "/service/site-vitrine-et-applications/charite",
    previewUrl: `${process.env.NEXT_PUBLIC_URL_TEMPLATES}/index-charity#googtrans(en|fr)`,
    lightBG: true,
    category: "Événement",
  },
  {
    name: "christmas",
    slug: "site-christmas",
    title: "Découvrir notre modèle de site web pour Christmas",
    description: "Paramétrage faciles en simples cliques",
    btnText: "Voir la démo",
    featured: false,
    icon: basePath + "/icon_quality.svg",
    imageThumbnail: basePath + "/templates/modele_christmas.webp",
    imageOrientation: "right",
    imageLandingFull: basePath + "/templates/modele_christmas.webp",
    modelUrl: "/service/site-vitrine-et-applications/christmas",
    previewUrl: `${process.env.NEXT_PUBLIC_URL_TEMPLATES}/index-christmas#googtrans(en|fr)`,
    lightBG: true,
    category: "Événement",
  },
  {
    name: "classic-app",
    slug: "site-classic-app",
    title: "Découvrir notre modèle de site web pour votre App",
    description: "Paramétrage faciles en simples cliques",
    btnText: "Voir la démo",
    featured: false,
    icon: basePath + "/icon_quality.svg",
    imageThumbnail: basePath + "/templates/modele_classic_app.webp",
    imageOrientation: "right",
    imageLandingFull: basePath + "/templates/modele_classic_app.webp",
    modelUrl: "/service/site-vitrine-et-applications/classic-app",
    previewUrl: `${process.env.NEXT_PUBLIC_URL_TEMPLATES}/index-classic-app#googtrans(en|fr)`,
    lightBG: true,
    category: "PME",
  },
  {
    name: "classic-business",
    slug: "site-classic-business",
    title: "Découvrir notre modèle de site web pour votre Business",
    description: "Paramétrage faciles en simples cliques",
    btnText: "Voir la démo",
    featured: false,
    icon: basePath + "/icon_quality.svg",
    imageThumbnail: basePath + "/templates/modele_classic_business.webp",
    imageOrientation: "right",
    imageLandingFull: basePath + "/templates/modele_classic_business.webp",
    modelUrl: "/service/site-vitrine-et-applications/classic-business",
    previewUrl: `${process.env.NEXT_PUBLIC_URL_TEMPLATES}/index-classic-business#googtrans(en|fr)`,
    lightBG: true,
    category: "Entreprise",
  },
  {
    name: "classic-saas",
    slug: "site-classic-saas",
    title: "Découvrir notre modèle de site web pour votre SAAS",
    description: "Paramétrage faciles en simples cliques",
    btnText: "Voir la démo",
    featured: false,
    icon: basePath + "/icon_quality.svg",
    imageThumbnail: basePath + "/templates/modele_classic_saas.webp",
    imageOrientation: "right",
    imageLandingFull: basePath + "/templates/modele_classic_saas.webp",
    modelUrl: "/service/site-vitrine-et-applications/classic-saas",
    previewUrl: `${process.env.NEXT_PUBLIC_URL_TEMPLATES}/index-classic-saas#googtrans(en|fr)`,
    lightBG: true,
    category: "Entreprise",
  },
  {
    name: "modern-saas",
    slug: "site-modern-saas",
    title: "Découvrir notre modèle de site web pour votre SAAS",
    description: "Paramétrage faciles en simples cliques",
    btnText: "Voir la démo",
    featured: false,
    icon: basePath + "/icon_quality.svg",
    imageThumbnail: basePath + "/templates/modele_modern_saas.webp",
    imageOrientation: "right",
    imageLandingFull: basePath + "/templates/modele_modern_saas.webp",
    modelUrl: "/service/site-vitrine-et-applications/modern-saas",
    previewUrl: `${process.env.NEXT_PUBLIC_URL_TEMPLATES}/index-modern-saas#googtrans(en|fr)`,
    lightBG: true,
    category: "Entreprise",
  },
  {
    name: "construction",
    slug: "site-construction",
    title:
      "Découvrir notre modèle de site web pour votre projet de construction",
    description: "Paramétrage faciles en simples cliques",
    btnText: "Voir la démo",
    featured: false,
    icon: basePath + "/icon_quality.svg",
    imageThumbnail: basePath + "/templates/modele_construction.webp",
    imageOrientation: "right",
    imageLandingFull: basePath + "/templates/modele_construction.webp",
    modelUrl: "/service/site-vitrine-et-applications/construction",
    previewUrl: `${process.env.NEXT_PUBLIC_URL_TEMPLATES}/index-construction#googtrans(en|fr)`,
    lightBG: true,
    category: "PME",
  },
];
