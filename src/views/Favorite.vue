<template>
<v-app>
<v-app-bar style="background-color: darkblue; color: white;">
<v-app-bar-title style="text-transform: capitalize">Favorite images</v-app-bar-title>

</v-app-bar>
<br>

<v-container>
<br>
<br>
<v-row>
<v-col>
<v-card>
<v-img src="public/Las Vegas.jfif"></v-img>
</v-card>
</v-col>
</v-row>
</v-container>



    <v-bottom-navigation
      v-model="bottomNav"
      app
      color="primary"
      dark
      style="background:darkblue;color:white"
    >
      <v-btn
        :input-value="bottomNav === 'home'"
        to="/welcomePage"
      >
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn
        :input-value="bottomNav === 'favorites'"
        to="favorites"
      >
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn
        :input-value="bottomNav === 'settings'"
        to="/settings"
      >
        <span>Settings</span>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-bottom-navigation>

</v-app>


</template>
