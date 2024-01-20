import { component$,  Slot, useContextProvider, useSignal,  useVisibleTask$ } from "@builder.io/qwik";
import { Link, type RequestHandler } from "@builder.io/qwik-city";
import { LuArrowBigRightDash,LuFileStack,LuLayoutDashboard } from "@qwikest/icons/lucide";
import clsx from "clsx";
import { DashboardWidthContext,DashboardHeightContext } from "~/lib/context";
import { IconRotation } from "~/react/IconRotation";
import { NavbarDesktop } from "~/react/NavbarDesktop";
export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};
const navigation = [
  { name: "Analysis", href: "/dashboard/" },
  { name: "Results", href: "/dashboard/results"},
];
export default component$(() => {
  const activeNavIndex=useSignal<number>(0)
  const isExpanded=useSignal<boolean>(false)
 
  
  const screenWidth = useSignal<number>(0);
  
  const screenHeight = useSignal<number>(0);
  
  
  useContextProvider(DashboardWidthContext, screenWidth);
  useContextProvider(DashboardHeightContext, screenHeight);

  useVisibleTask$(() => {
    screenWidth.value = window.innerWidth;
    screenHeight.value = window.innerHeight;

    const updateWidth = () => {
      screenWidth.value = window.innerWidth;
      screenHeight.value = window.innerHeight;
console.log(screenHeight.value)
    };

    window.addEventListener('resize', updateWidth);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  });
  return  <div  class="flex h-[100dvh] overflow-hidden w-full max-w-screen">
 <NavbarDesktop screenWidth={screenWidth.value} isExpanded={isExpanded.value}> 
 <div class="flex grow  flex-col gap-y-2 overflow-y-auto border-r h-full overflow-hidden border-gray-200 bg-white px-3">
     
      <nav class="pt-[50px]  flex flex-1 flex-col">
        
      <div onClick$={() => {
            isExpanded.value=!isExpanded.value;
          }}  class={"w-10 h-10 bg-black absolute rounded-full -right-[19.5px]  top-1/3  flex items-center justify-center "}>
    <IconRotation isExpanded={isExpanded.value}>
    <LuArrowBigRightDash style={{rotate:'180deg'}} color={"white"}/>

    </IconRotation>
   
    </div>

  <ul class="flex flex-1 flex-col gap-y-7 ">
 <li class="">
   <ul class="-mx-2 space-y-1 ">
     {navigation.map((item,index) => (
       <li   
       key={item.name} class={'flex   items-center'}>

         <Link
          onClick$={() => {
            console.log(index)
            activeNavIndex.value=index;
          }}        
             href={item.href}
           class={
                 clsx(
                   activeNavIndex.value.toString()===index.toString()
                     ? "bg-gray-50 text-rose-600"
                     : "text-gray-700 hover:text-rose-600 hover:bg-gray-50",
                   "group flex gap-x-3 h-[60px] w-full justify-center items-center rounded-md p-2 text-sm leading-6 font-semibold"
                 )
               }
         >
                

               <>
               
               <div style={{ color: "red",fontSize: "20px" }}>
    {item.name=="Analysis"?<LuLayoutDashboard />:null}
    {item.name=="Results"?<LuFileStack />:null}
    </div>
                   {!isExpanded.value&&item.name}
                      </>
         </Link>
       </li>
     ))}
   </ul>
 </li>
</ul>
      </nav>
    </div>
    </NavbarDesktop>
<Slot />
  <nav
    class="fixed bottom-0 border-t border-gray-200 grid lg:hidden grid-cols-2 bg-gray-50/80 backdrop-blur-2xl inset-x-0 items-center pb-safe"
    style={{
      height: `calc(env(safe-area-inset-bottom) + 64px))`,
    }}
  >
    {navigation.map((item,index) => (
      <Link
      onClick$={()=>activeNavIndex.value=index}

        key={item.name}
        href={item.href}
        class={ clsx(
          activeNavIndex ? "text-rose-600" : "text-gray-700 ",
          "group flex flex-col items-center text-center rounded-md p-2 text-sm leading-6 font-semibold",
          "touch-manipulation"
        )}
      >
         <>
               
    {item.name=="Analysis"?<LuLayoutDashboard />:null}
    {item.name=="Results"?<LuFileStack />:null}
                {item.name}
              </>
      </Link>
    ))}
  </nav>
</div>  
});
