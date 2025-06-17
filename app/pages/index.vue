<template>
  <div :class="$style.component">
    <LinkButton to="/cache" :class="$style.button">
      Cache test
    </LinkButton>
  </div>
</template>

<style module>
  .component {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: grid;
    place-items: center;
  }
</style>
