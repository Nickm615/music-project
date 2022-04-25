import { camelCasePropertyNameResolver, DeliveryClient } from '@kentico/kontent-delivery';
import packageInfo from "../package.json";

const sourceTrackingHeaderName = "X-KC-SOURCE";

// environment variables
const projectId = process.env.REACT_APP_PROJECT_ID || '';
const previewApiKey = process.env.REACT_APP_PREVIEW_API_KEY || '';

let Client = new DeliveryClient({
    projectId: projectId,
    previewApiKey: previewApiKey,
    // defaultQueryConfig: {
    //   usePreviewMode: yes,
    // },
    globalHeaders: (_queryConfig) => [
      {
        header: sourceTrackingHeaderName,
        value: `${packageInfo.name};${packageInfo.version}`,
      },
    ],
    propertyNameResolver: camelCasePropertyNameResolver
  });

export { Client} ;
