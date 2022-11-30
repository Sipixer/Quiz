import { useGameContext } from "./useGameContext";

const EndGame = () => {
  const { Reset, point, NumberOfQuestion } = useGameContext();
  return (
    <div className="center end">
      <h2>Bravo tu es arrivé au but de ce test ! 🎉</h2>
      <div className="resultat">
        <p>Tu as eu obtenu,</p>
        <h3>
          {point} / {NumberOfQuestion}
        </h3>
      </div>
      <div>
        <p>Merci d'avoir essayé cette application.</p>
      </div>

      <div className="warning">
        <p>🚧Mon défi était de créer l'application en 2 heures.🚧</p>
        <p>
          Crée en <strong>2</strong> heure et <strong>07</strong> minutes
        </p>
      </div>
      <div className="button" onClick={Reset}>
        Réessayer
      </div>
      <div className="avis">
        <p>Pour toute remarque ou suggestion:</p>
        <p>
          Contacter moi par mail: <strong>sylvainrougie@orange.fr</strong>
        </p>
      </div>
    </div>
  );
};

export default EndGame;
