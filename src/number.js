export default function useNumbers(number) {
  function increment() {
    number.value++
  }
  function decrement() {
    number.value--
  }
  return {increment, decrement};
}
