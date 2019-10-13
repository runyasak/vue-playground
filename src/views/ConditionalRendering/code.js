export default `<template>
<div>
  <h1>Example 1:</h1>
  <section>
    <label>
      <input type="checkbox" v-model="newsletter" /> รับข่าวสารจากทางเว็บไซต์ 📰
    </label>
    <div v-if="newsletter === true">คุณต้องการรับข่าวสารจากทางเว็บไซต์ 📰</div>
  </section>

  <h1>Example 2:</h1>
  <section>
    <label>
      <input type="checkbox" v-model="spicy" /> ทานเผ็ดหรือไม่ 🌶?
    </label>
    <div v-if="spicy">คุณทานเผ็ด 🌶</div>
    <div v-else>คุณไม่ทานเผ็ด ❌🌶</div>
  </section>

  <h1>Example 3:</h1>
  <section>
    กรุณาเลือก Topping ไอศกรีม 🍨:
    <br />
    <label>
      <input type="radio" v-model="topping" value="none" /> ไม่เพิ่ม 🙂
    </label>
    <br />
    <label>
      <input type="radio" v-model="topping" value="rainbow" /> สายรุ้ง 🌈
    </label>
    <br />
    <label>
      <input type="radio" v-model="topping" value="chocolate" /> ช็อกโกแลต 🍫
    </label>
    <br />
    <div v-if="topping === 'rainbow'">เพิ่ม Topping สายรุ้ง 🌈 +10 บาท</div>
    <div v-else-if="topping === 'chocolate'">เพิ่ม Topping ช็อกโกแลต 🍫 +15 บาท</div>
    <div v-else>ไม่เพิ่ม Topping 🙂</div>
  </section>
</div>
</template>

<script>
export default {
data() {
  return {
    newsletter: false,
    spicy: true,
    topping: "none"
  };
}
};
</script>
`
