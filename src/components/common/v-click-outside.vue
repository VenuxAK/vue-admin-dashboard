<script setup>
import { onMounted, onUnmounted } from "vue";

const handleClickOutside = (event) => {
  if (!(event.target === el.value || el.value.contains(event.target))) {
    binding.value(event);
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

// export default {
//   created(el, binding) {
//     el.clickOutsideEvent = (event) => {
//       if (!(el === event.target || el.contains(event.target))) {
//         binding.value(event)
//       }
//     }
//     document.addEventListener('click', el.clickOutsideEvent)
//   },
//   unmounted(el) {
//     document.removeEventListener('click', el.clickOutsideEvent)
//   },
// }
</script>
