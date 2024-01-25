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
      app.load('https://prod.spline.design/1uzOvUBfIvcwTUb8/scene.splinecode');
    });
  }); 
  return (    <section class="grid max-w-screen-xl mt-[5%] mx-auto justify-center w-full h-full">

  <div class="mr-auto place-self-center justify-center align-center lg:col-span-12">
  <canvas id="canvas3d" class={""} ref={canvasRef}/>

<p class="text-lg py-0 px-10 font-normal text-gray-500 lg:text-xl dark:text-gray-400">The New Generation of NFTs on the Flare Blockchain.</p>
<a href="/" class="w-[100%]  px-10 mx-3 font-normal mt-8 inline-flex items-center justify-center button-main">
                MINT A COOTIE
            </a> 
            <a href="/dasboard" class="w-[100%]  mx-3 my-5 font-normal mt-8 inline-flex items-center justify-center button-secondary">
                COLLECTION
            </a> 
        </div>      
    
</section>

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
