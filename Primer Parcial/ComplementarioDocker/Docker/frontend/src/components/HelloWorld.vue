<template>
 <div id="app">
  <div class="container">
    <h1>Lista de Datos</h1>
     <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
         
        </tr>
      </thead>
      <tbody>
        <tr v-for ="(plato, index) in platos" :key="index">
          <td>{{ plato.id }}</td>
          <td>{{plato.NombrePlato}}</td>
          
        </tr>
      </tbody>
    </table> 
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
   created(){
     axios.get('http://localhost:80/platos').then(response =>    this.platos=response.data.Platos);
 
  },
  data(){
    return{
     
      platos:[]


    }
  }
}
  
</script>

