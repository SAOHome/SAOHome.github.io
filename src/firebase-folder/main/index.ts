import { initializeApp } from 'firebase/app'
import {
  getDatabase,
  ref,
  child,
  get,
} from 'firebase/database'

import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'

import type { StringKeyObject } from '@other-support/Types'

const firebaseConfig = {
  apiKey:
    process.env
      .NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL:
    process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)

const getRealTimeData =
  async (): Promise<StringKeyObject> => {
    const dbRef = ref(getDatabase())

    const snapshot = await get(child(dbRef, '/'))

    if (!snapshot.exists()) {
      throw new Error('snapshot not exists')
    }

    const data = snapshot.val()

    return data
  }

const signIn = async ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<StringKeyObject> => {
  const auth = getAuth()

  const userCredential =
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    )

  const user = userCredential.user

  return user
}

export const signInThenGetRealTimeData = async ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<StringKeyObject> => {
  if (!firebase) {
    throw new Error('firebase not found')
  }

  const user = await signIn({
    email,
    password,
  })

  if (!user) {
    throw new Error('user not found')
  }

  const realTimeData = await getRealTimeData()

  return realTimeData
}

export const getPublicRealTimeData =
  async (): Promise<StringKeyObject> => {
    const dbRef = ref(getDatabase())

    const snapshot = await get(
      child(dbRef, '/public')
    )

    if (!snapshot.exists()) {
      throw new Error('snapshot not exists')
    }

    const data = snapshot.val()

    return data
  }
