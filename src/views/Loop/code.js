export default `
<template>
  <div>
      <div v-for="member in members" :key="member.id">
         <p>name: {{member.name}}</p>
         <p>career: {{member.career}}</p>
         <p>level: {{member.level}}</p>
         <hr>
      </div>
  </div>
</template>

<script>
export default {
   data () {
      return {
         members: [
            {id: 1, name: "Dracky", career: "Hunter", level: 18},
            {id: 2, name: "Shopper", career: "Mage", level: 15},
            {id: 3, name: "Dracky", career: "Blades", level: 20},
            {id: 4, name: "Dracky", career: "Assassin", level: 19},
            {id: 5, name: "Dracky", career: "Knight ", level: 23}
         ]
      }
   }
}
</script>
`
