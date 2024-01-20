import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from './dashboard.css?inline';
import clsx from "clsx";
import { DashboardWidthContext,DashboardHeightContext } from "~/lib/context";

export default component$(() => {  
  useStylesScoped$(styles);
  const screeHeight = useContext(DashboardHeightContext);
  const screeWidth = useContext(DashboardWidthContext);


console.log(screeWidth.value<screeHeight.value)
  return (  
    <div class={clsx(screeWidth.value>screeHeight.value&&screeWidth.value<1000&&screeHeight.value<600?"mt-[3%]":"mt-[10%]","container mx-10 ")}>
      <div class="grid-container ">
        <div class="file-upload col-span-4 row-span-4">
          <label for="dropzone-file"  class="flex flex-col items-center justify-center h-full">
            
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        <input  id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
        <div class="justify-center items-center input-group col-span-4 row-span-2">
          <label for="title">title</label>
          <input type="text" id="title" placeholder="Enter title"/>
          <div class="input-group pt-4 col-span-4 row-span-2">
          <label for="description">description</label>
          <textarea id="description"  placeholder="Enter description"></textarea>
        </div>
        <div class="input-group col-span-4 row-span-1">
          <button type="button">Analyze</button>
        </div>
        </div>
        
      </div>
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
