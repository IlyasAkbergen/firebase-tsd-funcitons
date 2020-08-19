import { RuntimeOptions, runWith } from 'firebase-functions';
import { rest } from './rest';
import { fms } from './firebase';

// Initialize Rest API
const express = rest(fms);
const settings: RuntimeOptions = {
    timeoutSeconds: 60,
    memory: '512MB'
};
export const api = runWith(settings)
	.region("asia-east2")
	.https.onRequest(express);