<script>
  import bg from "./assets/mabelle.webp"
  import MenuCategory from "./lib/MenuCategory.svelte";
  import storeObj from "./assets/menu.json";
  const menuObj = storeObj.menu;

</script>

<body>
  <!--BackgroundImage-->
  <img src="{bg}" alt="background" class="w-screen h-screen fixed left-0 bottom-0 opacity-85">

  <!--Main-->
  <div class="fixed left-0 top-0 h-screen w-screen flex flex-col space-y-5 justify-start overflow-auto p-10">

    {#each Object.entries(menuObj) as category}
      <MenuCategory {category}/>
    {/each}
    
  </div>
  
</body>