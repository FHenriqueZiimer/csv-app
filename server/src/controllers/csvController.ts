import { Request, Response } from 'express';
import csvParser from 'csv-parser';

interface CsvRow {
  [key: string]: string;
}

const csvData: CsvRow[] = [];

export const uploadCSV = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const filePath = req.file.path;

  require('fs')
    .createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (row: CsvRow) => {
      return csvData.push(row);
    })
    .on('end', () => {
      return res.json({ message: 'CSV file uploaded and data stored' });
    });
};

export const searchCSV = (req: Request, res: Response) => {
  const searchQuery: any = req.query.q;
 
  if (!searchQuery) {
    if(csvData.length <= 0) {
      return res.json([]);
    }
    return res.json(csvData)
  }

  const filteredData = csvData.filter((row) => {
    for (const key in row) {
      if (row[key].toLowerCase().includes(searchQuery.toLowerCase())) {
        return true;
      }
    }
    return false;
  });

  return res.json(filteredData);
};
