<template>
  <div class="container">
    <div class="wrap">
      <div class="inner">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 60px;
}

.wrap {
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  background: #fafafb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.inner {
  padding: 36px 32px;
  text-align: center;
}
</style>
