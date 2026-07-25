import courseBasico from "../assets/course-basico.webp";
import courseProfundo from "../assets/course-profundo.webp";
import courseEspecifico from "../assets/course-especifico.webp";

export const courses = [
  {
    slug: "introduccion",
    badge: "Básico",
    title: "Acompañamiento individual: Introducción al journaling con enfoque psicológico",
    shortTitle: "Introducción al Journaling con enfoque psicológico",
    cardImage: courseBasico,
    summary:
      "Aprende los fundamentos, estructura tus primeras sesiones y establece una práctica segura y efectiva.",
    description:
      "Es un curso de inicio para personas que quieren comenzar a usar el journaling como herramienta de acompañamiento emocional, ya sea porque nunca han escrito antes o porque lo han hecho de forma intuitiva y desean mayor claridad y sostén. El foco no está en “escribir bien”, sino en aprender a usar la escritura como espacio seguro de observación interna, sin exigencias ni sobreinterpretaciones. Este curso no reemplaza un proceso terapéutico, y si lo necesitas puedes contactarnos.",
    audience: [
      "Personas que quieren iniciarse en el journaling con una base psicológica.",
      "Personas que escriben, pero se sienten desordenadas o sin estructura.",
      "Personas que buscan una herramienta de autocuidado complementaria a otros procesos.",
    ],
    topics: [
      "Qué es y qué no es el journaling terapéutico.",
      "Cómo crear un espacio emocionalmente seguro para escribir.",
      "Diferenciar pensamientos, emociones y sensaciones corporales en el journal.",
      "Introducción a la autocompasión y el autoapoyo en la escritura.",
      "Cómo integrar el journaling de forma realista y sostenible en la vida diaria.",
    ],
    day: "Martes",
    slots: ["08:30 - 09:30", "18:30 - 19:30", "19:30 - 20:30", "20:30 - 21:30"],
  },
  {
    slug: "regulacion-emocional",
    badge: "Profundo",
    title: "Acompañamiento individual: Journaling y Regulación Emocional",
    shortTitle: "Journaling y Regulación Emocional",
    cardImage: courseProfundo,
    summary:
      "El journaling como herramienta de regulación emocional y autoobservación más consciente.",
    description:
      "Es un curso de profundización para personas que ya escriben y desean usar el journaling como herramienta de regulación emocional y autoobservación más consciente. Aquí el foco está en cómo usar la escritura para contener emociones intensas, reconocer patrones emocionales y acompañarse en momentos de sobrecarga, sin forzar interpretaciones ni soluciones rápidas. Este curso no reemplaza un proceso terapéutico, y si lo necesitas puedes contactarnos.",
    audience: [
      "Personas que ya realizaron el Curso 1 o tienen experiencia básica en journaling.",
      "Personas que usan la escritura para desahogarse, pero quieren más claridad y sostén.",
      "Personas que buscan herramientas escritas para manejar estrés, cansancio emocional o rumiación.",
    ],
    topics: [
      "Registro emocional más profundo en el journal.",
      "Identificación de patrones emocionales repetitivos.",
      "Escritura como herramienta de autorregulación (no solo descarga).",
      "Estrategias escritas para momentos de sobrecarga emocional.",
      "Cómo integrar el journaling de forma realista y sostenible en la vida diaria.",
    ],
    day: "Miércoles",
    slots: ["09:00 - 10:00", "17:30 - 18:30", "18:30 - 19:30", "19:30 - 20:30"],
  },
  {
    slug: "ansiedad",
    badge: "Específico",
    title: "Acompañamiento individual: Journaling para Ansiedad",
    shortTitle: "Journaling para Ansiedad",
    cardImage: courseEspecifico,
    summary:
      "Acompañamiento de especialización para personas con ansiedad, rumiación o sobrecarga emocional que buscan regularse mediante journaling.",
    description:
      "Es un curso de especialización orientado a personas que experimentan ansiedad, rumiación mental, sobrecarga emocional o sensación de desborde, y que desean usar el journaling como una herramienta concreta de acompañamiento y regulación. El foco está en qué escribir cuando la mente no para, cuando el cuerpo está tenso o cuando cuesta sostener el día a día. Este curso no reemplaza un proceso terapéutico, y si lo necesitas puedes contactarnos.",
    audience: [
      "Personas que ya practican journaling y quieren aplicarlo a la ansiedad cotidiana.",
      "Personas que se sienten saturadas mentalmente y buscan una herramienta accesible.",
      "Personas que están en procesos terapéuticos y desean un recurso complementario.",
    ],
    topics: [
      "Comprender cómo se manifiesta la ansiedad en pensamientos, emociones y cuerpo.",
      "Ejercicios de journaling para reducir rumiación y ordenar la mente.",
      "Escritura como recurso para bajar activación emocional.",
      "Prácticas de autoapoyo y contención en momentos de ansiedad.",
      "Cómo usar el journal como ancla cuando aparece el desborde.",
    ],
    day: "Viernes",
    slots: ["15:30 - 16:30", "16:30 - 17:30", "18:00 - 19:00", "19:00 - 20:00"],
  },
];
