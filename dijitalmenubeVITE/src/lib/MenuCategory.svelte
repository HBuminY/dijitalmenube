<script>
    import { cubicInOut } from "svelte/easing";
    import MenuItem from "./MenuItem.svelte"
    import { slide } from "svelte/transition";
    import { activeCategory } from "../stores";

    import {get_current_component} from 'svelte/internal'
    const THIS = get_current_component();

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
            classs = "mx-14";
        }
    }

    function onclick(){
        if(name==$activeCategory){
            activeCategory.activate(null);
        }else{
            activeCategory.activate(name);
            classs = ""
            THIS.scrollIntoView();
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
                <img src="/dijitalmenube/{items[0].img}" alt="{name}" class="aspect-square w-[65%] mt-4 mx-auto my-1 rounded-lg opacity-80">

                <h1 class="text-3xl text-gray-950 font-bold m-auto">
                    {name}
                </h1>
            </div>
        {/if}
        
    </div>
</a>