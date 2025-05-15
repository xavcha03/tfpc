# Intégration de Supabase dans Expo

## 1. Variables d'environnement
- **SUPABASE_URL** : URL de ton projet Supabase (publique)
- **SUPABASE_ANON_KEY** : Clé publique (anon) pour accès client
- **SUPABASE_DB_PASSWORD** : (optionnel, usage backend uniquement, jamais dans l'app mobile)

### Où les mettre ?
- `.env` : pour les scripts locaux, jamais versionné
- `app.json` > `extra` : pour injecter dans l'app Expo

```json
"extra": {
  "SUPABASE_URL": "https://tonprojet.supabase.co",
  "SUPABASE_ANON_KEY": "ta_clé_anon"
}
```

## 2. Connexion dans l'app
Dans `app/supabase/client.ts` :
```ts
import { createClient } from '@supabase/supabase-js'
import Constants from 'expo-constants'

const supabaseUrl = Constants.manifest?.extra?.SUPABASE_URL
const supabaseAnonKey = Constants.manifest?.extra?.SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

## 3. Bonnes pratiques
- **Ne jamais exposer SUPABASE_DB_PASSWORD** dans l'app mobile
- Toujours utiliser la clé `anon` côté client
- Centraliser la logique Supabase dans `app/supabase/`
- Documenter les helpers ou requêtes complexes dans ce dossier

## 4. Ressources utiles
- [Documentation Supabase](https://supabase.com/docs)
- [@supabase/supabase-js](https://github.com/supabase/supabase-js) 