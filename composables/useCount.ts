import { ref } from "vue";

export const useCount = () => {
  const count = ref(1);

  const setCount = () => {
    count.value += 1;
  }
  return {
    count,
    setCount
  }
}
