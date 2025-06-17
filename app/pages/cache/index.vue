<template>
  <div :class="$style.page">
    <div v-if="isLoading" >
      Loading notifications...
    </div>

    <div
      v-else-if="notifications.data"
      :class="$style.data"
    >
      <NotificationDestinations />

      <BaseButton
        :disabled="isDeleting"
        @click="onDeleteClick"
      >
        <template v-if="isDeleting">
          Deleting...
        </template>

        <template v-else>
          Delete notifications
        </template>
      </BaseButton>
    </div>

    <div
      v-else
      :class="$style.data"
    >
      No notifications found.

      <BaseButton
        :disabled="isCreating"
        @click="onCreateClick"
      >
        <template v-if="isCreating">
          Creating...
        </template>

        <template v-else>
          Create notification
        </template>
      </BaseButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useCreateNotification, useDeleteNotification } from '~/pinia-colada/mutations/notifications';
  import { getNotificationsByType } from '~/pinia-colada/queries/notifications';

  const { createNotification, isLoading: isCreating } = useCreateNotification();
  const { deleteNotification, isLoading: isDeleting } = useDeleteNotification();

  const { state: notifications, isLoading } = useQuery(
    getNotificationsByType,
    () => 'info' as const
  )

  function onCreateClick() {
    createNotification('info')
  }

  function onDeleteClick() {
    deleteNotification('info')
  }
</script>

<style module>
  .page {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: grid;
    place-items: center;
  }

  .data {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
</style>
