<template>
  <div class="view-profile container">
    <div v-if="profile" class="card">
      <h2 class="deep-purple-text center">{{ profile.alias }}'s Wall</h2>
      <ul class="comments collection">
        <li>Comment</li>
      </ul>
      <form @submit.prevent="addCommnet">
        <div class="field">
          <label for="commnet">Add a commnet</label>
          <input type="text" name="comment" v-model="newCommnet" />
          <p v-if="feedback" class="red-text center">{{ feedback }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";

export default {
  name: "ViewProfile",
  data() {
    return {
      profile: null,
      newCommnet: null,
      feedback: null,
      user: null,
    };
  },
  created() {
    let ref = db.collection("users");

    // get current user
    ref
      .where("user_id", "==", firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          (this.user = doc.data()), (this.user.id = doc.id);
        });
      });

    ref
      .doc(this.$route.params.id)
      .get()
      .then((user) => {
        this.profile = user.data();
      });
  },
  methods: {
    addCommnet() {
      if (this.newCommnet) {
        this.feedback = null;
        db.collection("comments")
          .add({
            to: this.$route.params.id,
            from: this.user.id,
            content: this.newCommnet,
            time: Date.now(),
          })
          .then(() => {
            this.newCommnet = null;
          });
      } else {
        this.feedback = "You must enter a commnet to add it";
      }
    },
  },
};
</script>