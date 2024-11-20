<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
    <ul>
      <li v-for="user in users" :key="user.id">
        [{{ user.name }}] [{{ user.email }}] [{{ user.address.zipcode }}]
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeComponent',
    data() {
      return {
        users: []
      };
    },
    created() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await this.$axios.get('https://jsonplaceholder.typicode.com/users');
          this.users = response.data;
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      }
    }
  };
</script>