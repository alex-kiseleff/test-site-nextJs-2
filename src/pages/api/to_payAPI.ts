import { NextApiRequest, NextApiResponse } from 'next';
import { INewData } from '../../interfaces/interfaces';
import { db } from './data/DATA_BASE';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		const { id } = req.query;
		const { operators } = db;
		const operatorCurrent = operators.filter((item) => item.id === id);
		return res.status(200).json(operatorCurrent);
	}

	if (req.method === 'POST') {
		// Эмуляция post-запроса в рандомном порядке
		if (Math.random() > 0.5) {
			// ... Обработка данных ...
			const pay: Array<INewData> = db.pay;
			const { phone, sum } = req.body;
			const newData = {
				phone,
				sum,
			};
			pay.push(newData);
			return res.status(201).json(newData);
		} else {
			return res.status(503).json({});
		}
	}
};

export default handler;
