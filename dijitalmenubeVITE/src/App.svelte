<script>
  import bg from "./assets/mabelle.webp"
  import MenuCategory from "./lib/MenuCategory.svelte";
  import storeObj from "./assets/menu.json";
  const menuObj = storeObj.menu;

  import { activeCategory } from "./stores";
  
  
  let justify = 'justify-center p-16 ';

  $:{
    if($activeCategory){
      justify = 'justify-start p-10';
    }else{
      justify = 'justify-center p-16 ';
    }
  }

</script>

<body>
  <!--BackgroundImage-->
  <img src="{bg}" alt="background" class="aspect-auto w-screen h-screen fixed bottom-0 opacity-85 scale-x-105">

  <!--Main-->
  <div class="fixed left-0 top-0 h-screen w-screen flex flex-col justify-center">

    <div class="h-full flex flex-col {justify} space-y-5 overflow-auto w-full">
      {#each Object.entries(menuObj) as category}
        <MenuCategory {category}/>
      {/each}
    </div>
    
  </div>
  
</body>