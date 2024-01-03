<script>
  import bg from "./assets/bg.webp"

  import Header from "./lib/Header.svelte";
  import MenuCategory from "./lib/MenuCategory.svelte";
  import Footer from "./lib/Footer.svelte";
  

  import storeObj from "./assets/menu.json";
  const menuObj = storeObj.menu;
</script>

<body>

  <img src="{bg}" alt="background" class="aspect-auto w-screen h-screen fixed bottom-0 opacity-85">

  <div class="fixed left-0 top-0 h-full w-full p-5 flex flex-col justify-start space-y-5  overflow-auto">
  
    {#each Object.entries(menuObj) as category}
      <MenuCategory {category}/>
    {/each}
    
  </div>
  <Footer/>
</body>