'use strict'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import * as aws from '@pulumi/aws';

/**
 * A simple function that returns the request.
 * 
 * @param {APIGatewayProxyEvent} event - 
 * @returns returns a confirmation to the message to the 
 */
export const handler: aws.lambda.EventHandler<APIGatewayProxyEvent, APIGatewayProxyResult> = async (event) => {
  const body = event.body ? JSON.parse(event.body) : null;

  console.log('Received body: ', body);

  return {
    statusCode: 200,
    body: JSON.stringify({
      affirmation: "Nice job, you've done it! :D",
      requestBodyEcho: body
    })
  }
}

export default handler;