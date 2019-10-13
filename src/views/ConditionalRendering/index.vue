<template>
  <div>
    <h1>Example 1:</h1>
    <section>
      <label>
        <input
          v-model="newsletter"
          type="checkbox" /> รับข่าวสารจากทางเว็บไซต์ 📰
      </label>
      <div v-if="newsletter === true">
        คุณต้องการรับข่าวสารจากทางเว็บไซต์ 📰
      </div>
    </section>

    <h1 style="margin-top:1rem">
      Example 2:
    </h1>
    <section>
      <label>
        <input
          v-model="spicy"
          type="checkbox" /> ทานเผ็ดหรือไม่ 🌶?
      </label>
      <div v-if="spicy">
        คุณทานเผ็ด 🌶
      </div>
      <div v-else>
        คุณไม่ทานเผ็ด ❌🌶
      </div>
    </section>

    <h1 style="margin-top:1rem">
      Example 3:
    </h1>
    <section>
      กรุณาเลือก Topping ไอศกรีม 🍨:
      <br />
      <label>
        <input
          v-model="topping"
          type="radio"
          value="none" /> ไม่เพิ่ม 🙂
      </label>
      <br />
      <label>
        <input
          v-model="topping"
          type="radio"
          value="rainbow" /> สายรุ้ง 🌈
      </label>
      <br />
      <label>
        <input
          v-model="topping"
          type="radio"
          value="chocolate" /> ช็อกโกแลต 🍫
      </label>
      <br />
      <div v-if="topping === 'rainbow'">
        เพิ่ม Topping สายรุ้ง 🌈 +10 บาท
      </div>
      <div v-else-if="topping === 'chocolate'">
        เพิ่ม Topping ช็อกโกแลต 🍫 +15 บาท
      </div>
      <div v-else>
        ไม่เพิ่ม Topping 🙂
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsletter: false,
      spicy: true,
      topping: 'none'
    }
  }
}
</script>
