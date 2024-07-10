<template>
  <v-container>
  
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="search"
          append-inner-icon="mdi-magnify"
          label="Search Galleries"
          single-line
          hide-details
          variant="outlined"
          fixed
        ></v-text-field>
      </v-col>
    </v-row>

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
            <v-btn
              :to="`/gallery/${gallery.id}`"
              text
            >
              View Gallery
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      page: 1,
      itemsPerPage: 5,
      galleries: [
        // Example gallery data
        { id: 1, title: 'Tanzania', description: 'Description for Gallery 1', coverImage: 'public/cat and dog.jpg' },
        { id: 2, title: 'Nairobi', description: 'Description for Gallery 2', coverImage: 'public/kittens.jpg' },
        { id: 3, title: 'Ireland', description: 'Description for Gallery 3', coverImage: 'public/outside the airplane.jfif' },
        { id: 4, title: 'Slovenia', description: 'Description for Gallery 4', coverImage: 'public/boat ride.jfif' },
        { id: 5, title: 'Mombasa', description: 'Description for Gallery 5', coverImage: 'public/images (1).jfif' },
        { id: 6, title: 'Iceland', description: 'Description for Gallery 6', coverImage: 'public/images.jfif' },
        { id: 7, title: 'Norway', description: 'Description for Gallery 7', coverImage: 'public/vacation.jfif' },
        { id: 8, title: 'Dubai', description: 'Description for Gallery 8', coverImage: 'public/The desert.jfif' },
        { id: 9, title: 'Golf Course', description: 'Description for Gallery 9', coverImage: 'public/hole in one.jfif' },
        { id: 10, title: 'South Africa', description: 'Description for Gallery 10', coverImage: 'public/Baby Tiger.jfif' },

        // Add more galleries as needed
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
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
