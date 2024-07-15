<template>
  <v-app>
      <v-app-bar app dark style="background:darkblue;color:white">
      <v-container>
        <v-row align="center">
          <v-col cols="12">
            <v-text-field
              v-model="search"
              append-inner-icon="mdi-magnify"
              label="Search Galleries"
              single-line
              hide-details
              variant="outlined"
              style="background:white;color:black;border-radius:4px"
            ></v-text-field>
          </v-col>
        </v-row>
        
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        

        <v-row>
          <v-col
            v-for="gallery in filteredGalleries"
            :key="gallery.id"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card>
              <v-img
                :src="gallery.coverImage"
                height="200px"
                cover
              ></v-img>

              <v-card-title>{{ gallery.title }}</v-card-title>

              <v-card-subtitle>{{ gallery.description }}</v-card-subtitle>

              <v-card-actions>
                <router-link :to="`/gallery/${gallery.id}`" style="width: 100%;">
                  <v-btn
                    text
                    width="100%"
                    style="background: darkblue; color: white; text-transform: capitalize"
                  >
                    View Gallery
                  </v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-pagination
            v-model="page"
            :length="pageCount"
            rounded
            style="background:darkblue;color:white"
          ></v-pagination>
        </v-row>
      </v-container>
    </v-main>

    <v-bottom-navigation
      v-model="bottomNav"
      app
      color="primary"
      dark
      style="background:darkblue;color:white"
    >
      <v-btn
        :input-value="bottomNav === 'home'"
        @click="navigateTo('welcomePage')"
      >
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn
        :input-value="bottomNav === 'favorites'"
        @click="navigateTo('favorites')"
      >
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn
        :input-value="bottomNav === 'settings'"
        @click="navigateTo('settings')"
      >
        <span>Settings</span>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      page: 1,
      itemsPerPage: 3,
      bottomNav: 'home',
      galleries: [
        // Example gallery data
          { id: 1, title: 'Tanzania', description: 'Description for Gallery 1', coverImage: 'public/Tanzaina.jfif' },
        { id: 2, title: 'Nairobi', description: 'Description for Gallery 2', coverImage: 'public/Nairobi.jfif' },
        { id: 3, title: 'Australia', description: 'Description for Gallery 3', coverImage: 'public/Austrailia.jfif' },
        { id: 4, title: 'Slovenia', description: 'Description for Gallery 4', coverImage: 'public/Slovenia.jfif' },
        { id: 5, title: 'Mombasa', description: 'Description for Gallery 5', coverImage: 'public/Mombasa.jfif' },
        { id: 6, title: 'Iceland', description: 'Description for Gallery 6', coverImage: 'public/Iceland.jfif' },
        { id: 7, title: 'Norway', description: 'Description for Gallery 7', coverImage: 'public/Norway.jfif' },
        { id: 8, title: 'Dubai', description: 'Description for Gallery 8', coverImage: 'public/The desert.jfif' },
        { id: 9, title: 'Ireland', description: 'Description for Gallery 9', coverImage: 'public/Ireland.jfif' },
        { id: 10, title: 'South Africa', description: 'Description for Gallery 10', coverImage: 'public/Johannesburg.jfif' },
        { id: 11, title: 'London', description: 'Description for Gallery 11', coverImage: 'public/London_Skyline.jpg' },
        { id: 12, title: 'France', description: 'Description for Gallery 12', coverImage: 'public/France.jfif' },
        { id: 13, title: 'Germany', description: 'Description for Gallery 13', coverImage: 'public/Germany.jfif'}
      ],
    };
  },
  computed: {
    filteredGalleries() {
      if (this.search) {
        return this.galleries.filter(gallery => gallery.title.toLowerCase().includes(this.search.toLowerCase()));
      }
      return this.paginatedGalleries;
    },
    paginatedGalleries() {
      const start = (this.page - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.galleries.slice(start, end);
    },
    pageCount() {
      return Math.ceil(this.galleries.length / this.itemsPerPage);
    },
  },
  methods: {
    navigateTo(page) {
      this.$router.push({ name: page });
      this.bottomNav = page;
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
