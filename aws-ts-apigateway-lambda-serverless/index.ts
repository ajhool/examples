import * as awsx from "@pulumi/awsx";
import handler from './handler';

/**
 * api-gatewayx https://www.pulumi.com/docs/guides/crosswalk/aws/api-gateway/
 */

// Create an API endpoint.
let endpoint = new awsx.apigateway.API("hello-world", {
  routes: [
    {
      path: "/{route+}",
      method: "GET",
      // Functions can be imported from other modules
      eventHandler: handler
    },
    {
      path: "/{route+}",
      method: "POST",
      // Functions can be imported from other modules
      eventHandler: handler
    },
    {
      path: "/{route+}",
      method: "DELETE",
      // Functions can be created inline
      eventHandler: async (event) => {
        console.log('Inline delete event handler');
        console.log(event);

        return {
          statusCode: 200,
          body: JSON.stringify({
            affirmation: "Nice job, you've done it! :D"
          })
        }
      }
    },
  ],
});

// Pulumi exports values 
// See these outputs using: pulumi stack output endpointUrl
export const endpointUrl = endpoint.url;