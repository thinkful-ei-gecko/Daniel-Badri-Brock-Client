export const findQueue = (queues = [], queue_id) =>
  queues.find(queue => queue.id === Number(queue_id));

export const findCat = (cats = [], cat_id) =>
  cats.find(cat => cat.id === Number(cat_id));

export const getCatsForQueue = (cats = [], queue_id) =>
  !queue_id
    ? cats
    : cats.filter(cat => cat.queue_id === Number(queue_id));

export const countCatsForQueue = (cats = [], queue_id) =>
  cats.filter(cat => cat.queue_id === queue_id).length;