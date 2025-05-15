# Bonnes pratiques DevOps pour ce projet

## Nettoyage et structure
- Toujours garder une structure de projet claire (pas de sous-dossiers inutiles)
- Nettoyer les dossiers/fichiers obsolètes après chaque refonte
- Utiliser `.gitignore` pour éviter de versionner les fichiers sensibles ou inutiles
- Utiliser `.cursorignore` pour accélérer l'analyse IA et éviter les faux positifs

## Gestion des dépendances
- Installer les dépendances avec `npx expo install` pour garantir la compatibilité avec Expo
- Utiliser `npx expo-doctor` pour vérifier l'état du projet et corriger les versions
- Ne jamais installer directement les types React Native (`@types/react-native`)

## Commandes utiles
- Lancer Expo en mode tunnel (recommandé sous WSL) :
  ```bash
  npx expo start --tunnel
  ```
- Vérifier les dépendances :
  ```bash
  npx expo-doctor
  ```
- Nettoyer les modules :
  ```bash
  rm -rf node_modules package-lock.json && npm install
  ```

## Sécurité
- Ne jamais exposer de secrets dans le code ou dans `app.json` (sauf clé publique Supabase)
- Toujours garder `.env` hors du contrôle de version

## Documentation
- Centraliser la doc technique dans `A documenter/`
- Documenter chaque étape DevOps ou astuce spécifique au projet 