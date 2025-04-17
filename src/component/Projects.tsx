import Title from "./Title"

import img1 from '../assets/projects/1.png';
import tache  from'../assets/projects/tache.jpg';
import poubelle from '../assets/projects/poubelle.png';
import port from '../assets/projects/portfolioph.png';
import formation from '../assets/projects/formation.jpg';
import immo from '../assets/projects/immo.jpg';
import { Github, Video } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'Site de Vente de Vêtements',
        description: 'Création d’un site e-commerce basique pour la vente de vêtements. Intégration d’une page d’accueil, d’un catalogue produit, d’un panier et d’une page de paiement. Responsive, moderne, et pensé pour une bonne expérience utilisateur.',
        technologies: ['Wordpress'],
        demoLink: '#',
        repoLink: '#',
        image: img1,
    },
    {
        id: 2,
        title: 'Ma poubelle',
        description: 'Application web de gestion des déchets. Permet aux utilisateurs de localiser les poubelles intelligentes, recevoir des rappels de tri, et suivre les jours de collecte.',
        technologies:  ['Boostrap', 'laravel', 'MySql'],
        demoLink: '#',
        repoLink: 'https://github.com/Benisgs/Poubelle',
        image: poubelle,
    },
    {
        id: 3,
        title: 'Site Immobilier',
        description: 'Développement d’un site pour rechercher, acheter ou vendre des parcelles de terrain. Affichage des offres avec filtres et mise en page responsive.',
        technologies: ['Boostrap', 'laravel', 'MySql'],
        demoLink: '#',
        repoLink: 'https://github.com/ShrisbySamuel/immo_deo',
        image:immo,
    },
    {
        id: 4,
        title: 'Gestion de tâches',
        description: 'Appli simple et intuitive pour créer, modifier et supprimer des tâches. Permet d’organiser les activités quotidiennes avec une interface claire et réactive. Développée avec JavaScript, parfois intégrée dans des tests avec Vue.js ou pour des démos rapides',
        technologies: [ 'MongoDB', 'Express.js'],
        demoLink: '#',
        repoLink: '#',
        image: tache,
    },
    {
        id: 5,
        title: 'Système de réservation de salles',
        description: 'Site personnel responsive présentant mon profil, mes compétences, mes projets, et mes contacts. Construit avec HTML, Tailwind CSS, et un peu de JavaScript. Il me sert de vitrine pro pour valoriser mon parcours et mes réalisations.',
        technologies: ['TailwindCss', 'Html5', 'JavaScript'],
        demoLink: 'https://deo-gracias6.github.io/porf/',
        repoLink: 'https://github.com/Deo-gracias6/porf',
        image: port,
    },
    {
        id: 6,
        title: ' Plateforme de Formation',
        description: 'Interface d’inscription et de connexion pour une plateforme éducative. Gestion des utilisateurs avec Firebase, design responsive en Tailwind CSS.',
        technologies: ['Firebase', 'TailwindCss','vue.js'],
        demoLink: 'https://app-for.vercel.app/',
        repoLink: 'https://github.com/Benisgs/vue-js/tree/master/vue-js',
        image:formation,
    },
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn btn-accent w-2/3" href={project.demoLink}>
                                Demo
                                <Video className="w-4" />
                            </a>

                            <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                <Github className="w-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects