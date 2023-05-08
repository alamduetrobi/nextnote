import User from '../../../models/User';
import dataitem from '../../../utils/dataitem';
import db from '../../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(dataitem.users);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};

export default handler;
