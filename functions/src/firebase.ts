import * as admin from 'firebase-admin';
import Messaging = admin.messaging.Messaging;

// Initialize our project application
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const firebaseMessaging: Messaging = admin.messaging();

// Export our references
export const fms = firebaseMessaging;