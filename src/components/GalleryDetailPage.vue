<template>
<v-app>


 <v-app-bar app dark style="background:darkblue;color:white">
 
      <v-container>
      <v-row>
      <v-col cols="12">
        <v-btn text @click="$router.back()" width="100%" style="background:darkblue;color:white;text-transform:capitalize"><v-icon>mdi-chevron-left</v-icon>Back to Gallery List</v-btn>
      </v-col>
    </v-row>

      </v-container>
    </v-app-bar>
  <v-container>
    
    <v-row v-if="gallery">
      <v-col cols="12">
       
      </v-col>
    </v-row>

    <v-row v-if="gallery">
      <v-col v-for="image in gallery.images" :key="image.id" cols="12" sm="6" md="4">
        <v-card>
        <v-toolbar>
                  <v-card-title>{{ image.title }}</v-card-title>
</v-toolbar>
          <v-img :src="image.src" height="200px" cover></v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-else justify="center">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-col>
    </v-row>

<br>
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
    <br>
    <br>
  </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      gallery: null,
            bottomNav: 'home',

    };
  },
  mounted() {
    const galleryId = this.$route.params.id;
    this.fetchGallery(galleryId);
  },
  methods: {



   navigateTo(page) {
      this.$router.push({ name: page });
      this.bottomNav = page;
    },
    fetchGallery(id) {
      const sampleGalleries = [
        {
          id: '1',
          title: 'Tanzania',
          description: 'Description for Gallery 1',
          coverImage: 'public/cat_and_dog.jpg',
          images: [
            { id: 1, title: 'Tanzania National Park', src: '/Tanzania National Park.jpg ' },
            { id: 2, title: 'Tanzania Beach', src: '/Tanzania Beach.jfif' },
            { id: 3, title: 'Tanzania City', src: '/Tanzania City.jfif' },
            { id: 4, title: 'Tanzania Map', src: '/The map of Tanzania.jfif' },
            { id: 5, title: 'Tanzania Flag', src: '/Flag.png' },
          ],
        },
        {
          id: '2',
          title: 'Nairobi',
          description: 'Description for Gallery 1',
          coverImage: 'public/kittens.jpg',
          images: [
            { id: 1, title: 'Nairobi National Park', src: '/National Park.jfif' },
            { id: 2, title: 'Giraffe center', src: '/Giraffe Center.jfif' },
            { id: 3, title: 'Uhuru Park', src: '/Uhuru Park.jfif' },
            { id: 4, title: 'Kenya Map', src: '/The map of Nairobi.jfif' },
            { id: 5, title: 'Kenyan Flag', src: '/flag of Kenya.png' },
          ],
        },
        {
          id: '3',
          title: 'Australia',
          description: 'Description for Gallery 1',
          coverImage: 'public/kittens.jpg',
          images: [
            { id: 1, title: 'Sydney', src: '/Sydney.jfif' },
            { id: 2, title: 'Melbourne', src: '/Melbourne.jfif' },
            { id: 3, title: 'Austrailia Beach', src: '/Australia Beach.jfif' },
            { id: 4, title: 'Australia Map', src: '/Australia Map.jfif' },
            { id: 5, title: 'Australia Flag', src: '/Austrailia Flag.png' },
          ],
        },
         {
          id: '4',
          title: 'Slovenia',
          description: 'Description for Gallery 4',
          coverImage: 'public/kittens.jpg',
          images: [
            { id: 1, title: 'Ljubljana', src: '/Ljubljana.jfif' },
            { id: 2, title: 'Lake Bled', src: '/Lake Bled.jfif' },
            { id: 3, title: 'Triglav Lake', src: '/Triglav Lake.jfif' },
            { id: 4, title: 'Slovenia Map', src: '/Slovenia Map.jfif' },
            { id: 5, title: 'Slovenian Flag', src: '/Flag.png' },
          ],
        },
        
         {
          id: '5',
          title: 'Lexembourg',
          description: 'Description for Gallery 5',
          coverImage: 'public/kittens.jpg',
          images: [
            { id: 1, title: 'Luxembourg Scenery', src: '/Scenery.jfif' },
            { id: 2, title: 'Nature', src: '/Nature.jfif' },
            { id: 3, title: 'Downtown Luxembourg', src: '' },
            { id: 4, title: 'Map', src: '' },
            { id: 5, title: 'Flag', src: '/Lexembourg flag.png' },
          ],
        },
       
         {
          id: '6',
          title: 'Iceland',
          description: 'Description for Gallery 6',
          coverImage: 'public/kittens.jpg',
          images: [
            { id: 1, title: 'Blue Lagoon', src: '/Blue Lagoon.jfif' },
            { id: 2, title: 'Iceland Glacier', src: '/Glacier.jfif' },
            { id: 3, title: 'Ice Cave', src: '/Cave.jfif' },
            { id: 3, title: 'Map', src: '/Map.jfif' },
            { id: 5, title: 'Iceland Flag', src: '/Iceland Fl;ag.png' },
          ],
        },
        
         {
          id: '7',
          title: 'Norway',
          description: 'Description for Gallery 7',
          coverImage: 'public/kittens.jpg',
          images: [
            { id: 1, title: 'Norway City', src: '/City.jfif' },
            { id: 2, title: 'Trondelag', src: '/Trondelag.jfif' },
            { id: 3, title: 'River Nidelva', src: '/River Nidelva.jfif' },
            { id: 3, title: 'Norway Map', src: '/Norway Map.jfif' },
            { id: 3, title: 'Norway Flag', src: '/Norway Flag.png' },
          ],
        },
        
         {
          id: '8',
          title: 'UAE',
          description: 'Description for Gallery 8',
          coverImage: 'public/kittens.jpg',
          images: [
            { id: 1, title: 'Dubai City', src: '/Dubai City.jfif' },
            { id: 2, title: 'Abu Dhabi', src: '/Abu Dhabi.jfif' },
            { id: 3, title: 'Ferrari World', src: '/Ferrari World.jfif' },
            { id: 4, title: 'UAE Map', src: '/UAE map.jfif' },
            { id: 5, title: 'UAE Flag', src: '/UAE Flag.png' },
          ],
        },
        
        {
          id: '9',
          title: 'Ireland',
          description: 'Description for Gallery 9',
          coverImage: 'public/kittens.jpg',
          images: [
            { id: 1, title: 'City', src: '/Ireland City.jfif' },
            { id: 2, title: 'Connemara', src: '/Connemara.jfif' },
            { id: 3, title: 'Eyre Square', src: '/Eyre Square.jfif' },
            { id: 4, title: 'Ireland Map', src: '/Ireland map.jfif' },
            { id: 5, title: 'Ireland Flag', src: '/Ireland flag.png' },
          ],
        },
        {
          id: '10',
          title: 'South Africa',
          description: 'Description for Gallery 10',
          coverImage: 'public/kittens.jpg',
          images: [
            { id: 1, title: 'Waterfront', src: '/Waterfront Capetown.jfif' },
            { id: 2, title: 'Johannesburg', src: '/Johannesburg SouthAfrica.jfif' },
            { id: 3, title: 'Luxury Safari', src: '/South africa Luxury Safari.jfif' },
            { id: 3, title: 'Map', src: '/SA Map.jfif' },
            { id: 3, title: 'Flag', src: '/South Africa Flag.png' },
          ],
        },
        {
          id: '11',
          title: 'London',
          description: 'Description for Gallery 11',
          coverImage: 'public/kittens.jpg',
          images: [
            { id: 1, title: 'Big Ben', src: '/The Big Ben.jfif' },
            { id: 2, title: 'England', src: '/England.jfif' },
            { id: 3, title: 'City', src: '/london City.jfif' },
            { id: 4, title: 'Map', src: '/London Map.jfif' },
            { id: 5, title: 'Flag', src: '/LondonFlag.png' },
          ],
        },
        {
          id: '12',
          title: 'France',
          description: 'Description for Gallery 12',
          coverImage: 'public/kittens.jpg',
          images: [
            { id: 1, title: 'Lyon', src: '  /lyon.jfif' },
            { id: 2, title: 'The Eiffel Tower', src: '/Eiffel Tower.jfif' },
            { id: 3, title: 'Disneyland Castle', src: '/Disneyland Castle.jfif' },
            { id: 4, title: 'Map', src: '/detailed map.jfif' },
            { id: 5, title: 'Flag', src: '/Flag of france.jfif' },
          ],
        },
          {
          id: '13',
          title: 'Germany',
          description: 'Description for Gallery 12',
          coverImage: 'public/kittens.jpg',
          images: [
            { id: 1, title: 'Germany City', src: '/Germany City.jfif' },
            { id: 2, title: 'Munich City Center', src: '/City Center.jfif' },
            { id: 3, title: 'FrankFurt', src: '/FrankFurt.jfif' },
            { id: 4, title: 'Map', src: '/Germany map.png' },
            { id: 5, title: 'Flag', src: '/Germany Flag.png' },
          ],
        },
            {
          id: '14',
          title: 'USA',
          description: 'Description for Gallery 12',
          coverImage: 'public/kittens.jpg',
          images: [
            { id: 1, title: 'Las Vegas', src: '/Las Vegas.jfif' },
            { id: 2, title: 'New York', src: '/New York.jfif' },
            { id: 3, title: 'Los Angeles', src: '/LA.jfif' },
            { id: 4, title: 'Map', src: '/USA map.jfif' },
            { id: 5, title: 'Flag', src: '/USA flag.jfif' },
          ],
        },
        // Add more sample galleries as needed
      ];

      this.gallery = sampleGalleries.find(gallery => gallery.id === id);
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
