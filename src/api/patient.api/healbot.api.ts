import { InvalidInputError } from "@/errors/index.ts";
import type {
  HealbotConversation,
  HealbotConversationSummary,
} from "@/types/healbot.ts";

const CONVERSATIONS: HealbotConversation[] = [
  {
    id: "cardiology-visit",
    title: "Consultation cardiologue",
    preview: "Rendez-vous avec Dr. Merazi",
    assistantName: "HealBot AI",
    assistantStatus: "En ligne · Toujours là pour vous",
    promptOptions: [
      "Mes rapports",
      "Mes médicaments",
      "Les rendez-vous d'aujourd'hui",
      "Médecins communs",
    ],
    messages: [
      {
        id: "c1-m1",
        author: "assistant",
        content:
          "Bonjour Sarah ! Je suis votre assistante santé personnelle.\nComment puis-je vous aider aujourd'hui ?",
        timestamp: "9h30",
      },
      {
        id: "c1-m2",
        author: "patient",
        content: "Quand est mon prochain rendez-vous ?",
        timestamp: "9h38",
      },
      {
        id: "c1-m3",
        author: "assistant",
        content:
          "Votre prochain rendez-vous avec le Dr. Merazi (cardiologie) est demain,\nle 12 mars, à 10h30. N'oubliez pas d'être à jeun pendant 4 heures avant.",
        timestamp: "9h38",
      },
      {
        id: "c1-m4",
        author: "patient",
        content:
          "Puis-je consulter les résultats de ma dernière analyse sanguine ?",
        timestamp: "9h40",
      },
      {
        id: "c1-m5",
        author: "assistant",
        content:
          "Oui, les résultats de votre dernière analyse sont disponibles dans l'onglet Fichiers. Je peux aussi vous résumer les valeurs importantes si vous voulez.",
        timestamp: "9h41",
      },
    ],
  },
  {
    id: "chest-pain",
    title: "Douleur poitrine",
    preview: "Questions sur des symptômes récents",
    assistantName: "HealBot AI",
    assistantStatus: "En ligne · Réponse rapide",
    promptOptions: [
      "Décrire mes symptômes",
      "Quand consulter ?",
      "Conseils immédiats",
    ],
    messages: [
      {
        id: "c2-m1",
        author: "assistant",
        content:
          "Décrivez-moi votre douleur et précisez depuis quand elle a commencé. En cas de douleur intense ou irradiant vers le bras, appelez les urgences.",
        timestamp: "8h10",
      },
    ],
  },
  {
    id: "blood-test",
    title: "Analyse sanguine",
    preview: "Résumé et interprétation",
    assistantName: "HealBot AI",
    assistantStatus: "En ligne · Résumés disponibles",
    promptOptions: [
      "Valeurs importantes",
      "Comparer au précédent bilan",
      "Questions pour mon médecin",
    ],
    messages: [
      {
        id: "c3-m1",
        author: "assistant",
        content:
          "Je peux vous expliquer vos résultats d'analyse sanguine et repérer les indicateurs à revoir avec votre médecin.",
        timestamp: "Hier",
      },
    ],
  },
  {
    id: "allergy",
    title: "Allergie",
    preview: "Conseils et déclencheurs",
    assistantName: "HealBot AI",
    assistantStatus: "En ligne · Suivi quotidien",
    promptOptions: [
      "Déclencheurs fréquents",
      "Traitement habituel",
      "Symptômes à surveiller",
    ],
    messages: [
      {
        id: "c4-m1",
        author: "assistant",
        content:
          "Vous avez noté une allergie saisonnière. Je peux vous rappeler les traitements habituels et les signaux qui nécessitent un avis médical.",
        timestamp: "Hier",
      },
    ],
  },
  {
    id: "discussion-05",
    title: "Discussion 05",
    preview: "Conversation archivée",
    assistantName: "HealBot AI",
    assistantStatus: "En ligne · Historique conservé",
    promptOptions: [
      "Reprendre la discussion",
      "Afficher le résumé",
      "Partager avec mon médecin",
    ],
    messages: [
      {
        id: "c5-m1",
        author: "assistant",
        content:
          "Cette discussion précédente reste disponible si vous souhaitez reprendre le même sujet.",
        timestamp: "Lun.",
      },
    ],
  },
];

// GET /healbot/conversations
export const fetchConversations = (_patientId: string) => {
  return new Promise<HealbotConversationSummary[]>((resolve) => {
    setTimeout(() => {
      resolve(
        CONVERSATIONS.map(({ id, title, preview }) => ({
          id,
          title,
          preview,
        })),
      );
    }, 300);
  });
};

// GET /healbot/conversations/:conversationId
export const fetchConversation = (_patientId: string, conversationId: string) => {
  return new Promise<HealbotConversation>((resolve, reject) => {
    setTimeout(() => {
      const conversation = CONVERSATIONS.find(
        (entry) => entry.id === conversationId,
      );

      if (!conversation) {
        return reject(new InvalidInputError("conversationId"));
      }

      return resolve(conversation);
    }, 300);
  });
};
