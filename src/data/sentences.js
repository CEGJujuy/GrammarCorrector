export const sentences = [
  {
    text: "She don't like coffee very much.",
    errors: [1], // "don't" should be "doesn't"
    explanation: "Use 'doesn't' with third person singular (she, he, it)."
  },
  {
    text: "The book are on the table.",
    errors: [2], // "are" should be "is"
    explanation: "Use 'is' with singular subjects like 'book'."
  },
  {
    text: "I have went to the store yesterday.",
    errors: [2], // "went" should be "gone"
    explanation: "Use 'gone' with 'have' (present perfect tense)."
  },
  {
    text: "Him and me went to the movies.",
    errors: [0, 2], // "Him" should be "He", "me" should be "I"
    explanation: "Use subject pronouns 'He and I' when they are the subject of the sentence."
  },
  {
    text: "There dog is very friendly.",
    errors: [0], // "There" should be "Their"
    explanation: "Use 'Their' to show possession, not 'There' (location)."
  },
  {
    text: "I could of helped you with that.",
    errors: [2], // "of" should be "have"
    explanation: "Use 'could have' not 'could of'."
  },
  {
    text: "The children was playing outside.",
    errors: [2], // "was" should be "were"
    explanation: "Use 'were' with plural subjects like 'children'."
  },
  {
    text: "She walks to school everyday.",
    errors: [4], // "everyday" should be "every day"
    explanation: "Use 'every day' (two words) when you mean 'each day'."
  },
  {
    text: "Between you and I, this is difficult.",
    errors: [4], // "I" should be "me"
    explanation: "Use 'me' after prepositions like 'between'."
  },
  {
    text: "The team are playing good today.",
    errors: [2, 4], // "are" should be "is", "good" should be "well"
    explanation: "Team is singular (use 'is'), and use 'well' to describe how they play."
  },
  {
    text: "I seen that movie last week.",
    errors: [1], // "seen" should be "saw"
    explanation: "Use 'saw' for simple past tense, not 'seen'."
  },
  {
    text: "Who's car is parked outside?",
    errors: [0], // "Who's" should be "Whose"
    explanation: "Use 'Whose' for possession, not 'Who's' (who is)."
  },
  {
    text: "The weather is more better today.",
    errors: [4], // "more better" should be "better"
    explanation: "Don't use 'more' with comparative adjectives like 'better'."
  },
  {
    text: "Me and Sarah are going shopping.",
    errors: [0], // "Me" should be "Sarah and I"
    explanation: "Put the other person first and use 'I' as the subject."
  },
  {
    text: "The cat laid on the warm blanket.",
    errors: [2], // "laid" should be "lay"
    explanation: "Use 'lay' for past tense of 'lie' (to recline)."
  },
  {
    text: "I have less friends than before.",
    errors: [2], // "less" should be "fewer"
    explanation: "Use 'fewer' with countable nouns like 'friends'."
  },
  {
    text: "The data shows interesting results.",
    errors: [2], // "shows" should be "show"
    explanation: "'Data' is plural, so use 'show' not 'shows'."
  },
  {
    text: "Each student must bring their book.",
    errors: [4], // "their" should be "his or her"
    explanation: "'Each student' is singular, so use 'his or her' not 'their'."
  },
  {
    text: "The reason is because I was late.",
    errors: [3], // "because" should be "that"
    explanation: "Use 'The reason is that...' not 'The reason is because...'."
  },
  {
    text: "I should of called you earlier.",
    errors: [2], // "of" should be "have"
    explanation: "Use 'should have' not 'should of'."
  }
]