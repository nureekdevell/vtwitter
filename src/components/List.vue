<template>
  <div>
    <ul>
      <li v-for="tweet in items" key="tweet.id">
        <img class="avatar" :src="tweet.avatar" style="width: 30px; height: 30px" alt="avatar"/>
        <span>{{tweet.date }} </span>
        <br>
        <span>{{tweet.body }} </span>
      </li>
    </ul>
  </div>
</template>

<script setup>



const  items = [
  {
    id: 1,
    body: 'Hello vue 3',
    likes: 15,
    avatar: `https://i.pravatar.cc/150?img=1`,
    date: new Date(Date.now()).toLocaleDateString()
  },
  {
    id: 2,
    body: 'Hola',
    likes: 22,
    avatar: `https://i.pravatar.cc/150?img=2`,
    date: new Date(Date.now()).toLocaleDateString()
  },
  {
    id: 3,
    body: 'Salom Dunyo',
    likes: 5,
    avatar: `https://i.pravatar.cc/150?img=3`,
    date: new Date(Date.now()).toLocaleDateString()
  }
]
</script>

<style  scoped>
li {
  list-style: none;
}
.avatar {
  border-radius: 50%;
}
</style>