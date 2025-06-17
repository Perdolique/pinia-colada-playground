<template>
  <button
    v-bind="$attrs"
    :class="$style.button"
  >
    <slot />
  </button>
</template>

<style module>
  .button {
    display: inline-block;
    padding: 12px 24px;
    background: #374151;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    transition: all 0.2s ease;
    border: none;
    cursor: pointer;

    &:hover {
      background: #4b5563;
      border-color: #4b5563;
    }

    &:active {
      background: #1f2937;
      border-color: #1f2937;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(55, 65, 81, 0.1);
    }

    &:disabled {
      background: #9ca3af;
      cursor: not-allowed;
    }
  }
</style>
