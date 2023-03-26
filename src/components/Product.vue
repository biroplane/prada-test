<script setup>
import { computed, ref } from 'vue'
import ColorPicker from './ColorPicker.vue'
import ImageGallery from './ImageGallery.vue'
import QuantityPicker from './QuantityPicker.vue'
import SizePicker from './SizePicker.vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
const emits = defineEmits(['addToCart'])
const colorImage = ref('')
const selectedColor = ref('')
const selectedSize = ref('')
const selectedQty = ref(1)
const isFavourite = ref(false)
const disabledButton = computed(() => selectedColor.value == '' || selectedSize.value == '')
const price = computed(() => {
  const _p = props.item.price.find((p) => p.usage == 'Display')
  const _v = new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(_p.value)
  return _v
})

const updateImg = (e) => {
  console.log('Update image ', e)
  colorImage.value = e
}
// const thumbnail = computed(
//   () => colorImage.value || selectedColor.value.thumbnail || props.item.thumbnail_ovr
// )

const addToCart = () => {
  const _item = {
    qty: selectedQty.value,
    size: selectedSize.value,
    color: selectedColor.value,
    name: props.item.name,
    description: props.item.shortDescription,
    price: props.item.price.find((p) => p.usage == 'Display').value
  }
  emits('addToCart', { ..._item })
}
</script>

<template>
  <div class="grid-12 container">
    <div class="image-gallery-container">
      <ImageGallery :item="item" />
    </div>
    <div class="data">
      <h3>{{ item.name }}</h3>
      <div class="flex">
        <ul class="stars">
          <li>✭</li>
          <li>✭</li>
          <li>✭</li>
          <li>✭</li>
          <li>✭</li>
        </ul>
        <p class="reviews">- Read reviews(02) | <strong> Write review</strong></p>
      </div>
      <div class="price">{{ price }}</div>
      <p class="description">
        {{ item.longDescription }}
      </p>
      <div class="details">
        <div class="variants">
          <ColorPicker
            :colors="item.otherVariants"
            v-model="selectedColor"
            @change="updateImg($event)"
          ></ColorPicker>
          <SizePicker v-model="selectedSize" :sizes="item.sizeCodes"></SizePicker>
        </div>
        <div class="quantity-stock">
          <QuantityPicker v-model="selectedQty"></QuantityPicker>
          <div class="stock"><i class="fa-solid fa-circle-check"></i> In stock</div>
        </div>
      </div>
      <div class="additional-info">
        <table>
          <tr>
            <th>SKU</th>
            <td>M107-B</td>
          </tr>
          <tr>
            <th>CATEGORY</th>
            <td>Women / T-Shirt</td>
          </tr>
        </table>
      </div>
      <div class="ctas">
        <button class="add" :disabled="disabledButton" @click="addToCart">ADD TO CART</button>
        <button class="save" @click="isFavourite = !isFavourite">
          <i class="fa-heart" :class="[isFavourite ? 'fa-solid text-red' : 'fa-regular']"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<style>
/* .main-image {
  width: 700px;
  height: 710px;
  background-color: #f7f7f7;
} */
.image-gallery-container {
  grid-column: span 7;
}
.data {
  margin-left: var(--space);
  grid-column: span 5;
}
.data .details {
  padding: var(--half-space) 0 var(--space);
  border-bottom: 1px solid #f0f0f0;
  border-top: 1px solid #f0f0f0;
}
.data .flex {
  display: flex;
  align-items: center;
  gap: 35px;
}
.data h3 {
  font-size: 22px;
}
.data ul.stars {
  display: flex;
  color: #ffd800;
}
.data p.reviews {
  font-size: 12.41px;
  color: #909090;
  font-style: italic;
}
.data p.reviews strong {
  color: black;
}
.data .price {
  font-weight: 600;
  font-size: 26px;
  margin: var(--half-space) 0;
}
.data p.description {
  color: #909090;
  font-size: 14px;
  padding-bottom: var(--half-space);
}
.data .variants {
  margin: var(--half-space) 0;
  display: flex;
  gap: var(--half-space);
}
.quantity-stock {
  display: flex;
  align-items: center;
  gap: var(--half-space);
}
.data .stock {
  color: #49c747;
  font-style: italic;
  font-weight: 500;
}
.additional-info {
  margin-top: var(--half-space);
}
.additional-info table {
  width: 100% !important;
}
.additional-info table th {
  width: 50%;
  padding: 10px 0;
  font-weight: 600;
}
.additional-info table td {
  width: 50%;
  color: #909090;
}
.ctas {
  margin-top: var(--huge-space);
  display: flex;
  gap: 14px;
}
.ctas .text-red {
  color: #e6395e;
}
.ctas button.save:has(.text-red) {
  border-color: #e6395e;
}
.ctas button.add {
  padding: 0 40px;
  height: 45px;
  background-color: #e6395e;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
  cursor: pointer;
}
.ctas button.add:disabled {
  opacity: 0.75;
  cursor: not-allowed;
  white-space: nowrap;
}
.ctas button.save {
  border: 1px solid #e5e5e5;
  height: 45px;
  width: 45px;
  padding: 12px;
}
@media screen and (max-width: 480px) {
  .image-gallery-container {
    grid-column: span 12;
  }
  .main-image {
    width: 100% !important;
  }
  .data {
    margin-left: 0;
    grid-column: span 12;
  }
  .ctas {
    margin-top: 35px;
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
  .ctas button.add {
    padding: 0 20px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .variants {
    flex-direction: column;
  }
}
@media screen and (min-width: 1025px) {
}
</style>
