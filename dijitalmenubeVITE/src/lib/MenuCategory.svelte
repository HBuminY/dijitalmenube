<script>
    import { cubicInOut } from "svelte/easing";
    import MenuItem from "./MenuItem.svelte"
    import { slide } from "svelte/transition";


    export let category = [];
    let name = category[0];
    let items = category[1];
    let active = false;

    function changeState(){
        active=!active;
        return false;
    };
</script>

<a href="#" on:click={changeState}>
    <div class="text-center border border-black rounded flex flex-col bg-gray-500 bg-opacity-75 text-white">
        <div class="p-1">
            <h1 class="text-xl font-bold">
                {name}
            </h1>
        </div>
        
        
        <div class="pl-10 pr-2 py-2">
                {#if active}
                <div 
                    class="space-y-5"
                    transition:slide={{duration:200, easing:cubicInOut, axis:'y'}}
                >
                    {#each items as item}
                        <MenuItem {item}/>
                    {/each}
                </div>
                {/if}
        </div>
    </div>
</a>