export const sentences = [
  {
    text: "Ella no le gustan el café.",
    errors: [2], // "le" debería ser "les"
    explanation: "Con 'gustar' se usa 'les' cuando el sujeto es plural o cuando nos referimos a 'ellas'."
  },
  {
    text: "Los libros está en la mesa.",
    errors: [2], // "está" debería ser "están"
    explanation: "Con sujetos plurales como 'libros' se usa 'están', no 'está'."
  },
  {
    text: "Yo he ido al mercado ayer.",
    errors: [2], // "he ido" debería ser "fui"
    explanation: "Con marcadores temporales como 'ayer' se usa el pretérito perfecto simple 'fui'."
  },
  {
    text: "Él y yo fuimos al cine.",
    errors: [], // Esta oración es correcta
    explanation: "Esta oración es correcta. 'Él y yo' requiere la conjugación 'fuimos'."
  },
  {
    text: "Su perro es muy amigable.",
    errors: [], // Esta oración es correcta
    explanation: "Esta oración es correcta. La concordancia y el uso de posesivos es adecuado."
  },
  {
    text: "Yo podría de haberte ayudado.",
    errors: [3], // "de" debería eliminarse
    explanation: "Se dice 'podría haber' o 'podría haberte', no 'podría de haber'."
  },
  {
    text: "Las niñas estaba jugando afuera.",
    errors: [2], // "estaba" debería ser "estaban"
    explanation: "Con sujetos plurales como 'niñas' se usa 'estaban', no 'estaba'."
  },
  {
    text: "Ella camina a la escuela todos los días.",
    errors: [], // Esta oración es correcta
    explanation: "Esta oración es correcta. La concordancia y el tiempo verbal son adecuados."
  },
  {
    text: "Entre tú y yo, esto es difícil.",
    errors: [1], // "tú" debería ser "ti"
    explanation: "Después de preposiciones como 'entre' se usa 'ti', no 'tú'."
  },
  {
    text: "El equipo están jugando bien hoy.",
    errors: [2], // "están" debería ser "está"
    explanation: "Sustantivos colectivos como 'equipo' son singulares, por lo que se usa 'está'."
  },
  {
    text: "Yo vi esa película la semana pasada.",
    errors: [], // Esta oración es correcta
    explanation: "Esta oración es correcta. El pretérito perfecto simple 'vi' es apropiado."
  },
  {
    text: "¿De quién carro está estacionado afuera?",
    errors: [1], // "quién" debería ser "quién es el"
    explanation: "Se debe decir '¿De quién es el carro?' para indicar posesión correctamente."
  },
  {
    text: "El clima está más mejor hoy.",
    errors: [3], // "más mejor" debería ser solo "mejor"
    explanation: "No se usa 'más' con comparativos como 'mejor'. Solo se dice 'mejor'."
  },
  {
    text: "Yo y María vamos de compras.",
    errors: [0], // "Yo y María" debería ser "María y yo"
    explanation: "Por cortesía, se menciona primero a la otra persona: 'María y yo'."
  },
  {
    text: "El gato se acostó en la manta tibia.",
    errors: [], // Esta oración es correcta
    explanation: "Esta oración es correcta. El uso del pretérito y la concordancia son apropiados."
  },
  {
    text: "Tengo menos amigos que antes.",
    errors: [1], // "menos" debería ser "fewer" pero en español es correcto
    explanation: "Esta oración es correcta. En español se usa 'menos' tanto para contables como incontables."
  },
  {
    text: "Los datos muestra resultados interesantes.",
    errors: [2], // "muestra" debería ser "muestran"
    explanation: "'Datos' es plural, por lo que se usa 'muestran', no 'muestra'."
  },
  {
    text: "Cada estudiante debe traer su libro.",
    errors: [], // Esta oración es correcta
    explanation: "Esta oración es correcta. 'Cada estudiante' es singular, por lo que 'su' es apropiado."
  },
  {
    text: "La razón es porque llegué tarde.",
    errors: [3], // "porque" debería ser "que"
    explanation: "Se dice 'La razón es que...' no 'La razón es porque...'."
  },
  {
    text: "Yo debería de haberte llamado antes.",
    errors: [2], // "de" debería eliminarse
    explanation: "Se dice 'debería haber' o 'debería haberte', no 'debería de haber'."
  },
  {
    text: "Mis padres está muy orgullosos de mí.",
    errors: [2], // "está" debería ser "están"
    explanation: "'Padres' es plural, por lo que se usa 'están', no 'está'."
  },
  {
    text: "¿Dónde están las llaves del carro?",
    errors: [], // Esta oración es correcta
    explanation: "Esta oración es correcta. La concordancia plural es apropiada."
  },
  {
    text: "Ella se puso la camisa roja.",
    errors: [], // Esta oración es correcta
    explanation: "Esta oración es correcta. El uso reflexivo y la concordancia son apropiados."
  },
  {
    text: "Los estudiantes necesita más tiempo.",
    errors: [2], // "necesita" debería ser "necesitan"
    explanation: "'Estudiantes' es plural, por lo que se usa 'necesitan', no 'necesita'."
  },
  {
    text: "Voy a la tienda por comprar leche.",
    errors: [5], // "por" debería ser "para"
    explanation: "Para expresar propósito se usa 'para', no 'por': 'para comprar leche'."
  }
]