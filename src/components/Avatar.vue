<template>
  <div>
    <img v-if="imageUrl" :src="imageUrl" class="h-24 w-24 rounded-full ml-12 mt-1 flex-0" />
    <div v-else class="h-24 w-24 rounded-full ml-12 mt-1 flex-0 flex items-center text-3xl text-white" :class="backgroundColor">
      <span class="mx-auto">{{ initials }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    imageUrl: String,
    athleteName: String,
  },
  computed: {
    initials: function () {
      return this.athleteName.split(" ").map((name) => name[0]).join("").toUpperCase()
    },
    backgroundColor: function () {
      const lastLetter = this.initials.slice(-1)
      const colorOne = ["A", "B", "C", "D", "E"]
      const colorTwo = ["F", "G", "H", "I", "J"]
      const colorThree = ["K", "L", "M", "N"]
      const colorFour = ["O", "P", "Q", "R"]
      const colorFive = ["S", "T", "U", "V"]
      const colorSix = ["W", "X", "Y", "Z"]

      if (colorOne.includes(lastLetter)) {
        return "bg-avatar-1"
      }
      if (colorTwo.includes(lastLetter)) {
        return "bg-avatar-2"
      }
      if (colorThree.includes(lastLetter)) {
        return "bg-avatar-3"
      }
      if (colorFour.includes(lastLetter)) {
        return "bg-avatar-4"
      }
      if (colorFive.includes(lastLetter)) {
        return "bg-avatar-5"
      }
      if (colorSix.includes(lastLetter)) {
        return "bg-avatar-6"
      }
      return ""
    }
  }
};
</script>
