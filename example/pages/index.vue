<template>
  <div class="container">
    <div class="block" v-motion-slide-bottom />
  </div>
</template>

<style>
.container {
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
}

.block {
  width: 50px;
  height: 50px;
  background-color: red;
}
</style>
