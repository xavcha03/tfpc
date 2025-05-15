# Structure du projet Expo + Supabase

## Racine du projet
- `app/` : Contient tout le code source de l'application mobile (écrans, composants, logique, etc.)
- `assets/` : Images, icônes, polices, splash, etc.
- `app.json` : Configuration Expo (nom, version, variables d'environnement, etc.)
- `package.json` : Dépendances et scripts npm
- `node_modules/` : Dépendances installées (à ignorer dans git)
- `.env` : Variables d'environnement sensibles (jamais versionné)
- `.gitignore` : Fichiers/dossiers à ignorer par git
- `.cursorignore` : Fichiers/dossiers à ignorer par l'IA (Cursor)
- `README.md` : Présentation rapide du projet
- `docs/` : Documentation fonctionnelle, CSV de rôles/traits, idées, backlog, etc.
- `A documenter/` : Documentation technique, guides d'installation, astuces DevOps

## Détail du dossier `app/`
- `components/` : Composants réutilisables (UI, PlayerCard, Header, etc.)
- `screens/` : Écrans principaux (GameScreen, LobbyScreen, ResultScreen...)
- `supabase/` : Fichiers de connexion et helpers Supabase (`client.ts`)
- `App.tsx` : Point d'entrée principal de l'app (navigation, context, etc.)

## Bonnes pratiques
- Ne jamais versionner `.env` ou `node_modules/`
- Documenter chaque helper ou logique métier complexe dans `A documenter/`
- Utiliser le mode Tunnel Expo sous WSL
- Centraliser la configuration Supabase dans `app/supabase/client.ts`
- Utiliser `docs/` pour tout ce qui est fonctionnel, CSV, idées, backlog 