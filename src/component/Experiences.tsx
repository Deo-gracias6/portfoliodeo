import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";


import gunivers from "../assets/companies/gunivers.png";
import nerdx from "../assets/companies/nerdx.jpg";
import beauthekass from "../assets/companies/logobote.jpg";



const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    
];


const experiences = [
    {
      id: 1,
      role: "Développeuse Web Junior",
      company: "GUNIVERS",
      period: "Oct 2024 - DCB 2024",
      description: [
          "Développement de fonctionnalités Vue.js pour une plateforme de formation.",
          "Utilisation de Firebase Firestore pour gérer les utilisateurs et les données.",
          "Stylisation des interfaces avec Tailwind CSS pour une expérience utilisateur fluide.",

        ],
        image: gunivers,
    },
    {
      id: 2,
      role: "Développeuse Web (Stagiaire)",
      company: "NerdX Digital",
      period: "Mars 2024 - Juin 2024",
      description: [
          "Création de l'application web *MaPoubElle* pour la gestion intelligente des déchets.",
          "Mise en œuvre de fonctionnalités interactives avec Vue.js et Firebase.",
          "Collaboration avec l’équipe UX/UI pour améliorer l’expérience utilisateur.",
        ],
        image: nerdx,
    },
    {
      id: 3,
      role: "Développeuse Web (Stagiaire)",
      company: "Beauthekass",
      period: "Juil 2024 - Sept 2024",
      description: [
          "Conception du site vitrine de l’entreprise avec HTML, Tailwind CSS et Bootstrap.",
          "Mise en valeur des services comme la topographie et la consultation foncière.",
          "Personnalisation du pied de page, barre de navigation et sections selon la charte graphique.",
        ],
        image: beauthekass,
    },

    {
      id: 4,
        role: "Développeuse Frontend (Projet personnel)",
        company: "Site Immobilier",
        period: "Nov 2023 - Déc 2023",
        description: [
            "Développement d’une interface responsive pour la recherche et gestion de parcelles.",
            "Utilisation de Bootstrap pour la mise en page et d’animations CSS pour les cartes de services.",
            "Intégration des filtres et tri pour faciliter la navigation des utilisateurs.",
        ],
        image: beauthekass,
    },
];



const Experiences = () => {
    return (
        <div id="Experiences">
            <Title title="Expériences" />
            <div className="flex  flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4  justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className=" flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((expericence) => (
                        <div
                            key={expericence.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">
                                <img
                                    src={expericence.image}
                                    alt={expericence.company}
                                    className="object-cover h-10 w-10"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {expericence.role} , {expericence.company}
                                    </h1>
                                    <span className="text-sm">{expericence.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {expericence.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences