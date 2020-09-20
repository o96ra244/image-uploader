<template>
  <div>
    <svg
      class="check-circle"
      fill="black"
      height="35px"
      viewBox="0 0 24 24"
      width="35px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      />
    </svg>

    <p class="text">Uploaded Successfully!</p>
    <img :src="downloadUrl" alt="" class="image" />

    <div class="filepath">
      <p ref="downloadUrlText" class="filepath__text">{{ downloadUrl }}</p>
      <button class="filepath__button" @click="onClick">Copy link</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      downloadUrl: null
    };
  },
  mounted() {
    const downloadUrl = this.$store.getters["image/getDownloadUrl"];

    if (downloadUrl === undefined) {
      this.$router.push("/");
    }

    this.downloadUrl = downloadUrl;
    this.$store.dispatch("image/clearData");
  },
  methods: {
    onClick() {
      const range = document.createRange();
      range.selectNodeContents(this.$refs.downloadUrlText);

      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      document.execCommand("copy");
      selection.removeAllRanges();
    }
  }
};
</script>

<style lang="scss" scoped>
.check-circle {
  margin-bottom: 10px;
  fill: #219653;
}

.text {
  margin: 0 0 30px;
  color: #4f4f4f;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 27px;
  text-align: center;
}

.image {
  width: 100%;
  margin-bottom: 30px;
  border-radius: 12px;
}

.filepath {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  padding: 1px 1px 1px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #f6f8fb;

  &__text {
    flex: 1;
    margin: 0;
    padding: 0;
    overflow: hidden;
    color: #4f4f4f;
    font-family: Poppins;
    font-size: 8px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.035em;
    line-height: 1;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__button {
    margin-left: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    background: #2f80ed;
    color: #fff;
    font-family: Poppins;
    font-size: 8px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.035em;
    line-height: 12px;
    text-align: center;
  }
}
</style>
