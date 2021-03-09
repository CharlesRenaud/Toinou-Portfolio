import Mock from "../mock";

const database = {
  about: {
    name: 'Toinou Le Chevalier',
    aboutContent: "Tattoo / Illustration",
    description: "Contact moi pour réaliser un projet perso' ou pour réserver un flash disponible dans ma gallerie.",
    homeImage: '/img/home1.jpg',
  },
  services: [
    {
      title: "Réactif",
      details: "Réalisation rapide des visuels, après acompte.",
      icone: "img/clock.svg",
    },
    {
      title: "Prix cohérents",
      details: "Des prix évolutifs en fonction de la complexité du projet.",
      icone: "img/money.svg",
    },
    {
      title: "Expérience",
      details: "Consulte la rubrique Healed du site pour observer le rendu du mon travail sur peau.",
      icone: "img/tattoo.svg",
    },
    {
        title: "Mes collectifs",
        details: "Membre du collectif d'artistes 'Le Fief' et résident au salon 'Carbone Quatorze'.",
        icone: "img/teamwork.svg",
    },
  ],
  questions: [
    {
        question: "Ton expérience de Tatoueur ?",
        answer1: "Je me suis formé au salon Dermal Mayehm à cholet pendant 1 an.",
        answer2: "Je suis maintenant résident au salon rennais Carbone Quatorze depuis plusieurs mois.",
    },
    {
        question: "De combien est l'acompte à versé pour la réalisation d'un visuel ?",
        answer1: "L'acompte correspond à 15 % du prix du tatouage.",
        answer2: "Le visuel sera réalisé dans un délai d'une semaine après le versement de l'acompte.",
    },
    {
        question: "Comment définirais-tu ton style ?",
        answer1: "Mon style est chevalresque",
        answer2: "J'aime les créations abstraites et l'assemblage de formes.",
    },
    {
        question: "Acceptes-tu tout types de projets ?",
        answer1: "J'accepte les projets en accord avec mon univers graphique.",
        answer2: "Uniquement mes créations, ou vos idées retravailler dans mon univers",
    },
  ]
}


Mock.onGet("/api/AboutUs").reply(config => {
  const response = database.about;
  return [200, response];
});

Mock.onGet("/api/AboutSection").reply(config => {
  const response = database.services;
  return [200, response];
});
Mock.onGet("/api/FaqSection").reply(config => {
    const response = database.questions;
    return [200, response];
  });