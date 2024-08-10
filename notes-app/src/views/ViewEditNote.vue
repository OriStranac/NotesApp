<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor="gray"
      placeholder="Edit note"
      label="Edit note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="$router.back()"
          class="button is-link has-background-link mr-2"
        >
          Cancel
        </button>
        <button
          @click="handleSaveClicked"
          :disabled="!noteContent"
          class="button is-link has-background-success"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useNotesStore } from "@/stores/storeNotes";

const noteContent = ref("");
const storeNotes = useNotesStore();
const route = useRoute();
const router = useRouter();

noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>