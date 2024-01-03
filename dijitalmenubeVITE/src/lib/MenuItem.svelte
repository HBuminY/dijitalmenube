<script>
    export let item = {name:null, desc:null, price:null, img:"/placeholder.webp"};
</script>

<div class="no-underline border-2 border-black rounded bg-cyan-700 bg-opacity-25 flex flex-col md:flex-row justify-start shadow-xl">
    <div class="aspect-square h-1/2 md:h-full md:w-1/6 p-2">
        <img src={item.img} alt={item.name} class="rounded">
    </div>

    <div class="flex flex-col w-full p-5 relative text-start ">
        <div><h1 class="font-bold">
            {item.name}
        </h1></div>

        <div class="h-full"><p>
            {item.desc}
        </p></div>

        <div><h1 class="font-bold right-0-0 bottom-0 text-4xl">
            {item.price}₺
        </h1></div>
    </div>
</div>