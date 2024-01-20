import { createContextId } from "@builder.io/qwik";

export const DashboardWidthContext = createContextId<any>(
    'width.layout-context'
  );

  export const DashboardHeightContext = createContextId<any>(
      'height.layout-context'
    );