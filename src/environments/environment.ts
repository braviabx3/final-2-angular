// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'bookfix-firebase',
    appId: '1:503857968611:web:8055bbeb559760b28cdcd6',
    storageBucket: 'bookfix-firebase.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBfAqgIeenUhdV_LBE27neEz0Ze0ct5i0Q',
    authDomain: 'bookfix-firebase.firebaseapp.com',
    messagingSenderId: '503857968611',
    measurementId: 'G-XDLWZMVF56',
  },
  production: false,
  apiURL: 'https://www.googleapis.com/books/v1/volumes?'
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
