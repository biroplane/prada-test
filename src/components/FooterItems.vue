<script setup>
defineProps({
  items: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: ''
  }
})
const component = (item) => {
  let _c
  console.log('Check item ', item.href, item.href != '')
  switch (true) {
    case item.input:
      _c = 'input'
      break
    case item.href != '':
      _c = 'a'
      break
    default:
      _c = 'div'
      break
  }
  return _c
}
</script>
<template>
  <div class="colspan" v-bind="$attrs">
    <h4>{{ title }}</h4>
    <ul>
      <li v-for="(item, i) in items" :key="i">
        <component :is="component(item)" :placeholder="item.label" :class="{ icon: item.icon }">
          <i class="fa-solid" :class="item.icon" v-if="item.icon"></i>
          <span v-html="item.label"></span>
        </component>
      </li>
    </ul>
  </div>
</template>
<style scoped>
h4 {
  font-size: 21px;
  font-weight: 600;
  display: block;
  margin-bottom: 24px;
}
ul {
  display: flex;
  flex-direction: column;
}
li {
  color: #909090;
  padding: 12px 0;
}
li .icon {
  display: flex;
  gap: 10px;
}
li i {
  color: black;
}
li input {
  border: 1px solid #909090;
  padding: 10px;
}
</style>
