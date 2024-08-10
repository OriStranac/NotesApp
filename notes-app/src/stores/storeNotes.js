import { defineStore } from "pinia";

export const useNotesStore = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                {
                    id: "id1",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
                },
                {
                    id: "id2",
                    content: "Test test",
                },
                {
                    id: "id3",
                    content: "Testna",
                },
            ]
        }
    },
    actions: {
        addNote(newNoteContent) {
            let currentDate = new Date().getTime(),
                id = currentDate.toString();

            let note = {
                id,
                content: newNoteContent,
            };

            this.notes.unshift(note);
        },
        deleteNote(idToDelete) {
            this.notes = this.notes.filter(note =>
                note.id !== idToDelete);
        },
        updateNote(id, content) {
            let index = this.notes.findIndex(note =>
                note.id === id);
            this.notes[index].content = content;
        }
    },
    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter(note => note.id === id)[0].content;
            };
        },
        totalNotesCount: (state) => {
            return state.notes.length;
        },
        totalCharactersCount: (state) => {
            return state.notes.reduce((acc, note) =>
                acc + note.content.length, 0);
        },
    },
});


