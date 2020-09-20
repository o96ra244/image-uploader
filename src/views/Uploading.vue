<template>
  <div>
    <p class="text">Uploading...</p>
    <div class="progress">
      <span class="progress__indicator"></span>
    </div>
  </div>
</template>

<script>
import { firestore } from "@/firebase/fireStore";
import { firestorage } from "@/firebase/fireStorage";

export default {
  data: function() {
    return {
      uploading: false
    };
  },
  mounted() {
    const file = this.$store.getters["image/getFile"];

    if (!file) {
      this.$router.push("/");
    }

    this.upload(file);
  },
  methods: {
    upload(file) {
      console.log(file);

      const storageRef = firestorage.ref();
      const uploadTask = storageRef
        .child("images")
        .child(file.name)
        .put(file);

      uploadTask.on(
        "state_changed",
        snapshot => {
          console.log("snapshot", snapshot);
        },
        error => {
          console.log("err", error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            this.$store.dispatch("image/setDownloadUrl", downloadURL);
            this.setFirestore(file);
          });
        }
      );
    },
    setFirestore(file) {
      firestore
        .collection("images")
        .doc()
        .set({ filename: file.name })
        .then(() => {
          console.log("Document successfully written!");
          this.next();
        })
        .catch(error => {
          console.error("Error writing document: ", error);
        });
    },
    next() {
      this.$router.push("/uploaded");
    }
  }
};
</script>

<style lang="scss" scoped>
.text {
  margin: 0 0 30px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.035em;
  text-align: left;
  color: #4f4f4f;
}

.progress {
  display: block;
  border-radius: 8px;
  background: #f2f2f2;
  height: 6px;
  position: relative;
  overflow: hidden;
}

.progress__indicator {
  width: 30%;
  position: absolute;
  background: #2f80ed;
  height: 100%;
  top: 0;
  animation: progress 1.5s infinite;
}

@keyframes progress {
  from {
    left: 0;
  }

  to {
    left: 100%;
  }
}
</style>
