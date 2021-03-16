<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // event handler for Pin Task
  function PinTask() {
    dispatch("onPinTask", {
      id,
    });
  }

  // event handler for Archive Task
  function ArchiveTask() {
    dispatch("onArchiveTask", {
      id,
    });
  }

  // Task props
  export let id: string;
  export let title: string;
  export let state: string;
  export let updated_at: Date;
</script>

<div class="list-item">
  <input type="text" value={title} readonly />
</div>
