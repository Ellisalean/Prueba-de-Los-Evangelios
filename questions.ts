import { Question, QuestionType } from './types';

export const quizQuestions: Question[] = [
  // SECCIÓN 1: OPCIÓN MÚLTIPLE
  {
    id: 1,
    text: "¿Cuál de los siguientes evangelios pone un énfasis especial en presentar a Jesús como el 'Mesías/Rey prometido'?",
    type: QuestionType.MULTIPLE_CHOICE,
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop",
    options: ["Marcos", "Mateo", "Lucas", "Juan"],
    correctAnswer: "Mateo",
    explanation: "Mateo presenta a Jesús como el Mesías/Rey prometido, especialmente dirigido a una audiencia judía."
  },
  {
    id: 2,
    text: "El término 'sinóptico' se refiere a:",
    type: QuestionType.MULTIPLE_CHOICE,
    imageUrl: "https://marketplace.canva.com/MAAOwukvnrM/1/thumbnail_large-1/canva-stack-of-books-MAAOwukvnrM.png",
    options: [
      "Los cuatro evangelios escritos en el mismo periodo.",
      "Los evangelios que comparten un enfoque común y pueden ser vistos juntos.",
      "El evangelio de Juan, debido a su estilo teológico.",
      "Ninguna de las anteriores."
    ],
    correctAnswer: "Los evangelios que comparten un enfoque común y pueden ser vistos juntos.",
    explanation: "Viene del griego 'syn-opsis' (ver juntos)."
  },
  {
    id: 3,
    text: "¿Cuál es la principal diferencia entre el evangelio de Juan y los evangelios sinópticos?",
    type: QuestionType.MULTIPLE_CHOICE,
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
    options: [
      "Juan presenta a Jesús como el Siervo Sufriente.",
      "Juan es puramente teológico y no presenta una secuencia geográfica de los eventos.",
      "Juan se enfoca solo en la genealogía de Jesús.",
      "Los cuatro evangelios de Juan se centran en la misma audiencia."
    ],
    correctAnswer: "Juan es puramente teológico y no presenta una secuencia geográfica de los eventos.",
    explanation: "Juan profundiza más en discursos teológicos y la divinidad de Jesús."
  },

  // SECCIÓN 2: VERDADERO O FALSO
  {
    id: 8,
    text: "El evangelio de Marcos presenta a Jesús como el 'Siervo Sufriente', sin incluir una genealogía.",
    type: QuestionType.TRUE_FALSE,
    imageUrl: "https://baonline.org/wp-content/uploads/sites/13/2019/01/Gospels-Mark.jpg",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explanation: "Marcos comienza directamente con el ministerio de Jesús, resaltando su servicio y sacrificio."
  },
  {
    id: 10,
    text: "Los evangelios sinópticos (Mateo, Marcos y Lucas) relatan los mismos eventos en el mismo orden y con los mismos detalles sin ninguna variación.",
    type: QuestionType.TRUE_FALSE,
    imageUrl: "https://aishlatino.b-cdn.net/wp-content/uploads/2024/07/what-is-the-torah.jpg",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explanation: "Aunque son similares, cada uno tiene variaciones en detalles, orden y énfasis según su propósito."
  },

  // SECCIÓN 3: RESPUESTA CORTA
  {
    id: 11,
    text: "¿Qué significa el término 'evangelio' y por qué es importante en el contexto cristiano?",
    type: QuestionType.SHORT_ANSWER,
    imageUrl: "https://volvamosalevangelio.org/wp-content/uploads/2024/07/Evangelizar-pcess609.webp",
    options: [],
    correctAnswer: "",
    explanation: "Significa 'buenas nuevas' o 'buenas noticias'. Es el mensaje central de la salvación a través de Jesucristo."
  },
  {
    id: 13,
    text: "¿Cuál es la importancia de las genealogías de Jesús presentadas en Mateo y Lucas? ¿En qué se diferencian ambas?",
    type: QuestionType.SHORT_ANSWER,
    imageUrl: "https://www.elimparcial.com/resizer/v2/OAJI5VXB3VGEDF6ZV7FY7HLJMI.jpeg?auth=1d368aa33ae99aee6ca8a324400665c666ebe7788cab5784b48863cd28c3e400&smart=true&width=1200&height=800&quality=70",
    options: [],
    correctAnswer: "",
    explanation: "Demuestran el linaje mesiánico. Mateo enfoca la línea legal (David/Abraham) y Lucas la humanidad (Adán) y posiblemente la línea de María."
  },
  {
    id: 14,
    text: "¿Cómo el contexto histórico y cultural de Palestina en la época de Jesús influye en las narrativas de los evangelios?",
    type: QuestionType.SHORT_ANSWER,
    imageUrl: "https://static.vecteezy.com/system/resources/previews/025/756/394/non_2x/highly-detailed-israel-map-with-flag-capital-and-small-map-of-the-world-vector.jpg",
    options: [],
    correctAnswer: "",
    explanation: "La ocupación romana y la esperanza mesiánica judía moldean la presentación de Jesús como el libertador y cumplimiento profético."
  },

  // SECCIÓN 4: PREGUNTA DE DESARROLLO
  {
    id: 15,
    text: "Análisis de los evangelios: Compara los enfoques de los cuatro evangelios (Mateo, Marcos, Lucas y Juan) sobre la figura de Jesús. Completa el cuadro con el enfoque y la audiencia de cada autor.",
    type: QuestionType.TABLE,
    imageUrl: "https://www.questionpro.com/blog/wp-content/uploads/2019/01/895.jpg",
    options: ["Mateo", "Marcos", "Lucas", "Juan"],
    correctAnswer: "",
    explanation: "Mateo: Mesías/Rey (Judíos); Marcos: Siervo Sufriente (Romanos); Lucas: Hijo del Hombre (Griegos/Gentiles); Juan: Hijo de Dios (Universal)."
  },
  {
    id: 17,
    text: "Evaluación crítica: ¿Qué teoría sobre el orden y la relación de los evangelios (hipótesis agustiniana, hipótesis de los dos evangelios, o la hipótesis de las dos fuentes) te parece más convincente? Justifica tu respuesta con argumentos.",
    type: QuestionType.LONG_ANSWER,
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
    options: [],
    correctAnswer: "",
    explanation: "La hipótesis de las dos fuentes (Marcos + Q) es la más aceptada académicamente para explicar las similitudes y diferencias."
  }
];
