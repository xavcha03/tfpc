# Tests unitaires et d'intégration avec Jest & Testing Library

## Installation des dépendances

```bash
npm install --save-dev jest @testing-library/react-native babel-jest ts-jest @types/jest
```

## Configuration de Jest

Créer ou modifier les fichiers suivants à la racine du projet :

### `jest.config.js`
```js
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|@testing-library|@react-native-community|@unimodules|expo(nent)?|expo-.*|@expo(nent)?/.*|react-clone-referenced-element|react-native-svg|@sentry/.*)'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
}
```

### `babel.config.js`
```js
module.exports = {
  presets: ['babel-preset-expo'],
};
```

### `jest.setup.js`
```js
jest.mock('expo-constants', () => ({
  manifest: {
    extra: {
      SUPABASE_URL: 'https://fake.supabase.co',
      SUPABASE_ANON_KEY: 'FAKE-KEY',
    },
  },
}))

import '@testing-library/jest-native/extend-expect'
```

### `tsconfig.json`
Ajouter (ou vérifier) :
```json
{
  "types": ["jest"]
}
```

## Structure recommandée

```
tests/
  supabase-client.test.ts
```

## Exemple de test : `tests/supabase-client.test.ts`
```ts
import { supabase } from '../app/supabase/client'

describe('Supabase client', () => {
  it('should be initialized with a valid URL and key', () => {
    expect(supabase).toBeDefined()
    expect(typeof supabase).toBe('object')
    expect(supabase.auth).toBeDefined()
  })
})
```

## Lancer les tests

```bash
npx jest
```

## Astuce
Pour mocker d'autres modules natifs, ajouter un `jest.mock('nom-du-module', ...)` dans `jest.setup.js`. 