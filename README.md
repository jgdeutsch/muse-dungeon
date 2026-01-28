# Muse Dungeon

D&D 5e reference site and campaign tools — [musedungeon.com](https://musedungeon.com)

Built with Next.js 16, Firebase (Auth + Firestore), and Tailwind CSS 4. Deployed on Vercel.

## Local setup

```bash
npm install
cp .env.example .env.local   # fill in Firebase values
npm run dev
```

## Environment variables

All Firebase config is stored in env vars (not hardcoded). Copy `.env.example` to `.env.local` and fill in values from the Firebase console (`muse-dungeon` project).

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase Web API key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Auth domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase app ID |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | Google Analytics measurement ID |

These same vars must be set in Vercel for production deploys.

## Deploy

Vercel auto-deploys on push to `main`. Repo: `jgdeutsch/muse-dungeon`.
