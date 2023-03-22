export const ORDER_STAGE = [
  'Order received',
  'Order under preparation',
  'Ready for delivery',
  'Delivered',
];

export const ID_ORDER_MAP = {
  1: 'Waiting for supplier approval', // Order recieved
  2: 'Waiting for supplier completion',
  3: 'Collection pending',
  4: 'Collection started',
  5: 'Collection completed',
  6: 'Cancellation request', // upto 6 - Order under preperation
  7: 'Ready for delivery', // Ready for delivery
  8: 'Cancelled',
  9: 'Delivered', // Delivered
};
