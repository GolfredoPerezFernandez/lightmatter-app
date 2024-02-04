import { createContextId } from "@builder.io/qwik";

export const DashboardWidthContext = createContextId<any>(
    'width.layout-context'
  );

  export const DashboardHeightContext = createContextId<any>(
      'height.layout-context'
    );
    

    export const HomeWidthContext = createContextId<any>(
        'width.home-context'
      );
    
      export const HomeHeightContext = createContextId<any>(
          'height.home-context'
        );