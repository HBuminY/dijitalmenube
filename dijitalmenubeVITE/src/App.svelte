<script>
  import bg from "./assets/mabelle.webp"
  import MenuCategory from "./lib/MenuCategory.svelte";
  import storeObj from "./assets/menu.json";
  const menuObj = storeObj.menu;

  import { activeCategory } from "./stores";



</script>

<body>
  <!--BackgroundImage-->
  <img src="{bg}" alt="background" class="aspect-auto w-screen h-screen fixed bottom-0 opacity-85">

  <!--Main-->
  <div class="fixed left-0 top-0 h-screen w-screen flex flex-col justify-center">

    <div class="h-full flex flex-col justify-center space-y-5 overflow-auto p-16 w-full">
      {#each Object.entries(menuObj) as category}
        <MenuCategory {category}/>
      {/each}
    </div>
    
  </div>
  
</body>