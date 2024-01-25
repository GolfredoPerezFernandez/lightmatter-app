import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
export default component$(() => {

    
  const canvasRef = useSignal<any>();
  const canvasRef2 = useSignal<any>();

  useVisibleTask$(() => {
    if (!canvasRef2.value) {
      return;
    }
    
    // Importa la aplicación de Spline en el efecto del lado del cliente
    import('@splinetool/runtime').then(({ Application }) => {
      const app = new Application(canvasRef2.value);
      app.load('https://prod.spline.design/44ped8gWYyIHt4Mi/scene.splinecode');
    });
  }); 
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
  return (    <section class="grid  justify-center max-w-screen-xl mt-[5%] mx-auto justify-center items-center w-[100%] h-[100%]">

  <canvas id="canvas3d" class={"w-350px h-450px"} ref={canvasRef}>
</canvas>
<canvas id="canvas3d" class={"mx-[44%]"} ref={canvasRef2}>
</canvas>
    
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
