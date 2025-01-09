// serviceWorkerRegistration.js
// Si vous voulez en savoir plus sur la gestion des Service Workers, consultez la documentation : https://developers.google.com/web/fundamentals/primers/service-workers

// Ce fichier enregistre le service worker si le navigateur le supporte
export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          console.log('Service Worker enregistré avec succès :', registration);
        })
        .catch((error) => {
          console.log('Échec de l\'enregistrement du Service Worker :', error);
        });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}

