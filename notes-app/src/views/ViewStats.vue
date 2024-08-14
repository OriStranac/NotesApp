<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="loveNoteBalls"
      class="input"
      type="text"
      placeholder="Do you love noteballs?"
      v-auto-focus
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNotesStore } from "@/stores/storeNotes";
import { vAutoFocus } from "@/directives/vAutoFocus";
import { useWatchCharacters } from "@/use/useWatchCharacters";

const storeNotes = useNotesStore();
const loveNoteBalls = ref("");

useWatchCharacters(loveNoteBalls, 50);
</script>