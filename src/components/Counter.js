import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

function Counter() {
  // Date de début (24 janvier 2023)
  const startDate = new Date(2023, 0, 24); // Mois 0 = janvier

  // Définir l'état pour les jours, heures, minutes, et secondes
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Fonction pour mettre à jour la durée
    const updateTime = () => {
      const today = new Date();

      // Calcul des différences
      const daysTogether = differenceInDays(today, startDate);
      const hoursTogether = differenceInHours(today, startDate) % 24; // Pour obtenir les heures restantes après les jours
      const minutesTogether = differenceInMinutes(today, startDate) % 60; // Pour obtenir les minutes restantes après les heures
      const secondsTogether = differenceInSeconds(today, startDate) % 60; // Pour obtenir les secondes restantes après les minutes

      // Mettre à jour l'état avec les nouvelles valeurs
      setTime({
        days: daysTogether,
        hours: hoursTogether,
        minutes: minutesTogether,
        seconds: secondsTogether,
      });
    };

    // Mettre à jour la durée toutes les secondes (1000ms = 1 seconde)
    const intervalId = setInterval(updateTime, 1000);

    // Nettoyage de l'intervalle lorsqu'on quitte le composant
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <h1 className="text-2xl font-bold text-gray-800">💖 Days Together</h1>
      <p className="text-4xl font-extrabold text-pink-600">
        {time.days} days {time.hours} hours {time.minutes} minutes {time.seconds} seconds
      </p>
      <p className="text-gray-500 mt-2">since {startDate.toDateString()}</p>
    </div>
  );
}

export default Counter;

