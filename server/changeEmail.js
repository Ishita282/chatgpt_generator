const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with service account credentials
admin.initializeApp({
  credential: admin.credential.cert('/home/ishita/secret_imp/chatgpt-72c36-firebase-adminsdk-fbsvc-2e3112cdd9.json'),
});

// The current email and new email
const currentEmail = 'vrisha2248@gmail.com';  // The user's current email
const newEmail = 'little.mini.ishita@gmail.com';  // The new email to update to

// Retrieve the user by email to get the UID
admin.auth().getUserByEmail(currentEmail)
  .then((userRecord) => {
    // Now that you have the userRecord, you can get the UID and update the email
    const uid = userRecord.uid;

    // Update the user's email
    return admin.auth().updateUser(uid, {
      email: newEmail,
    });
  })
  .then((userRecord) => {
    console.log('Successfully updated user email:', userRecord.toJSON());
  })
  .catch((error) => {
    console.error('Error fetching or updating user:', error);
  });
