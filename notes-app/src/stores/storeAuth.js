import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/js/firebase';
import { useNotesStore } from "@/stores/storeNotes";

export const useStoreAuth = defineStore('storeAuth', {
    state: () => {
        return {
            user: {}
        }
    },
    actions: {
        init() {
            const storeNotes = useNotesStore();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user.id = user.uid;
                    this.user.email = user.email;
                    this.router.push('/');
                    storeNotes.init();
                } else {
                    this.user = {};
                    this.router.replace('/auth');
                    storeNotes.clearNotes();
                }
            });
        },
        registerUser(credentials) {
            createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        },
        loginUser(credentials) {
            signInWithEmailAndPassword(auth, credentials.email, credentials.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        },
        logoutUser() {
            signOut(auth)
                .then(() => {
                    console.log('User signed out');
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    },

});


