<script>
    export let item = {name:null, desc:null, price:null, img:"/placeholder.webp"};
</script>

<style>
    
</style>

<div class="no-underline border border-black c-bg-pink1 flex flex-col md:flex-row justify-start shadow-xl rounded-lg">
    <div class="m-auto aspect-square w-[60%] p-2">
        <img src={"/dijitalmenube"+item.img} alt={item.name} class="rounded-xl opacity-80 border border-white">
    </div>

    <div class="flex flex-col w-full p-5 relative text-center">
        <div><h1 class="text-2xl font-bold font-mirage">
            {item.name}
        </h1></div>

        <div class="h-full font-normal text-xl"><p>
            {item.desc}
        </p></div>

        <div><h1 class="font-bold right-0-0 bottom-0 text-lg">
            {item.price}₺
        </h1></div>
    </div>
</div>