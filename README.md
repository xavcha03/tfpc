# T'es Fait Pour Ça ! (TFPC)

Bienvenue sur le dépôt du projet **T'es Fait Pour Ça !**

## Pitch
Un jeu mobile convivial où les joueurs s'attribuent des métiers et des traits de caractère, puis votent pour désigner qui serait le plus (ou le moins) apte à exercer un métier donné. Idéal pour briser la glace et rire entre amis !

## Stack technique
- **React Native** (Expo)
- **TypeScript**
- **Markdown** pour la documentation

## Comment lancer le projet

1. Installer les dépendances :
   ```bash
   cd app
   npm install
   ```
2. Lancer l'application en mode développement :
   ```bash
   npx expo start
   ```

---

Toute la documentation se trouve dans le dossier `docs/`. 

## Structure du projet

- `app/` : Code source de l'application (screens, components, supabase, etc.)
- `assets/` : Images, icônes, splash, etc.
- `docs/` : CSV, idées, backlog, documentation fonctionnelle
- `A documenter/` : Documentation technique (guides, DevOps, tests, etc.)
- `.env` : Variables d'environnement (non versionné)
- `.gitignore` / `.cursorignore` : Fichiers/dossiers à ignorer

## Lancer le projet

```bash
npx expo start --tunnel
```
- Ouvre l'URL dans ton navigateur Windows (si WSL)
- Scanne le QR code avec Expo Go

## Documentation technique

Retrouve tous les guides et bonnes pratiques dans le dossier `A documenter/` :

- **tests.md** : Bonnes pratiques de test, organisation, astuces Jest
- **expo_wsl.md** : Lancer Expo sous WSL, accès QR code, mode Tunnel
- **structure_projet.md** : Organisation du projet, utilité de chaque dossier/fichier
- **supabase.md** : Configuration et bonnes pratiques Supabase
- **devops.md** : Astuces DevOps, nettoyage, gestion des dépendances, sécurité

### Points clés
- Centraliser la doc technique dans `A documenter/`
- Toujours utiliser le mode Tunnel sous WSL
- Ne jamais exposer de secrets dans le code ou dans l'app mobile
- Utiliser `.gitignore` et `.cursorignore` pour garder un repo propre
- Privilégier les tests unitaires et documenter les stratégies de test

---

Pour toute question technique, consulte d'abord le dossier `A documenter/` ! 