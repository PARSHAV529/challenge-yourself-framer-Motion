import { createContext, useState } from 'react';

export const ChallengesContext = createContext({
  challenges: [],
  addChallenge: () => {},
  updateChallengeStatus: () => {},
});

export default function ChallengesContextProvider({ children }) {
  const [challenges, setChallenges] = useState([{ title: "lern Animation", description: "framer motion", deadline: "2024-05-17", image: { "src": "/src/assets/working-on-computer.png", alt: "Person doing work on a computer." }, id: "0.0271129095861391", status: "active" }]);

  function addChallenge(challenge) {
    setChallenges((prevChallenges) => [
      { ...challenge, id: Math.random().toString(), status: 'active' },
      ...prevChallenges,
    ]);

  }

  function deleteChallenge(challengeId) {
    setChallenges((prevChallenges) =>
      prevChallenges.filter((challenge) => challenge.id !== challengeId)
    );
  }

  function updateChallengeStatus(challengeId, newStatus) {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus };
        }
        return challenge;
      })
    );
  }

  const challengesContext = {
    challenges,
    addChallenge,
    deleteChallenge,
    updateChallengeStatus,
  };
  // localStorage.setItem('challenges', challenges)

  return (
    <ChallengesContext.Provider value={challengesContext}>
      {children}
    </ChallengesContext.Provider>
  );
}
