<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="label">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          class="textarea"
          :placeholder="placeholder"
          ref="textAreaRef"
          v-auto-focus
          maxlength="100"
        ></textarea>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vAutoFocus } from "@/directives/vAutoFocus";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "primary",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const textAreaRef = ref(null);
const focusTextarea = () => {
  textAreaRef.value.focus();
};

defineExpose({
  focusTextarea,
});
</script>