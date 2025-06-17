<template>
  <div :class="$style.component">
    <h1>Notification destinations</h1>

    <template v-if="isLoading">
      Loading destinations...
    </template>

    <template v-else-if="destinations.data">
      Destinations found: {{ destinations.data.length }}
    </template>

    <template v-else>
      No destinations found.
    </template>
  </div>

</template>

<script lang="ts" setup>
  import { getDestinationsByType } from '~/pinia-colada/queries/notifications';

  const { state: destinations, isLoading } = useQuery(
    getDestinationsByType,
    () => 'info' as const
  )
</script>

<style module>
  .component {
    display: grid;
    place-items: center;
  }

  h1 {
    color: salmon;
    font-size: 20px;
    font-weight: bold;
  }
</style>
