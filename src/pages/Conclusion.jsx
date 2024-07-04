import Logo from "../assets/images/logo3.png";

function Conclusion() {
  return (
    <>
      <h1 className="text-4xl font-bold flex justify-center mb-4 mt-2">Conclusion</h1>
      
      <div className="max-w-4xl mx-auto">
        <p className="mb-6 text-center">
          Afin de favoriser un environnement de travail inclusif et de garantir que tous nos collègues, y compris ceux qui sont daltoniens, puissent travailler efficacement, voici quelques directives à suivre :
        </p>

        <h2 className="text-2xl font-bold text-center mb-4">Utilisation des Couleurs</h2>
        <div className="mb-4">
          <p className="mb-2"><strong>Évitez les combinaisons de couleurs rouge-vert et bleu-jaune</strong> : Ces combinaisons peuvent être particulièrement difficiles à distinguer pour les personnes daltoniennes.</p>
          <p className="mb-2"><strong>Utilisez des contrastes élevés</strong> : Optez pour des couleurs avec un contraste élevé pour garantir une meilleure lisibilité. Par exemple, des textes noirs sur des fonds blancs ou vice versa.</p>
          <p className="mb-2"><strong>Incluez des motifs ou des textures</strong> : Pour les graphiques et les diagrammes, utilisez des motifs ou des textures différents en plus des couleurs pour différencier les sections.</p>
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">Présentations et Diapositives</h2>
        <div className="mb-4">
          <p className="mb-2"><strong>Utilisez des légendes et des annotations</strong> : Indiquez clairement les informations importantes avec des légendes et des annotations textuelles.</p>
          <p className="mb-2"><strong>Privilégiez les icônes et symboles</strong> : Utilisez des icônes et des symboles pour représenter des informations importantes au lieu de se fier uniquement à la couleur.</p>
          <p className="mb-2"><strong>Testez vos présentations</strong> : Utilisez des outils en ligne pour simuler le daltonisme et vérifier que vos présentations restent claires et compréhensibles.</p>
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">Emails et Documents</h2>
        <div className="mb-4">
          <p className="mb-2"><strong>Privilégiez le texte au surlignage</strong> : Évitez de surligner des informations importantes en utilisant des couleurs uniquement. Préférez l'usage de l'italique, du gras ou du soulignement.</p>
          <p className="mb-2"><strong>Utilisez des descriptions textuelles pour les graphiques</strong> : Ajoutez des descriptions textuelles pour tous les graphiques et images inclus dans vos documents.</p>
          <p className="mb-2"><strong>Faites attention aux liens hypertexte</strong> : Assurez-vous que les liens hypertexte sont facilement distinguables du texte environnant en utilisant des soulignements en plus de la couleur.</p>
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">Environnement de Travail</h2>
        <div className="mb-4">
          <p className="mb-2"><strong>Étiquetez les objets importants</strong> : Utilisez des étiquettes avec du texte clair pour identifier les objets importants au lieu de vous fier uniquement aux codes couleur.</p>
          <p className="mb-2"><strong>Formez-vous sur le daltonisme</strong> : Prenez le temps de vous informer sur les différents types de daltonisme et sur les défis que rencontrent les personnes daltoniennes.</p>
        </div>

        <p className="mb-4 text-center">
          En suivant ces directives, nous pouvons tous contribuer à créer un environnement de travail plus inclusif et accessible pour nos collègues daltoniens. N'hésitez pas à demander des retours et des suggestions à vos collègues pour améliorer continuellement nos pratiques.
        </p>
        <div className="text-center mt-10">
          <p className="mb-7 text-2xl">Merci d'avoir suivi l'expérience.</p>
          <div className="flex justify-center space-x-4">
            <a href="/equipe" className="border hover:scale-95 duration-300 text-white bg-blue-500 hover:bg-blue-700 p-3 rounded-md">
              Voir l'équipe
            </a>
            <a href="/" className="border hover:scale-95 duration-300 text-white bg-blue-500 hover:bg-blue-700 p-3 rounded-md">
              Retourner à l'accueil
            </a>
          </div>
        <div className="flex justify-center mt-10">
          <img src={Logo} className="h-[400px] w-auto" alt="Logo" />
        </div>
        </div>
      </div>
    </>
  );
}

export default Conclusion;
