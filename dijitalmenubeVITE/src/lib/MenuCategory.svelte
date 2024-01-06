<script>
    import { cubicInOut } from "svelte/easing";
    import MenuItem from "./MenuItem.svelte"
    import { slide } from "svelte/transition";
    import { activeCategory } from "../stores";


    export let category = [];
    let name = category[0];
    let items = category[1];
    let active = false;

    let classs = "mx-14"
    $:{
        if(name==$activeCategory){
            active=true;
        }else{
            active=false;
        }
    }

    function onclick(){
        if(name==$activeCategory){
            activeCategory.activate(null);
            classs = "mx-14"
        }else{
            activeCategory.activate(name);
            classs = ""
        };
    }
</script>

<a href="#" on:click={onclick}>
    <div class="text-center border border-black rounded-2xl flex flex-col bg-yellow-50 bg-opacity-80 font-mirage shadow-gray-700 shadow-xl {classs}">

        {#if active}
            <div class="p-1">
                <h1 class="text-3xl text-gray-950 font-bold m-auto">
                    {name}
                </h1>
            </div>
            
            <div class="px-12 py-2">
                <div 
                    class="space-y-5"
                    transition:slide={{duration:200, easing:cubicInOut, axis:'y'}}
                >
                    {#each items as item}
                        <MenuItem {item}/>
                    {/each}
                </div>
            </div>
        {:else}
            <div class="p-1 relative">
                <img src="/dijitalmenube/{items[0].img}" alt="{name}" class="aspect-square w-[90%] m-auto my-1 rounded-lg opacity-80">

                <h1 class="text-3xl text-gray-950 font-bold m-auto">
                    {name}
                </h1>
            </div>
        {/if}
        
    </div>
</a>