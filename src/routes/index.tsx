import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
export default component$(() => {

    
  const canvasRef = useSignal<any>();

  useVisibleTask$(() => {
    if (!canvasRef.value) {
      return;
    }
    
    // Importa la aplicación de Spline en el efecto del lado del cliente
    import('@splinetool/runtime').then(({ Application }) => {
      const app = new Application(canvasRef.value);
      app.load('https://my.spline.design/retroglassmaterial-cb5c5dec9dc92bef58fe2106115e5ee3/');
    });
  }); 
  return (
<div class={"flex-col mt-[80px] mx-[10%]"}>
    <section class="">

    <div class="grid max-w-screen-xl px-2 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
  <div class="mr-auto place-self-center justify-center align-center lg:col-span-7">
  <canvas id="canvas3d" class={"absolute inset-0 z-[-1] w-full h-[100%]"} ref={canvasRef}/>

<h1 class="mb-4 mt-[10%] text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-8xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-sky-400">Discover  </span> Cootie Babies</h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">The New Generation of NFTs on the Flare Blockchain.</p>
<a href="/" class=" mx-3 font-normal mt-8 inline-flex items-center justify-center button-main">
                MINT A COOTIE
            </a> 
            <a href="/dasboard" class=" mx-3 font-normal mt-8 inline-flex items-center justify-center button-secondary">
                COLLECTION
            </a> 
        </div>
        <div class=" mt-10 col-span-5 flex">
         </div>                
    </div>
    
</section>

</div>  
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
