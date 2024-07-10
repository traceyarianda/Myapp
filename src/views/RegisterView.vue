 <template>
<v-app>
<v-container class="d-flex justify-center align-center min-vh-100">
<v-card max-width="500" width="100%" elevation="0" class="login-card mt-16">
<v-img src="public/music-logo-removebg-preview.png"   alt="logo"  height="200"></v-img>
<v-row> 
  <v-col>
    <v-form>
    <v-text-field label="First Name" variant="underlined" prepend-inner-icon="mdi-account"></v-text-field>
    <v-text-field label="Last Name" variant="underlined" prepend-inner-icon="mdi-account"></v-text-field>
    <v-select label="Gender" 
        variant="underlined" 
        prepend-inner-icon="mdi-gender-male-female" 
        :items="['Male', 'Female']"

    ></v-select>
    <v-text-field label="Email" variant="underlined" prepend-inner-icon="mdi-email"></v-text-field>
    <v-text-field label="Password" variant="underlined" prepend-inner-icon="mdi-lock"></v-text-field>

    <v-btn type="submit" width="100%" color="red" style="text-transform: capitalize"><v-icon>mdi-account-plus</v-icon>Register</v-btn>
     
  </v-form>
  
  

  </v-col>
</v-row>
</v-card>
</v-container>
</v-app>
</template>

<script>
export default{
    data(){
        return{
            gender:null,                                                                                                                                                                                                           
        }
    }
}
</script>