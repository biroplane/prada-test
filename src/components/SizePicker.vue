<script setup lang="ts">
defineProps({
  sizes: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: String,
    default: ''
  }
})
defineEmits(['update:modelValue'])
</script>
<template>
  <div class="sizes">
    <p>Size</p>
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement)!.value)"
    >
      <option v-for="(size, s) in sizes as any[]" :key="s" :value="size.value">
        {{ size.value }}
      </option>
    </select>
  </div>
</template>
<style>
.sizes {
  display: flex;
  justify-content: baseline;
  width: 100%;
  gap: 30px;
}

.sizes select {
  width: 100%;
  height: 30px;
  background-color: #f4f4f4;
  font-size: 1rem;
  font-weight: 600;
  display: inline-block;
  line-height: 1.5em;
  padding: 3px 10px 0px 10px;

  /* reset */

  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  appearance: none;

  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8ZGVmcz4KPC9kZWZzPgo8ZyBzdHlsZT0ic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDA7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IGZpbGw6IG5vbmU7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNDA2NTkzNDA2NTkzNDAxNiAxLjQwNjU5MzQwNjU5MzQwMTYpIHNjYWxlKDIuODEgMi44MSkiID4KCTxwYXRoIGQ9Ik0gOTAgMjQuMjUgYyAwIC0wLjg5NiAtMC4zNDIgLTEuNzkyIC0xLjAyNSAtMi40NzUgYyAtMS4zNjYgLTEuMzY3IC0zLjU4MyAtMS4zNjcgLTQuOTQ5IDAgTCA0NSA2MC44IEwgNS45NzUgMjEuNzc1IGMgLTEuMzY3IC0xLjM2NyAtMy41ODMgLTEuMzY3IC00Ljk1IDAgYyAtMS4zNjYgMS4zNjcgLTEuMzY2IDMuNTgzIDAgNC45NSBsIDQxLjUgNDEuNSBjIDEuMzY2IDEuMzY3IDMuNTgzIDEuMzY3IDQuOTQ5IDAgbCA0MS41IC00MS41IEMgODkuNjU4IDI2LjA0MiA5MCAyNS4xNDYgOTAgMjQuMjUgeiIgc3R5bGU9InN0cm9rZTogbm9uZTsgc3Ryb2tlLXdpZHRoOiAxOyBzdHJva2UtZGFzaGFycmF5OiBub25lOyBzdHJva2UtbGluZWNhcDogYnV0dDsgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOyBmaWxsOiByZ2IoMCwwLDApOyBmaWxsLXJ1bGU6IG5vbnplcm87IG9wYWNpdHk6IDE7IiB0cmFuc2Zvcm09IiBtYXRyaXgoMSAwIDAgMSAwIDApICIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgo8L2c+Cjwvc3ZnPg==');
  background-size: 10px;
  background-position: 90%;
  background-repeat: no-repeat;
}
</style>
