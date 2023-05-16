// dbOperations.js

const {
  rollback,
  insert,
  commit,
  select,
  update,
  del,
  startTransaction
} = require('@evershop/postgres-query-builder');

const {
  getConnection
} = require('@evershop/evershop/src/lib/postgres/connection');

const pool = require('@evershop/evershop/src/lib/postgres/connection').pool;

// Select operation
async function selectData() {
  const query = select();
  query.from('cms_page')
  .leftJoin('cms_page_description')
  .on('cms_page.cms_page_id', '=', 'cms_page_description.cms_page_description_cms_page_id');
  query.where('status', '=', 1);
  query.where('cms_page_description.url_key', '=', request.params.url_key);
  
  const cmsPage = await query.load(pool);
  return cmsPage;
}

// Insert operation
async function insertData(orderId, carrierName, trackingNumber) {
  const connection = await getConnection();
  await startTransaction(connection);
  try {
    await insert('shipment').given({
      shipment_order_id: orderId,
      carrier_name: carrierName,
      tracking_number: trackingNumber
    }).execute(connection);
    await commit(connection);
  } catch (e) {
    await rollback(connection);
    throw e;
  }
}

// Update operation
async function updateData(orderId) {
  const connection = await getConnection();
  await startTransaction(connection);
  try {
    await update('order')
    .given({
        shipment_status: 'fullfilled'
      })
    .where('order_id', '=', orderId)
    .execute(connection);
    await commit(connection);
  } catch (e) {
    await rollback(connection);
    throw e;
  }
}

// Delete operation
async function deleteData(orderId) {
  const connection = await getConnection();
  await startTransaction(connection);
  try {
    await del('order')
    .where('order_id', '=', orderId)
    .execute(connection);
    await commit(connection);
  } catch (e) {
    await rollback(connection);
    throw e;
  }
}

module.exports = { selectData, insertData, updateData, deleteData };
