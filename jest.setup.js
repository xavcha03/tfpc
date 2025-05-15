jest.mock('expo-constants', () => ({
  manifest: {
    extra: {
      SUPABASE_URL: 'https://fake.supabase.co',
      SUPABASE_ANON_KEY: 'FAKE-KEY',
    },
  },
}))

import '@testing-library/jest-native/extend-expect' 