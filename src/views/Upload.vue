<template>
  <div>
    <p class="heading">Upload your image</p>
    <p class="note">File should be Jpeg, Png,...</p>

    <div class="upload__area" @dragover="onDragover" @drop="onDrop">
      <img src="@/assets/images/upload.svg" alt="" />

      <p class="upload__text">Drag & Drop your image here</p>
    </div>

    <p class="note__or">Or</p>

    <label for="choose_input" class="label__button">
      Choose a file
      <input
        id="choose_input"
        class="upload__input--button"
        accept="image/jpeg, image/png"
        type="file"
        @change="onChange"
      />
    </label>
  </div>
</template>

<script>
export default {
  methods: {
    onDragover(e) {
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = "copy";
    },
    onDrop(e) {
      this.setFileDataToStore(e);
      this.next();
    },
    onChange(e) {
      this.setFileDataToStore(e);
      this.next();
    },
    setFileDataToStore(e) {
      e.preventDefault();
      e.stopPropagation();

      const files = e.target.files || e.dataTransfer.files;
      this.$store.dispatch("image/setFile", files[0]);
    },
    next() {
      this.$router.push("/uploading");
    }
  }
};
</script>

<style lang="scss" scoped>
.heading {
  margin-bottom: 15px;
  color: #4f4f4f;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 27px;
}

.note {
  margin-bottom: 30px;
  color: #828282;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 15px;
  text-align: center;

  &__or {
    color: #bdbdbd;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.035em;
    line-height: 18px;
    text-align: center;
  }
}

.upload {
  &__area {
    position: relative;
    box-sizing: border-box;
    width: 85%;
    margin: 0 auto 20px;
    padding-top: 35px;
    padding-bottom: 35px;
    border: 1px dashed #97bef4;
    border-radius: 12px;
    background: #f6f8fb;
  }

  &__img {
    width: 100%;
    max-width: 100px;
  }

  &__text {
    margin-top: 35px;
    color: #bdbdbd;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.035em;
    line-height: 18px;
  }

  &__input {
    &--drag {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }

    &--button {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
}

.label__button {
  display: inline-block;
  position: relative;
  padding: 8px 16px;
  border-radius: 8px;
  background: #2f80ed;
  color: #fff;
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 16px;
  text-align: center;
}
</style>
